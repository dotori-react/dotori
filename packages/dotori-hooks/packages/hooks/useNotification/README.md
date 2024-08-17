# useNotification

- It helps to send notifications to the os.

<br/>

## Features

- It handles cases where permissions are not granted, notifications do not exist, or a callback function is triggered when a notification is clicked.

<br/>

## Types

```typescript
interface UseNotificationParams {
  onNotificationClick?: () => void;
  onNotificationNotExistCallback?: () => void;
  onNotificationNotGrantedCallback?: () => void;
}

const useNotification: ({
  onNotificationClick,
  onNotificationNotExistCallback,
  onNotificationNotGrantedCallback,
}?: UseNotificationParams) => {
  onNotification: ({ title, ...options }: { title: string } & NotificationOptions) => void;
};
```

<br/>

## Example

```typescript
const App = () => {
  const { onNotification } = useNotification();

  return (
    <button onClick={() => onNotification({title: 'notification title'})}>call notification</button>
  )
};
```
