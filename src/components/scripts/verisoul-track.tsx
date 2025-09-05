'use client';

import Script from 'next/script';

const VerisoulScript = () => {
  return (
    <Script id="verisoul-loader" strategy="afterInteractive">
      {`!function(e){if(e.Verisoul)return;const r=[],t={},o=new Proxy(t,{get:(e,o)=>o in t?t[o]:(...e)=>new Promise(((t,n)=>r.push([o,e,t,n]))),set:(e,r,o)=>(t[r]=o,!0)});e.Verisoul=o;const n=()=>{Object.keys(t).length&&r.splice(0).forEach((([e,r,o,n])=>{try{Promise.resolve(t[e](...r)).then(o,n)}catch(e){n(e)}}))},c=document.querySelector("script[verisoul-project-id]"),s=()=>r.splice(0).forEach((([,,,e])=>e(new Error("Failed to load Verisoul SDK"))));if(!c)return void s();c.addEventListener("load",n,{once:!0}),c.addEventListener("error",(()=>{clearInterval(i),s()}),{once:!0});const i=setInterval((()=>{Object.keys(t).length&&(clearInterval(i),n())}),40)}(window);`}
    </Script>
  );
};

export default VerisoulScript;
