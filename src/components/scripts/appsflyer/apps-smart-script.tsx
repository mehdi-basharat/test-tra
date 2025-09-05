import Script from 'next/script';

const AppsflyerSmartScript = () => {
  return <Script src="/scripts/smart-script.js" strategy="worker" />;
};

export default AppsflyerSmartScript;
