import{r as e,R as t,a as r}from"./vendor.7f796e7c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function n(){const[r,n]=e.exports.useState(0);return t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("img",{src:"/assets/logo.ecc203fb.svg",className:"App-logo",alt:"logo"}),t.createElement("p",null,"Hello Vite + React!"),t.createElement("p",null,t.createElement("button",{onClick:()=>n((e=>e+1))},"count is: ",r)),t.createElement("p",null,"Edit ",t.createElement("code",null,"App.tsx")," and save to test HMR updates."),t.createElement("p",null,t.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")," | ",t.createElement("a",{className:"App-link",href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener noreferrer"},"Vite Docs"))))}r.render(t.createElement(t.StrictMode,null,t.createElement(n,null)),document.getElementById("root"));
