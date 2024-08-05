import { useEffect, useRef } from 'react';

const useNotification = ({
  onNotificationClick,
  onNotificationNotExistCallback,
  onNotificationNotGrantedCallback,
}: UseNotificationParams = {}) => {
  const notificationRef = useRef<null | Notification>(null);

  const onNotification = ({ title, ...options }: { title: string } & NotificationOptions) => {
    if (!Notification) {
      if (onNotificationNotExistCallback) onNotificationNotExistCallback();
      return;
    }
    if (Notification.permission !== 'granted') {
      if (onNotificationNotGrantedCallback) onNotificationNotGrantedCallback();
      return;
    }

    notificationRef.current = new Notification(title, options);

    notificationRef.current.addEventListener('click', () => {
      window.focus();
      if (onNotificationClick) onNotificationClick();
    });
  };

  useEffect(() => {
    if (Notification.permission === 'granted') return;

    void (async () => {
      try {
        await Notification.requestPermission();
      } catch (err) {
        console.error(`Notification is not exist`);
      }
    })();
  }, []);

  return { onNotification };
};

interface UseNotificationParams {
  onNotificationClick?: () => void;
  onNotificationNotExistCallback?: () => void;
  onNotificationNotGrantedCallback?: () => void;
}

export default useNotification;
