(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),s=n.n(r),c=(n(19),n(11)),o=n(6),l=n(7),u=n(13),m=n(12),d=(n(20),n(8)),h=n(9),v=n(10);var f=function(e){var t=e.items,n=t.map((function(n){return i.a.createElement("div",{className:"list",key:n.key},i.a.createElement("input",{id:t.key,value:n.text,onChange:function(t){e.setUpdate(t.target.value,n.key)}}),i.a.createElement("span",null,i.a.createElement(d.a,{className:"faicons",icon:h.a,onClick:function(){return e.deleteItem(n.key)}})))}));return i.a.createElement("div",null,i.a.createElement(v.a,{duration:300,easing:"ease-in-out"},n))},p=(n(26),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={items:[],currentItem:{key:"",text:""}},e}return Object(l.a)(n,[{key:"handleText",value:function(e){this.setState({currentItem:{key:Date.now(),text:e.target.value}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(c.a)(this.state.items),[t]);this.setState({items:n,currentItem:{key:"",text:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this,a=this.state.items;a.map((function(i){i.key===t&&(i.text=e),n.setState({items:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("h1",{id:"name"},"TODO LIST"),i.a.createElement("form",{onSubmit:this.addItem.bind(this)},i.a.createElement("input",{placeholder:"Enter Your Text",value:this.state.currentItem.text,onChange:this.handleText.bind(this)}),i.a.createElement("button",{type:"submit"},"ADD"))),i.a.createElement(f,{items:this.state.items,deleteItem:this.deleteItem.bind(this),setUpdate:this.setUpdate.bind(this)}))}}]),n}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.979f3fa8.chunk.js.map