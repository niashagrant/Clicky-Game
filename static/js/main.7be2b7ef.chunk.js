(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"latte","image":"https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955__480.jpg"},{"id":2,"name":"tea","image":"https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527__480.jpg"},{"id":3,"name":"smoothie","image":"https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014__480.jpg"},{"id":4,"name":"detox","image":"https://cdn.pixabay.com/photo/2016/06/29/17/14/water-1487304__480.jpg"},{"id":5,"name":"beer","image":"https://cdn.pixabay.com/photo/2018/11/08/22/12/beer-3803425__480.jpg"},{"id":6,"name":"martini","image":"https://cdn.pixabay.com/photo/2019/07/17/19/19/cocktail-4344724__480.jpg"},{"id":7,"name":"bubbles","image":"https://cdn.pixabay.com/photo/2015/11/07/11/02/sparkling-wine-1030754__480.jpg"},{"id":8,"name":"red","image":"https://cdn.pixabay.com/photo/2016/07/04/02/40/wine-1495859__480.jpg"},{"id":9,"name":"shot","image":"https://cdn.pixabay.com/photo/2019/03/04/22/34/lit-whiskey-shot-4035278__480.jpg"},{"id":10,"name":"mojito","image":"https://cdn.pixabay.com/photo/2018/08/07/00/29/drink-3588804__480.jpg"},{"id":11,"name":"water","image":"https://cdn.pixabay.com/photo/2017/05/15/17/43/calm-2315559__480.jpg"},{"id":12,"name":"iced-tea","image":"https://cdn.pixabay.com/photo/2017/04/11/03/52/tea-2220485__480.jpg"}]')},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(3),c=a.n(i),r=(a(14),a(1)),s=a(4),l=a(5),m=a(8),d=a(7);a(15);var h=function(e){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid text-white"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4 text-center font-weight-bolder"},"Drink Enthusiast!",o.a.createElement("i",{className:"fas fa-glass-cheers"})),o.a.createElement("p",{className:"lead text-center font-weight-bold"},"How well can you remember the drinks you drank? Choose the same drink and you lose!"),o.a.createElement("div",{className:"row justify-content-between text-center font-weight-bold"},o.a.createElement("div",{className:"col"},"Score: ",e.score),o.a.createElement("div",{className:"col"},"High Score: ",e.highScore))))};a(16);var p=function(e){return o.a.createElement("div",{className:"col-3"},o.a.createElement("div",{className:"card",onClick:e.onClick},o.a.createElement("img",{src:e.drink.image,className:"card-img-top",alt:e.drink.name,"data-drinkid":e.drink.id})))},g=a(6),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={drinks:g,score:0,highScore:0,clickedDrinks:[]},e.cardHandler=function(t){var a=t.target.getAttribute("data-drinkid");if(console.log(a),e.arrayShuffler(),e.state.clickedDrinks.includes(a))console.log("LOSER"),alert("You already selected that drink! Sorry you must start again. Click 'OK' to play again!"),e.setState({clickedDrinks:[],score:0});else{var n=Object(r.a)(e.state.clickedDrinks);n.push(a),12===n.length?(console.log("winner"),alert("You have a great memory! Even after all that alcohol :p!")):e.setState({clickedDrinks:n,score:e.state.score+1,highScore:e.state.score+1>e.state.highScore?e.state.highScore+1:e.state.highScore})}},e.arrayShuffler=function(){var t=Object(r.a)(e.state.drinks);t.sort((function(){return Math.random()-.5})),e.setState({drinks:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(h,{score:this.state.score,highScore:this.state.highScore}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.state.drinks.map((function(t,a){return o.a.createElement(p,{key:a,drink:t,onClick:e.cardHandler})})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7be2b7ef.chunk.js.map