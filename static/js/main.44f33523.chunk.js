(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3tBXv",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3Iu0d"}},23:function(e,t,a){e.exports={Button:"Button_Button__1G3Gc"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__MlNgp"}},27:function(e,t,a){},3:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1hVsj",SearchForm:"Searchbar_SearchForm__3Agec",SearchFormButton:"Searchbar_SearchFormButton__hHVjP",SearchFormInput:"Searchbar_SearchFormInput__1ovoB"}},33:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(22),o=a.n(c),i=(a(32),a(33),a(12)),s=a(5),m=a(6),u=a(8),l=a(7),h=a(23),g=a.n(h),p=a(0);function d(e){var t=e.type,a=e.name,n=e.clickOnBtn,r=e.id,c=e.newClassName;return Object(p.jsx)("button",{className:c||g.a.Button,type:t,onClick:n,id:r,children:a})}var f=a(3),b=a.n(f),I=a(13),j=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={findImage:""},e.handleFindImage=function(t){e.setState({findImage:t.currentTarget.value.toLowerCase()})},e.onChangeInput=function(t){t.preventDefault(),""!==e.state.findImage.trim()&&(e.props.onSubmit(e.state.findImage),e.setState({findImage:""}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:b.a.Searchbar,children:Object(p.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.onChangeInput,children:[Object(p.jsx)(d,{type:"submit",newClassName:b.a.SearchFormButton,id:I.generate()}),Object(p.jsx)("input",{className:b.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:this.state.findImage,onChange:this.handleFindImage})]})})}}]),a}(n.Component),v=a(10),y=a.n(v);function S(e){return e.items.map((function(e){return Object(p.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(p.jsx)("img",{src:e.webformatURL,alt:e.tags,className:y.a.ImageGalleryItemImage})},e.id)}))}var O=a(24),_=a.n(O);function x(e){var t=e.arr;return Object(p.jsx)("ul",{className:_.a.ImageGallery,children:Object(p.jsx)(S,{items:t})})}var k=a(11),w=a.n(k),B=a(25),G=a(26),F=a.n(G),C=function(){var e=Object(B.a)(w.a.mark((function e(t,a){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("22309735-f1ff37d55971be81fb077216b","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=a(27),M=a.n(N),A=a(13),D=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={findImage:"",images:[],page:1,loading:!1},e.handleFormSubmit=function(t){e.setState({findImage:t}),console.log(e.state.findImage)},e.onButtonMoreClick=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.searchImages()}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.findImage,r=a.page;t.findImage!==n&&(this.searchImages(n,1),this.setState({page:1})),t.page!==r&&this.searchImages(n,r)}},{key:"searchImages",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;C(t,a).then((function(t){1===a?e.setState({images:t.hits}):(e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:M.a.App,children:[Object(p.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(x,{arr:this.state.images}),Object(p.jsx)(d,{type:"button",name:"Load more",id:A.generate(),clickOnBtn:this.onButtonMoreClick})]})}}]),a}(n.Component);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.44f33523.chunk.js.map