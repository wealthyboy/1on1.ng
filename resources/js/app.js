/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


require("../../node_modules/owl.carousel/dist/owl.carousel.min.js");


window.Vue = require('vue');

import { createApp } from "vue";

import store from './store'



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     components: {
//         CategoryItems
//     }
// }).mount('#app');



// Vue.use(Chartkick.use(Chart));

import CategoryItems from "./components/products/Index.vue";
import AuthModal from "./components/auth/AuthModal.vue";
import ShowProducts from "./components/products/Show.vue";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Auth from "./components/auth/Auth";
import Account from "./components/account/Account";
import Modal from "./components/Modal/Index";
import ChangePassword from "./components/account/ChangePassword"
import FundWallet from "./components/wallet/Fund"
import Table from "./components/table/Table"
import WalletTable from "./components/wallet/Index"
import WalletBalance from "./components/wallet/Balance"
import Notifications from '@kyvg/vue3-notification'



const app = createApp({})

app.use(store);

app.component('CategoryItems', CategoryItems)
app.component('AuthModal', AuthModal)
app.component('ShowProducts', ShowProducts)
app.component('Auth', Auth)
app.component('Modal', Modal)
app.component('Account', Account)
app.component('ChangePassword', ChangePassword)
app.component('FundWallet', FundWallet)
app.component('GeneralTable', Table)
app.component('WalletTable', WalletTable)
app.component('WalletBalance', WalletBalance)
app.use(Notifications)


app.config.globalProperties.$filters = {
    formatNumber(value) {
        return '₦' + new Intl.NumberFormat().format(value);
    }
}


app.mount('#app');