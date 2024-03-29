import { ScreenGuardBlurDataObject, ScreenGuardImageDataObject } from './data';
declare const _default: {
  /**
   * activate screenshot blocking (iOS 13+, Android 5+)
   * @param capturedBackgroundColor background color layout after taking a screenshot
   * @version v0.0.2+
   */
  register(capturedBackgroundColor: String | null): void;
  /**
   * Activate screenshot blocking with a blur effect after captured (iOS 13+, Android 6+)
   * @param data ScreenGuardBlurDataObject data object
   * @param callback void callback after a screenshot or a video capture has been taken
   * @version v1.0.2-beta+
   */
  registerWithBlurView(data: ScreenGuardBlurDataObject, callback: any): void;
  /**
   * activate without blocking screenshot (iOS 10+, Android 5+ )
   * For screenshot detector only, this will fit your need.
   * @deprecated this function is deprecated and will be removed at least from ver 4.0.0+ or in the near future
   * consider using registerScreenRecordingEventListener and registerScreenshotEventListener instead
   * @param void callback callback after a screenshot or a video screen capture has been taken
   * @version v0.0.6+
   */
  registerWithoutScreenguard(callback: (arg: any) => void): void;
  /**
   * activate with an Image uri (iOS 13+, Android 8+)
   * @param data ScreenGuardImageDataObject data object,
   * @param callback void callback after a screenshot or a video screen capture has been taken
   * @version v1.0.2-beta+
   */
  registerWithImage(
    data: ScreenGuardImageDataObject,
    callback: (arg: any) => void
  ): void;
  /**
   * Deactivate screenguard
   * Clear all screen protector and event listening
   * @version v0.0.2+
   */
  unregister(): void;
  /**
   * Screenshot event listener
   * Register for screenshot event listener
   * @version v0.3.6+
   */
  registerScreenshotEventListener(callback: (arg: any) => void): void;
  /**
   * Screen recording event listener (iOS only)
   * Register for screen recording event listener
   * @version v0.3.6+
   */
  registerScreenRecordingEventListener(callback: (arg: any) => void): void;
};
export default _default;
