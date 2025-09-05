const APPSFLYER_WEB_KEY = document.currentScript.getAttribute('data-smart-banner-web-key');

function initializeAppsflyer(window, document, script, st, a, c, i, o, p) {
  window.AppsFlyerSdkObject = a;
  window.AF =
    window.AF ||
    function () {
      (window.AF.q = window.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments)));
    };
  window.AF.id = window.AF.id || i;
  window.AF.plugins = {};
  o = document.createElement(script);
  p = document.getElementsByTagName(script)[0];
  o.async = 1;
  o.src =
    'https://websdk.appsflyer.com?' +
    (c.length > 0 ? 'st=' + c.split(',').sort().join(',') + '&' : '') +
    (i.length > 0 ? 'af_id=' + i : '');
  p.parentNode.insertBefore(o, p);
}

initializeAppsflyer(window, document, 'script', 0, 'AF', 'banners', { banners: { key: APPSFLYER_WEB_KEY } });

// Smart Banners are by default set to the max z-index value, so they won't be hidden by the website elements. This can be changed if you want some website components to be on top of the banner.
window.AF('banners', 'hideBanner');
