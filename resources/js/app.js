/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import("../../public/js/owl.carousel.min.js")
import("../../public/js/jquery.countTo.min.js")
import("../../public/js/jquery.countTo.min.js")
import("../../public/js/jquery.magnific-popup.min.js")
import("../../public/rev/js/rbtools.min.js")
import("../../public/rev/js/rs6.min.js")
import("../../public/js/rev-custom.js")
import("../../public/js/custom.js")


window.Vue = require('vue');

import { createApp } from "vue";

import store from './store'

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
import NewsLetter from "./components/newsletter/Index"




const app = createApp({})

app.use(store);

app.component('CategoryItems', CategoryItems)
app.component('AuthModal', AuthModal)
app.component('ShowProducts', ShowProducts)
app.component('Auth', Auth)
app.component('Modal', Modal)
app.component('Account', Account)
app.component('NewsLetter', NewsLetter)
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