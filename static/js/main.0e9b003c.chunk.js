(this.webpackJsonpweather_board=this.webpackJsonpweather_board||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),i=(a(17),a(7)),l=a.n(i),s=a(11),u=a(8),h=a(6),m=a(1),p=a(2),f=a(4),y=a(3),d=a(5),b=(a(19),{updateDate:function(e){return e.split("-").splice(1,2).map((function(e,t){return 0===t&&(e=e.replace("01","Jan").replace("02","Feb").replace("03","Mar").replace("04","Apr").replace("05","May").replace("06","Jun").replace("07","Jul").replace("08","Aug").replace("09","Sep").replace("10","Oct").replace("11","Nov").replace("12","Dec")),e})).join(",")},updateTodayData:function(e){return{desc:e.weather[0].main.toLowerCase(),temp:parseInt(9*e.main.temp/5-459.67),wind:parseInt(2.237*e.wind.speed),humidity:e.main.humidity,visibility:parseInt(e.visibility/1609.344)}},updateDaysData:function(e){return e.list.reduce((function(e,t,a){var n=b.updateDate(t.dt_txt.split(" ")[0]),c=Object.keys(e);return!c.includes(n)&&t.dt_txt.includes("15:00")&&c.length<5&&(e[n]="".concat((9*t.main.temp/5-459.67).toFixed(2),"-").concat(t.weather[0].main.toLowerCase())),e}),{})}}),g=b,v=function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",us&APPID=b5c3a8148fd667e39bc1d42dbd91efc3")).then((function(e){if(!e.ok)throw Error("Error fetching current weather data");return e.json()}))},E=function(e){return fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",us&appid=b5c3a8148fd667e39bc1d42dbd91efc3")).then((function(e){if(!e.ok)throw Error("Error fetching week weather data");return e.json()}))},w=(a(20),a(21),a(22),function(e){var t=e.toggleActiveState,a=function(){t()};return c.a.createElement("svg",{tabIndex:"0",role:"button",onClick:a,onKeyPress:function(e){"Enter"===e.key&&a()},x:"0px",y:"0px",viewBox:"0 0 951 951",className:"menu-icon"},c.a.createElement("path",{d:"M475.5,80.2c-218.3,0-395.3,177-395.3,395.3s177,395.3,395.3,395.3c218.3,0,395.3-177,395.3-395.3 C870.6,257.3,693.7,80.4,475.5,80.2z M475.5,818.1c-189.2,0-342.6-153.4-342.6-342.6s153.4-342.6,342.6-342.6 c189.2,0,342.6,153.4,342.6,342.6C817.9,664.6,664.6,817.9,475.5,818.1z"}),c.a.createElement("path",{d:"M422.8,449.1h105.4v52.7H422.8V449.1z"}),c.a.createElement("path",{d:"M554.6,449.1h52.7v52.7h-52.7V449.1z"}),c.a.createElement("path",{d:"M343.7,449.1h52.7v52.7h-52.7V449.1z"}))}),D=(a(23),a(24),function(e){var t=e.toggleActiveState,a=function(){t()};return c.a.createElement("svg",{tabIndex:"0",role:"button",onClick:a,onKeyPress:function(e){"Enter"===e.key&&a()},className:"back-icon",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"}),c.a.createElement("path",{d:"m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"}),c.a.createElement("path",{d:"m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"}))}),O=(a(25),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this))).handleChange=function(e){a.setState({searchCity:e.target.value})},a.keyPressed=function(e){"Enter"===e.key&&a.submitSearch(e)},a.clearInputs=function(e){e.preventDefault(),a.setState({searchCity:""})},a.submitSearch=function(e){e.preventDefault(),a.props.changeCity(a.state.searchCity),a.props.toggleActiveState(),a.props.fetchWeatherData(a.state.searchCity),a.clearInputs(e)},a.state={searchCity:""},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"city-search__form"},c.a.createElement("label",{htmlFor:"city-search__input"},"Find city"),c.a.createElement("input",{type:"text",id:"city-search__input",placeholder:"Enter city here",onChange:this.handleChange,value:this.state.searchCity,onKeyPress:this.keyPressed}),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement("button",{id:"clear-button",onClick:this.clearInputs},"Clear"),c.a.createElement("button",{id:"submit-button",onClick:this.submitSearch},"Search")))}}]),t}(n.Component)),C=(a(26),a(27),function(e){var t=function(t){var a=t.target.getAttribute("name");e.changeCity(a),e.toggleActiveState(),e.fetchWeatherData(a)};return c.a.createElement("li",{tabIndex:"0",role:"button",className:"history-item",name:e.cityName,onClick:t,onKeyPress:function(e){"Enter"===e.key&&t(e)}},e.cityName)}),k=function(e){var t=e.searchHistory.map((function(t){return c.a.createElement(C,{changeCity:e.changeCity,fetchWeatherData:e.fetchWeatherData,toggleActiveState:e.toggleActiveState,cityName:t,key:t})}));return c.a.createElement("nav",{className:"history"},c.a.createElement("h2",null,"Search history"),c.a.createElement("ul",null,t))},j=function(e){return c.a.createElement("main",null,c.a.createElement("section",{className:"menu-panel"},c.a.createElement(D,{toggleActiveState:e.toggleActiveState}),c.a.createElement(O,{changeCity:e.changeCity,fetchWeatherData:e.fetchWeatherData,toggleActiveState:e.toggleActiveState}),c.a.createElement(k,e)),c.a.createElement("section",{className:"darkscreen"}))},S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(y.a)(t).call(this,e))).toggleActiveState=function(){a.setState({isActive:!a.state.isActive})},a.state={isActive:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"side-menu"},this.state.isActive?c.a.createElement(j,Object.assign({},this.props,{toggleActiveState:this.toggleActiveState})):c.a.createElement(w,{toggleActiveState:this.toggleActiveState}))}}]),t}(n.Component);a(28),a(29),a(30),a(31);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){var t=e.increment,a=e.randomHundred,n=(e.randomFive,e.row),r={animationDelay:"0.".concat(a,"s"),animationDuration:"0.5".concat(a,"s")},o="front"===n?{left:"".concat(t,"%")}:{right:"".concat(t,"%")};return c.a.createElement("div",{className:"drop",style:A({},o,{},r)},c.a.createElement("div",{className:"stem",style:r}))},x=function(){var e=function(e,t){var a=e,n=new Array(20).fill(void 0),r=0;return n=n.map((function(e,n){var o=Math.floor(98*Math.random()+1),i=Math.floor(4*Math.random()+2);return r+=i,c.a.createElement(a,{key:n,increment:r,randomHundred:o,randomFive:i,row:t})}))};return c.a.createElement("main",{className:"rainy"},c.a.createElement("div",{className:"rain front-row"},e(P,"front")),c.a.createElement("div",{className:"rain back-row"},e(P,"back")))},I=(a(32),function(){return c.a.createElement("main",{className:"snowy"},c.a.createElement("div",{className:"snow-row"},new Array(300).fill(void 0).map((function(e,t){return c.a.createElement("div",{className:"snow"})}))))}),M=function(e){var t=e.type;return c.a.createElement("section",{className:"weather-image"},function(e){return"rain"===e?c.a.createElement(x,null):"snow"===e?c.a.createElement(I,null):c.a.createElement("div",null)}(t))},W=(a(33),a(34),a(35),function(e){return c.a.createElement("section",{className:"weather-item weather-item__".concat(e.itemType)},c.a.createElement("p",{className:"header-".concat(e.blockType)},e.weekDay),c.a.createElement("p",{className:"number "+e.typeAbbr}," ",e.number),c.a.createElement("p",null,e.itemType))}),z=function(e){var t=e.weatherData,a=e.title,n=e.type,r=Object.keys(t).filter((function(e){return"desc"!==e})).map((function(e){var a="temp"===e?t.desc:e;return c.a.createElement(W,{key:e,weekDay:"",typeAbbr:e,itemType:a,blockType:n,number:parseInt(t[e])})})),o=Object.keys(t).map((function(e){var a=t[e].toString().split("-");return c.a.createElement(W,{key:e,weekDay:e,typeAbbr:"temp",itemType:a[1],blockType:n,number:parseInt(a[0])})}));return c.a.createElement("section",{className:"weather-row"},c.a.createElement("h2",null,a),c.a.createElement("main",null,"day"===n?r:o))},H=function(e){return c.a.createElement("section",{className:"weather-display"},c.a.createElement("h1",{name:e.searchCity},e.searchCity),c.a.createElement(z,{weatherData:e.weatherCurrentData,title:"Today",type:"day",key:"day"}),c.a.createElement(z,{weatherData:e.weatherDaysData,title:"5 Day Forecast",type:"fiveDays",key:"fiveDays"}))},L=function(e){return c.a.createElement("section",{className:"weather-widget"},c.a.createElement(M,{type:e.weatherCurrentData.desc}),c.a.createElement(H,e))},_=function(e){return c.a.createElement("div",{className:"board-wrapper"},c.a.createElement(S,{changeCity:e.changeCity,searchHistory:e.searchHistory,fetchWeatherData:e.fetchWeatherData}),c.a.createElement(L,{searchCity:e.currentCity,weatherCurrentData:e.weatherData.today,weatherDaysData:e.weatherData.week}))},T=(a(36),function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("svg",{className:"cloud",x:"0px",y:"0px",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M298.189,301.013c-4.482,0-8.115,3.633-8.115,8.115c0,7.157-5.822,12.98-12.979,12.98s-12.98-5.823-12.98-12.98 c0-4.482-3.633-8.115-8.115-8.115c-4.482,0-8.115,3.633-8.115,8.115c0,7.157-5.823,12.98-12.98,12.98s-12.979-5.823-12.979-12.98 c0-4.482-3.633-8.115-8.115-8.115c-4.482,0-8.115,3.633-8.115,8.115c0,16.106,13.103,29.21,29.209,29.21 c8.285,0,15.774-3.467,21.095-9.025c5.321,5.559,12.811,9.025,21.095,9.025c16.106,0,29.209-13.104,29.209-29.21 C306.303,304.645,302.67,301.013,298.189,301.013z"}),c.a.createElement("path",{d:"M158.567,258.572c-11.515,0-20.884,9.369-20.884,20.884c0,4.482,3.633,8.115,8.115,8.115s8.115-3.633,8.115-8.115 c0-2.566,2.088-4.655,4.655-4.655c2.566,0,4.655,2.088,4.655,4.655c0,4.482,3.633,8.115,8.115,8.115s8.115-3.633,8.115-8.115 C179.45,267.941,170.082,258.572,158.567,258.572z"}),c.a.createElement("path",{d:"M353.433,258.572c-11.515,0-20.884,9.369-20.884,20.884c0,4.482,3.633,8.115,8.115,8.115 c4.482,0,8.115-3.633,8.115-8.115c0-2.566,2.088-4.655,4.655-4.655c2.566,0,4.655,2.088,4.655,4.655 c0,4.482,3.633,8.115,8.115,8.115c4.482,0,8.115-3.633,8.115-8.115C374.317,267.941,364.948,258.572,353.433,258.572z"}),c.a.createElement("path",{d:"M462.816,224.791c0.193-2.265,0.289-4.541,0.289-6.809c0-43.933-35.743-79.676-79.676-79.676 c-6.813,0-13.548,0.863-20.099,2.572c-24.398-38.006-66.8-61.357-112.184-61.357c-56.055,0-105.524,34.618-124.866,86.736 c-33.168,1.691-64.107,15.488-87.645,39.216C13.72,230.585,0,263.898,0,299.275c0,73.45,59.755,133.205,133.203,133.205h264.862 C460.889,432.48,512,381.368,512,318.545C512,280.786,493.71,246.116,462.816,224.791z M398.065,416.25H133.203 c-64.499,0-116.974-52.474-116.974-116.975c0-31.066,12.049-60.32,33.926-82.371c21.864-22.04,50.994-34.323,82.025-34.589 c3.494-0.029,6.576-2.293,7.652-5.617c15.659-48.417,60.392-80.946,111.313-80.946c41.763,0,80.651,22.519,101.49,58.77 c1.95,3.391,6.042,4.909,9.73,3.611c6.777-2.386,13.864-3.595,21.063-3.595c34.985,0,63.447,28.462,63.447,63.447 c0,3.215-0.243,6.45-0.724,9.617c-0.485,3.197,0.974,6.377,3.714,8.094c28.745,18.012,45.906,48.985,45.906,82.852 C495.77,372.419,451.94,416.25,398.065,416.25z"})),c.a.createElement("div",null),c.a.createElement("svg",{className:"sun",x:"0px",y:"0px",viewBox:"0 0 512 512"},c.a.createElement("path",{d:"M215.526,390.032c-28.364-8.402-53.881-26.063-71.85-49.729c-18.562-24.446-28.374-53.625-28.374-84.381 c0-41.455,18.274-80.529,50.138-107.205c3.211-2.688,3.636-7.471,0.947-10.682c-2.689-3.211-7.471-3.635-10.683-0.946 c-35.315,29.564-55.569,72.878-55.569,118.833c0,34.097,10.879,66.446,31.461,93.552c19.907,26.219,48.184,45.787,79.621,55.1 c0.719,0.213,1.444,0.314,2.157,0.314c3.272,0,6.291-2.134,7.269-5.433C221.833,395.442,219.542,391.222,215.526,390.032z"}),c.a.createElement("path",{d:"M255.499,100.88c-27.503,0-54.529,7.269-78.158,21.02c-3.62,2.107-4.846,6.749-2.74,10.369 c2.108,3.621,6.751,4.846,10.369,2.74c21.316-12.405,45.704-18.962,70.53-18.962c77.306,0,140.199,62.748,140.199,139.877 S332.806,395.8,255.499,395.8c-5.683,0-11.406-0.343-17.009-1.018c-4.146-0.499-7.935,2.463-8.436,6.621 c-0.502,4.158,2.464,7.935,6.622,8.436c6.203,0.748,12.536,1.127,18.824,1.127c85.669,0,155.365-69.551,155.365-155.043 C410.865,170.432,341.168,100.88,255.499,100.88z"}),c.a.createElement("path",{d:"M504.767,303.601l-53.44-48.725l52.856-49.357c1.981-1.849,2.824-4.614,2.212-7.253c-0.611-2.64-2.583-4.752-5.175-5.543 l-69.171-21.098l26.581-67.256c0.996-2.52,0.571-5.379-1.112-7.501c-1.684-2.122-4.375-3.186-7.052-2.788l-71.537,10.606 l-4.828-72.158c-0.181-2.703-1.791-5.104-4.222-6.299c-2.431-1.196-5.315-1.002-7.565,0.505l-60.078,40.26L266.931,3.881 c-1.323-2.365-3.806-3.844-6.515-3.881c-2.72-0.038-5.231,1.375-6.617,3.703l-42.494,71.352l-71.255-42.663 c-2.323-1.39-5.214-1.437-7.582-0.12c-2.367,1.317-3.852,3.798-3.896,6.506l-1.154,72.308l-71.983-6.951 c-2.697-0.259-5.326,0.937-6.901,3.142c-1.574,2.205-1.852,5.083-0.73,7.548l29.968,65.815L9.765,205.231 c-2.548,0.921-4.41,3.131-4.887,5.799c-0.477,2.667,0.507,5.385,2.578,7.131l55.299,46.603l-50.891,51.38 c-1.907,1.924-2.642,4.72-1.928,7.333c0.714,2.614,2.767,4.648,5.387,5.336l69.94,18.385L61.328,415.44 c-0.896,2.556-0.361,5.397,1.404,7.452c1.765,2.055,4.488,3.012,7.155,2.51l71.066-13.387l7.64,71.914 c0.286,2.694,1.988,5.031,4.464,6.13c2.477,1.099,5.351,0.794,7.541-0.801l58.46-42.571l37.743,61.688 c1.38,2.256,3.832,3.626,6.467,3.626c0.066,0,0.129-0.001,0.193-0.001c2.708-0.069,5.175-1.577,6.469-3.957l34.553-63.528 l60.55,39.541c2.266,1.481,5.152,1.641,7.571,0.417c2.417-1.223,3.998-3.643,4.146-6.349l3.973-72.208l71.657,9.754 c2.689,0.366,5.36-0.73,7.018-2.871c1.659-2.141,2.049-5.006,1.023-7.513l-27.38-66.934l68.916-21.919 c2.581-0.821,4.53-2.957,5.109-5.603C507.645,308.181,506.769,305.426,504.767,303.601z M420.612,326.387 c-2.018,0.642-3.674,2.097-4.571,4.015c-0.896,1.918-0.95,4.123-0.149,6.083l25.519,62.385l-66.786-9.092 c-2.105-0.287-4.22,0.318-5.851,1.666c-1.632,1.348-2.628,3.316-2.743,5.431l-3.703,67.3l-56.434-36.854 c-1.772-1.158-3.951-1.521-6.001-1.004c-2.052,0.518-3.796,1.87-4.808,3.73l-32.204,59.21l-35.176-57.495 c-1.105-1.806-2.914-3.068-4.991-3.48c-0.49-0.098-0.986-0.146-1.478-0.146c-1.591,0-3.157,0.502-4.462,1.456l-54.486,39.678 l-7.12-67.025c-0.222-2.105-1.316-4.021-3.015-5.284s-3.845-1.759-5.929-1.367L79.988,408.07l22.308-63.602 c0.701-1.997,0.534-4.197-0.458-6.066c-0.994-1.87-2.723-3.239-4.77-3.777l-65.185-17.136l47.432-47.888 c1.49-1.504,2.284-3.562,2.188-5.677c-0.095-2.115-1.069-4.094-2.688-5.458l-51.54-43.436l63.386-22.919 c1.99-0.721,3.588-2.24,4.41-4.191c0.82-1.951,0.789-4.156-0.089-6.084l-27.931-61.341l67.09,6.479 c2.106,0.202,4.204-0.483,5.781-1.894c1.579-1.41,2.496-3.416,2.53-5.534l1.075-67.392l66.507,39.821 c1.728,1.034,3.798,1.34,5.75,0.846s3.631-1.742,4.66-3.473l39.664-66.598l32.906,58.824c1.034,1.847,2.793,3.179,4.851,3.672 c2.06,0.493,4.231,0.104,5.989-1.075l55.995-37.524l4.5,67.253c0.141,2.112,1.159,4.07,2.807,5.398 c1.648,1.329,3.775,1.908,5.871,1.597l66.674-9.885l-24.774,62.684c-0.778,1.969-0.698,4.173,0.221,6.08 c0.919,1.907,2.593,3.343,4.618,3.96l64.469,19.664L434.969,249.4c-1.547,1.445-2.421,3.47-2.407,5.587 c0.012,2.116,0.909,4.131,2.474,5.558l49.808,45.413L420.612,326.387z"})))}),F=(a(37),function(){return c.a.createElement("header",{className:"app-header"},c.a.createElement("h1",null,c.a.createElement("a",{href:"https://github.com/RayRedGoose"},"CloudWIS")))});function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(y.a)(t).call(this))).componentDidMount=function(){e.getDataFromLocalStorage().then((function(t){return e.fetchWeatherData(t)}))},e.fetchWeatherData=function(t){Promise.all([v(t).then((function(t){return e.setDayWeatherInfo(t)})).catch((function(t){return e.setError(t)})),E(t).then((function(t){return e.setWeekWeatherInfo(t)}))]).then((function(e){return console.log(e)})).then((function(){return e.setLoaded(!0)})).catch((function(t){return e.setError(t)}))},e.setDayWeatherInfo=function(t){e.setState(J({},e.state,{data:J({},e.state.data,{weatherData:J({},e.state.data.weatherData,{today:g.updateTodayData(t)})})}))},e.setWeekWeatherInfo=function(t){e.setState(J({},e.state,{data:J({},e.state.data,{weatherData:J({},e.state.data.weatherData,{week:g.updateDaysData(t)})})}))},e.setError=function(t){e.setState({data:J({},e.state.data),sys:J({},e.state.sys,{error:t.message})})},e.setLoaded=function(t){e.setState({data:J({},e.state.data),sys:J({},e.state.sys,{isLoaded:t})})},e.changeCity=function(t){var a=e.state.data.searchHistory.includes(t)?Object(u.a)(e.state.data.searchHistory):[].concat(Object(u.a)(e.state.data.searchHistory),[t]);e.setState({data:{currentCity:t,searchHistory:a,weatherData:{today:null,week:null}},sys:{error:null,isLoaded:!1}}),localStorage.setItem("currentCity",t),localStorage.setItem("searchHistory",a)},e.state={data:{currentCity:"Denver",searchHistory:["Denver","Phoenix","Houston"],weatherData:{today:null,week:null}},sys:{error:null,isLoaded:!1}},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"getDataFromLocalStorage",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.length?localStorage.getItem("currentCity"):"Denver",a=localStorage.length?localStorage.getItem("searchHistory").split(","):["Denver","Phoenix","Houston"],this.setState(J({},this.state,{data:{currentCity:t,searchHistory:a,weatherData:{today:null,week:null}}})),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("main",{className:"app"},c.a.createElement(F,null),this.state.sys.isLoaded?c.a.createElement(_,Object.assign({},this.state.data,{changeCity:this.changeCity,fetchWeatherData:this.fetchWeatherData})):c.a.createElement(T,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.0e9b003c.chunk.js.map