export const MIME_TYPES = {
  // Images
  png: 'image/png',
  gif: 'image/gif',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  avif: 'image/avif',
  heic: 'image/heic',

  // Documents
  mp4: 'video/mp4',
  zip: 'application/zip',
  csv: 'text/csv',
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  exe: 'application/vnd.microsoft.portable-executable',

  // haansoft
  hanDoc: 'application/haansoftdoc',
  hanDocx: 'application/haansoftdocx',
  hanXls: 'application/haansoftxls',
  hanXlsx: 'application/haansoftxlsx',
  hanPpt: 'application/haansoftppt',
  hanPptx: 'application/haansoftpptx',
  hwp: 'application/x-hwp, application/haansofthwp, application/vnd.hancom.hwp',
  hwt: 'application/x-hwt, application/haansofthwt, application/vnd.hancom.hwt',
  hwl: 'application/vnd.hancom.hml, application/haansofthml',
  hwpx: 'application/vnd.hancom.hwpx',
} as const;

export const IMAGE_MIME_TYPE = [
  MIME_TYPES.png,
  MIME_TYPES.gif,
  MIME_TYPES.jpeg,
  MIME_TYPES.svg,
  MIME_TYPES.webp,
  MIME_TYPES.avif,
  MIME_TYPES.heic,
];

export const PDF_MIME_TYPE = [MIME_TYPES.pdf];
export const WORD_MIME_TYPE = [MIME_TYPES.doc, MIME_TYPES.docx, MIME_TYPES.hanDoc, MIME_TYPES.hanDocx];
export const EXCEL_MIME_TYPE = [MIME_TYPES.xls, MIME_TYPES.xlsx, MIME_TYPES.hanXls, MIME_TYPES.hanXlsx];
export const POWERPOINT_MIME_TYPE = [MIME_TYPES.ppt, MIME_TYPES.pptx, MIME_TYPES.hanPpt, MIME_TYPES.hanPptx];
export const EXE_MIME_TYPE = [MIME_TYPES.exe];
