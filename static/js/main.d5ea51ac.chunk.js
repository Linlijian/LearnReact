(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={App:"App_App__1vqTB","App-logo":"App_App-logo__26u38","App-logo-spin":"App_App-logo-spin__3vzbW","App-header":"App_App-header__3cXPs","App-link":"App_App-link__1SBqe",red:"App_red__1TPgQ",bold:"App_bold__5Sbrr",HelloWorld:"App_HelloWorld__27Zsu",Red:"App_Red__2HRpB",yellow:"App_yellow__3Cz1H"}},13:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),s=(n(19),n(9)),l=n(11),c=n(4),p=n(5),u=n(10),h=n(6),m=n(12),d=n(1),v=n.n(d),g=n(7),_=n.n(g),w=function(e){return o.a.createElement("div",{className:_.a.Person},o.a.createElement("p",{onClick:e.click},"Person this here. My name ",e.name),o.a.createElement("p",null,e.children),o.a.createElement("input",{onChange:e.change}))},A=function(e){var t="Text too short";return e.textLength>5&&(t="Text too enough"),o.a.createElement("div",null,t)},f=n(8),C=n.n(f),k=function(e){return o.a.createElement("div",{className:C.a.card,onClick:e.delete},e.varchar)},S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={name:"A",age:23,person:[{id:"asw",name:"Meiio",age:19},{id:"wqd",name:"Pori",age:9},{id:"dfr",name:"Kiro",age:10}],isShowDiv:!1,isShowAssignment:!1,inputValues:""},n.onClickShowDiv=function(){var e=n.state.isShowDiv;n.setState({isShowDiv:!e})},n.onClickShowAssignment=function(){var e=n.state.isShowAssignment;n.setState({isShowAssignment:!e})},n.onChickDelete=function(e){var t=n.state.person;t.splice(e,1),n.setState({person:t})},n.onChickDeleteCard=function(e){var t=n.state.inputValues.split("");t.splice(e,1);var a=t.join("");n.setState({inputValues:a})},n.inputChangeHendler=function(e){n.setState({inputValues:e.target.value})},n.onChangeName=function(e,t){var a=n.state.person.findIndex(function(e){return e.id===t}),o=Object(l.a)({},n.state.person[a]);o.name=e.target.value;var i=Object(s.a)(n.state.person);i[a]=o,n.setState({person:i})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=null,n=null,a="";this.state.isShowDiv&&(t=o.a.createElement("div",null,this.state.person.map(function(t,n){return o.a.createElement(w,{name:t.name,click:function(){return e.onChickDelete(n)},key:t.id,change:function(n){return e.onChangeName(n,t.id)}})})),a=v.a.yellow);var i=this.state.inputValues.split("").map(function(t,n){return o.a.createElement(k,{varchar:t,key:n,delete:function(){return e.onChickDeleteCard(n)}})});this.state.isShowAssignment&&(n=o.a.createElement("div",null,o.a.createElement("p",null,"Show assignment"),o.a.createElement("input",{type:"text",onChange:this.inputChangeHendler,value:this.state.inputValues}),o.a.createElement("p",null,this.state.inputValues),o.a.createElement(A,{textLength:this.state.inputValues.length}),i),a=v.a.Red);var r=[];return this.state.person.length<=2&&r.push(v.a.red),this.state.inputValues.length>5&&r.push(v.a.bold),o.a.createElement("div",{className:v.a.HelloWorld},o.a.createElement("p",{className:r.join(" ")},"Hello world"),o.a.createElement("button",{className:a,onClick:this.onClickShowDiv},"Show Div"),o.a.createElement("button",{className:a,onClick:this.onClickShowAssignment},"Show Assignment"),t,n)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports={Person:"Person_Person__27NzE"}},8:function(e,t,n){e.exports={card:"CharCard_card__3zXLD"}}},[[13,1,2]]]);
//# sourceMappingURL=main.d5ea51ac.chunk.js.map