
import Vue from 'vue';

import App from './app.vue';

new Vue({
	el:'#app',
	// render:function (create) {create(App)}  //ES5的写法
	render:c=>c(App)  //ES6的函数写法 goes to
});
