<template>
  <div class=" product-single-details">
    <h1 class="product-title">{{ service.name }}</h1>

    <!-- End .ratings-container -->
    <hr class="short-divider">
    <div class="price-box">
      <div>
        Event Date: <strong>{{ service.service_date }}</strong>
      </div>
    </div>
    <!-- End .price-box -->

    <div class="d-flex justify-content-between">
      <div>
        Time Left: <strong>{{ service.days_left + 'd'}}</strong>
      </div>
      <div>
        Wallet Balance: {{ $filters.formatNumber(walletBalance) || '0.00' }}
        <span class="fs-6"> <a
            data-bs-toggle="modal"
            data-bs-target="#main-modal"
            class=" w-100 rounded-0"
            href="#"
            id=""
          >Fund your wallet</a></span>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      <div>
        Current Bid: <strong>{{ $filters.formatNumber(currentBid) }}</strong>
      </div>
      <div>
        [ {{number_of_bidders}} bids ]
      </div>
    </div>

    <div class="row g-0">
      <div class="col-md-3">
        <input
          type="text"
          v-model="bid.amount"
          class="form-control rounded-0"
        >
      </div>
      <div class="col-md-9">
        <button
          v-if="walletBalance >= service.bid_start_price"
          class="btn btn-outline-secondary w-100 rounded-0"
          type="button"
          id="button-addon2"
          @click="handleBid"
        >Place Bid</button>

        <button
          v-else
          data-bs-toggle="modal"
          data-bs-target="#main-modal"
          class="btn btn-outline-secondary w-100 rounded-0"
          type="button"
          id="button-addon2"
        >Place Bid</button>
      </div>
      <div
        id="emailHelp"
        class="form-text"
      >Enter {{ $filters.formatNumber(service.min_bid) }} or more</div>

    </div>

    <modal>
      <template v-slot:header>
        1on1
      </template>

      <template v-slot:title>
        <h2>Fund your wallet</h2>
      </template>

      <div class="row h-100  d-flex align-items-center justify-content-center   mx-2 mt-2">

        <div
          style="height: 200px;"
          class="form-floating mx-2 mt-2"
        >
          <wallet
            @wallet:funded="getWallet"
            :user="user"
          />
        </div>
      </div>

    </modal>

  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";

import Modal from "../../Modal/Index";
import GeneralInput from "../../Forms/Input";
import Wallet from "../../auth/Wallet";
import { computed, reactive, ref, onMounted } from "vue";
import { loginRules } from "../../../utils/ValidationRules";
import { useStore } from "vuex";
import { useActions, useGetters } from "vuex-composition-helpers";

import axios from "axios";

export default {
  props: ["service", "wallet_balance", "user"],
  emits: ["bid:placed"],
  setup(props, { emit }) {
    const loading = ref(false);
    const post_server_error = ref(false);
    const store = useStore();
    const text = ref("Submit");
    const message = ref(null);
    const bid = reactive({
      amount: "",
      service_id: props.service.id,
    });

    const { currentBid, walletBalance, number_of_bidders } = useGetters([
      "currentBid",
      "walletBalance",
      "number_of_bidders",
    ]);

    const { getWalletBalance } = useActions(["getWalletBalance"]);

    function getWallet(page) {
      getWalletBalance();
    }

    function handleBid() {
      emit("bid:placed", bid);
    }

    return {
      bid,
      text,
      walletBalance,
      currentBid,
      loading,
      message,
      getWallet,
      getWalletBalance,
      number_of_bidders,
      handleBid,
    };
  },
  components: { Modal, GeneralInput, Wallet },
};
</script>