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


app.config.globalProperties.$filters = {
    formatNumber(value) {
        return '₦' + new Intl.NumberFormat().format(value);
    }
}


app.mount('#app');

jQuery(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        center: true,
        navText: [
            "<div class="
            nav - btn prev - slide "><svg width="
            31 " height="
            50 " viewBox="
            0 0 21 40 " xmlns="
            http: //www.w3.org/2000/svg">
            <
            path d = "M19.9 40L1.3 20 19.9 0"
            stroke = "#FFF"
            fill = "none"
            fill - rule = "evenodd"
            stroke - linecap = "round"
            stroke - linejoin = "round" > < /path> <
            /svg></div > ",
            "<div class="
            nav - btn next - slide "><svg width="
            19 " height="
            40 " viewBox="
            0 0 19 40 " xmlns="
            http: //www.w3.org/2000/svg">
            <
            path d = "M.1 0l18.6 20L.1 40"
            stroke = "#FFF"
            fill = "none"
            fill - rule = "evenodd"
            stroke - linecap = "round"
            stroke - linejoin = "round" > < /path> <
            /svg></div > ",
        ],
        responsive: { 576: { items: 3 }, 992: { items: 4 } }
    });
})