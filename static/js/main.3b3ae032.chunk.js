(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Y5MG",Modal:"Modal_Modal__3d9Af"}},14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__11HUj",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1rCD-"}},25:function(e,t,a){e.exports={Button:"Button_Button__2ukBr"}},29:function(e,t,a){e.exports={mainSection:"Section_mainSection__3dTqy"}},30:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1tEwR"}},31:function(e,t,a){},37:function(e,t,a){},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__fCxRN",SearchForm:"Searchbar_SearchForm__XQ0qi",SearchFormButton:"Searchbar_SearchFormButton__2sY24",SearchFormInput:"Searchbar_SearchFormInput__3F4NS"}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(36),a(37),a(15)),s=a(4),l=a(6),u=(a(38),a(39),a(25)),m=a.n(u),j=a(1);function d(e){var t=e.type,a=e.name,n=e.clickOnBtn,r=e.id,c=e.newClassName;return Object(j.jsx)("button",{className:c||m.a.Button,type:t,onClick:n,id:r,children:a})}var b=a(8),h=a.n(b),O=a(16);function f(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(j.jsx)("header",{className:h.a.Searchbar,children:Object(j.jsxs)("form",{className:h.a.SearchForm,onSubmit:function(e){e.preventDefault(),""===c.trim()&&l.b.error("Please, enter your request!",{theme:"colored"}),t(c),o("")},children:[Object(j.jsx)(d,{type:"submit",newClassName:h.a.SearchFormButton,id:O.generate()}),Object(j.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var g=a(12),p=a.n(g),x=a(26),v=a(27),S=a.n(v),y=function(){var e=Object(x.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("22309735-f1ff37d55971be81fb077216b","&image_type=photo&orientation=horizontal&per_page=").concat(12));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=a(13),I=a.n(_),w=document.querySelector("#modal-root");function k(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[]);var r=function(e){"Escape"!==e.key&&e.target!==e.currentTarget||t()};return Object(c.createPortal)(Object(j.jsx)("div",{className:I.a.Overlay,onClick:r,children:Object(j.jsx)("div",{className:I.a.Modal,children:a})}),w)}var C=a(28),N=a.n(C),B=a(29),F=a.n(B);function G(e){var t=e.children;return Object(j.jsx)("section",{className:F.a.mainSection,children:t})}var M=a(14),E=a.n(M);function q(e){var t=e.item,a=e.onClick;return Object(j.jsx)("li",{className:E.a.ImageGalleryItem,id:t.id,children:Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,className:E.a.ImageGalleryItemImage,onClick:function(e){e.preventDefault(),a(t.largeImageURL)}})})}var L=a(30),P=a.n(L);function T(e){var t=e.arr,a=e.onClick,n=e.key;return Object(j.jsx)("ul",{className:P.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(q,{item:e,onClick:a})}))},n)}var R=a(16);function D(e){var t=e.hideBtn,a=e.images,n=e.status,r=e.onButtonNextPage,c=e.toggleShowModal;return"idle"===n?Object(j.jsx)(G,{children:Object(j.jsx)("p",{children:"Please input search request"})}):"pending"===n?Object(j.jsxs)(G,{children:[Object(j.jsx)(T,{arr:a,onClick:c},R.generate()),Object(j.jsx)(N.a,{type:"BallTriangle",color:"#00BFFF",height:200,width:200})]}):"rejected"===n?Object(j.jsx)(G,{children:Object(j.jsx)("p",{children:"Service not responding, please try again later"})}):"resolved"===n?Object(j.jsxs)(G,{children:[Object(j.jsx)(T,{arr:a,onClick:c},R.generate()),t&&Object(j.jsx)(d,{type:"button",name:"Load more",id:R.generate(),clickOnBtn:r})]}):void 0}var H=a(31),U=a.n(H);function A(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),u=o[0],m=o[1],d=Object(n.useState)(1),b=Object(s.a)(d,2),h=b[0],O=b[1],g=Object(n.useState)("idle"),p=Object(s.a)(g,2),x=p[0],v=p[1],S=Object(n.useState)(!1),_=Object(s.a)(S,2),I=_[0],w=_[1],C=Object(n.useState)(""),N=Object(s.a)(C,2),B=N[0],F=N[1],G=Object(n.useState)(!0),M=Object(s.a)(G,2),E=M[0],q=M[1],L=function(e){w(!I),F(e)};Object(n.useEffect)((function(){""!==a&&(""!==a&&v("pending"),y(a,h).then((function(e){q(!0);var t=Math.ceil(e.totalHits/12);if(h===t&&q(!1),0===e.hits.length)return l.b.error("No result were found for your search",{theme:"colored",position:"top-left",autoClose:5e3}),O(1),void v("idle");1===h?(m(e.hits),v("resolved")):(m([].concat(Object(i.a)(u),Object(i.a)(e.hits))),v("resolved"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).catch((function(e){l.b.error(e,{theme:"colored"}),v("rejected")})))}),[a,h]);return Object(j.jsxs)("div",{className:U.a.App,children:[Object(j.jsx)(f,{onSubmit:function(e){""===e.trim()?(r(""),m([]),v("idle")):r(e)}}),Object(j.jsx)(D,{hideBtn:E,images:u,status:x,onButtonNextPage:function(){O((function(e){return e+1}))},toggleShowModal:L}),I&&Object(j.jsx)(k,{onClose:L,children:Object(j.jsx)("img",{src:B,alt:"#"})}),Object(j.jsx)(l.a,{autoClose:3e3})]})}o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.3b3ae032.chunk.js.map