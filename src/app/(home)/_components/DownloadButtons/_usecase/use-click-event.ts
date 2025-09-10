import { useCallback } from 'react';

// import { trackDownloadAndroidClick, trackDownloadIOSClick } from '../../../_model/data-layers';

const useClickEvent = () => {
  const onDownloadAndroidClick = useCallback(() => {
    // trackDownloadAndroidClick();
  }, []);

  const onDownloadIOSClick = useCallback(() => {
    // trackDownloadIOSClick();
  }, []);

  return {
    handleDownloadAndroidClick: onDownloadAndroidClick,
    handleDownloadIOSClick: onDownloadIOSClick,
  };
};

export default useClickEvent;
