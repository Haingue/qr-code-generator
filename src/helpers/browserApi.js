const supportsSVG = () => {
    if (
      !('supports' in window.ClipboardItem) ||
      !window.ClipboardItem.supports('image/svg+xml')
    ) {
      return false;
    }
    return true;
  };
export { supportsSVG };