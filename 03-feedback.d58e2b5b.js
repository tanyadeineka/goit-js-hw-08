!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var i,r,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(w,t),s?S(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function w(){var e=g();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-c);return d?v(n,a-(e-l)):n}(e))}function O(e){return f=void 0,p&&i?S(e):(i=r=void 0,u)}function T(){var e=g(),n=j(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(w,t),S(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},T.flush=function(){return void 0===f?u:O(g())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const S=document.querySelector(".feedback-form");S.addEventListener("input",e(t)((function(){const e={email:h.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const h=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]');!function(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&(h.value=e.email,j.value=e.message)}(),S.addEventListener("submit",(function(e){e.preventDefault(),this.reset(),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.d58e2b5b.js.map