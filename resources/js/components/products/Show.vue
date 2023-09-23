<template>
  <template v-if="auction">
    <auction :user="user" :service="service" @bid:placed="placeBid" />
  </template>

  <template v-if="service.type == 'shout_out'">
    <shout-out :user="user" :service="service" />
  </template>

  <template v-if="service.type == 'master_class'">
    <master-class :user="user" :service="service" />
  </template>
  <notification :data="notification" />
</template>
<script>
import ShoutOut from "./dynamic/ShoutOut";
import Auction from "./dynamic/Auction";
import MasterClass from "./dynamic/MasterClass";
import { onMounted, ref, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useActions, useGetters } from "vuex-composition-helpers";
import Notification from "../utils/Notification";
import axios from "axios";

export default {
  props: {
    service: Object,
    user: Object,
    auction: Boolean,
    bid: Object,
  },
  components: {
    ShoutOut,
    Auction,
    MasterClass,
    Notification,
  },

  setup(props, { emit }) {
    const store = useStore();
    const loading = ref(false);
    const new_bid = ref(false);
    let bid = props.bid
    const notification = ref({
      active: false,
    });

    const { currentBid, walletBalance, isBidExpired, number_of_bidders } = useGetters([
      "currentBid",
      "walletBalance",
      "number_of_bidders",
      "isBidExpired"
    ]);

    const { getWalletBalance, makePost } = useActions([
      "getWalletBalance",
      "makePost",
    ]);

    function getCurrentBid() {

      if (!isBidExpired.value) {

        axios
          .get("/bids/" + props.service.id, {
            params: { bids: number_of_bidders.value }
          })
          .then((response) => {
            let res = response.data
            store.commit("setCurrentBid", res.current_bid);
            store.commit("setNumberOfBidders", res.number_of_bids);
            store.commit("setIsBidExpired", res.expired)
            if (res.new_bid && res.shouldBeNotified) {
              notification.value = {
                active: true,
                message: "A new bid has been placed",
                error: false,
              };
            }

          })
          .catch(() => { });
      }
    }



    onMounted(() => {
      console.log(true)
      store.commit("setCurrentBid", bid.current_bid);
      store.commit("setNumberOfBidders", bid.number_of_bids);
      store.commit("setIsBidExpired", bid.expired);
      setInterval(() => {
        getCurrentBid()
      }, 5000)

      //   Echo.join(`bid.${props.service.id}`)
      //     .here((users) => {
      //       //console.log(users);
      //     })
      //     .joining((user) => {
      //       // console.log(user.name);
      //     })
      //     .leaving((user) => {
      //       //console.log(user.name);
      //     })
      //     .error((error) => {
      //       console.error(error);
      //     })
      //     .listen(".bid.added", (res) => {
      //       console.log(res);
      //       store.commit("setCurrentBid", res.current_bid);
      //       store.commit("setNumberOfBidders", res.number_of_bids);
      //     });

      //getWalletBalance();
      //getCurrentBid();
    });

    function placeBid(data) {
      let new_balnce = parseInt(walletBalance.value) - parseInt(data.amount);
      store.commit("setWalletBalance", new_balnce);
      const postData = {
        url: "/bids",
        data: data,
        loading,
        needsValidation: true,
        method: "post",
      };

      makePost(postData)
        .then((res) => {
          store.commit("setCurrentBid", res.data.current_bid);
          store.commit("setNumberOfBidders", res.data.number_of_bids);

          notification.value = {
            active: true,
            message: "Your bid has been placed",
            error: false,
          };
        })
        .catch(() => {
          notification.value = {
            active: true,
            message: "Your placement failed",
            error: true,
          };
        });
    }

    return {
      placeBid,
      walletBalance,
      currentBid,
      getWalletBalance,
      getCurrentBid,
      loading,
      makePost,
      new_bid,
      notification,
    };
  },
};
</script>