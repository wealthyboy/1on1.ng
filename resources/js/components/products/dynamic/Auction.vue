<template>

  <div
    v-if="!reg_message"
    class="container"
  >
    <div class="row">
      <div class="col-lg-7 ">
        <div class="image">
          <img
            :src="service.image_to_show"
            class="img-fluid"
            alt=""
            srcset=""
          >
        </div>
      </div>
      <div class="col-lg-5">

        <div class="product-single-details mt-xs-3">
          <h1 class="product-title">{{ service.name }}</h1>

          <!-- End .ratings-container -->
          <hr class="short-divider">
          <div class="-box mb-1">
            <div>
              Event Date: <strong>{{ service.ev_date }}</strong>
            </div>
          </div>
          <!-- End .price-box -->

          <div class="d-flex justify-content-between mb-1">
            <div>
              Time Left: <strong v-if="service.time_left">{{ service.time_left + 'h'}}</strong>
              <strong v-if="service.days_left">{{ service.days_left + 'd'}}</strong>
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

          <div class="d-flex justify-content-between mb-2">
            <div>
              Current Bid: <strong>{{ $filters.formatNumber(currentBid) }}</strong>
            </div>
            <div>
              [ {{number_of_bidders}} bids ]
            </div>
          </div>

          <div class="row g-0">
            <div class="col-md-3 col-3">
              <input
                type="text"
                v-model="bid.amount"
                class="form-control rounded-0"
                @input="clearError"
              >
              <small
                v-if="error"
                class="text text-danger"
              >Enter a valid amount </small>

            </div>
            <div class="col-md-9 col-9">
              <button
                v-if="walletBalance >= service.min_bid"
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
      </div>
    </div>

    <description
      :description="service.description"
      :schedules="service.schedules"
    />
  </div>
  <template v-if="reg_message">
    <complete :message="reg_message" />
  </template>
</template>


<script>
import { useVuelidate } from "@vuelidate/core";

import Modal from "../../Modal/Index";
import GeneralInput from "../../Forms/Input";
import Wallet from "../../auth/Wallet";
import { computed, reactive, ref, onMounted } from "vue";
import { bidRules } from "../../../utils/ValidationRules";
import { useStore } from "vuex";
import { useActions, useGetters } from "vuex-composition-helpers";
import Complete from "../../utils/Complete";
import Description from "../Description";

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
    const error = ref(null);
    const reg_message = ref(null);

    const bid = reactive({
      amount: null,
      auction_id: props.service.id,
    });

    const rules = bidRules(bid);
    const v$ = useVuelidate(rules, bid);

    const { currentBid, walletBalance, number_of_bidders } = useGetters([
      "currentBid",
      "walletBalance",
      "number_of_bidders",
    ]);

    const { getWalletBalance } = useActions(["getWalletBalance"]);

    function clearError() {
      if (!/^[0-9]+$/.test(bid.amount)) {
        error.value = true;
        return;
      }

      if (!/^[0-9]+$/.test(bid.amount)) {
        error.value = false;
        return;
      }

      error.value = false;
    }

    function getWallet(new_balnce) {
      // getWalletBalance();
    }

    function handleBid() {
      if (!/^[0-9]+$/.test(bid.amount)) {
        error.value = true;
        return;
      }

      if (bid.amount < props.service.min_bid) {
        error.value = true;
        return;
      }

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
      v$,
      error,
      clearError,
      reg_message,
    };
  },
  components: { Modal, GeneralInput, Wallet, Complete, Description },
};
</script>