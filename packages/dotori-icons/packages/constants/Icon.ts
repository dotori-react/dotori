import ArrowRightAltIcon from '@/assets/arrow_right_alt.svg?react';
import CheckIcon from '@/assets/check.svg?react';
import CheckIndeterminateIcon from '@/assets/check_indeterminate.svg?react';
import ChevronArrowRightIcon from '@/assets/chevron_arrow_right.svg?react';
import ChevronTwinArrowTopBottomIcon from '@/assets/chevron_twin_arrow_top_bottom.svg?react';
import CircleIcon from '@/assets/circle.svg?react';
import CloseIcon from '@/assets/close.svg?react';
import CloudUploadIcon from '@/assets/cloud_upload.svg?react';
import ExcelIcon from '@/assets/excel.svg?react';
import FileIcon from '@/assets/file.svg?react';
import HamburgerIcon from '@/assets/hamburger.svg?react';
import HomeIcon from '@/assets/home.svg?react';
import HwpIcon from '@/assets/hwp.svg?react';
import PdfIcon from '@/assets/pdf.svg?react';
import SettingIcon from '@/assets/setting.svg?react';
import SpinnerIcon from '@/assets/spinner.svg?react';
import StarIcon from '@/assets/star.svg?react';
import VisibilityOffIcon from '@/assets/visibility_off.svg?react';
import VisibilityOnIcon from '@/assets/visibility_on.svg?react';
import WordIcon from '@/assets/word.svg?react';

export const ICON_MAP = {
  hamburger: HamburgerIcon,
  close: CloseIcon,
  check: CheckIcon,
  star: StarIcon,
  chevronArrowRight: ChevronArrowRightIcon,
  arrowRightAlt: ArrowRightAltIcon,
  checkIndeterminate: CheckIndeterminateIcon,
  circle: CircleIcon,
  cloudUpload: CloudUploadIcon,
  setting: SettingIcon,
  home: HomeIcon,
  visibilityOn: VisibilityOnIcon,
  visibilityOff: VisibilityOffIcon,
  file: FileIcon,
  spinner: SpinnerIcon,
  chevronTwinArrowTopBottom: ChevronTwinArrowTopBottomIcon,
  excel: ExcelIcon,
  hwp: HwpIcon,
  pdf: PdfIcon,
  word: WordIcon,
} as const;
