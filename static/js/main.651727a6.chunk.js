(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),s=n(2),r=n.n(s),i=n(3),c=n(4),l=n(6),u=n(5),b=(n(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],isStartButtonVisible:!0},t.showList=function(){t.setState({goods:[].concat(b),isStartButtonVisible:!1})},t.reverseList=function(){t.setState((function(t){return{goods:t.goods.reverse()}}))},t.sortByAlphabetic=function(){t.setState((function(t){return{goods:[].concat(b).sort()}}))},t.resetListToDefault=function(){t.setState({goods:[].concat(b)})},t.sortByNameLength=function(){t.setState({goods:[].concat(b).sort((function(t,e){return t.length-e.length}))})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.isStartButtonVisible;return a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",className:n?"visible":"invisible",onClick:this.showList},"Start"),a.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortByAlphabetic},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.resetListToDefault},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortByNameLength},"Sort by length"),a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t,className:"list__item"},t)}))))}}]),n}(a.a.Component);r.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.651727a6.chunk.js.map