const SCREENSHOT_EVT = 'onScreenShotCaptured';
const SCREEN_RECORDING_EVT = 'onScreenRecordingCaptured';
const BLACK_COLOR = '#000000';
const REGEX = /[!@#$%^&*(),.?":{}|<>]/;
const IMAGE_REGEX = /\.(jpg|jpeg|png|gif|bmp|webp|svg|tiff|heic|svg)$/i;
const RADIUS_DEFAULT = 15;
const TIME_DELAYED = 1000;

const Alignment = {
  topLeft: 0,
  topCenter: 1,
  topRight: 2,
  centerLeft: 3,
  center: 4,
  centerRight: 5,
  bottomLeft: 6,
  bottomCenter: 7,
  bottomRight: 8,
};

export {
  Alignment, BLACK_COLOR, IMAGE_REGEX, RADIUS_DEFAULT, REGEX, SCREENSHOT_EVT,
  SCREEN_RECORDING_EVT, TIME_DELAYED
};

