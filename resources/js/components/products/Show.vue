<template>

  <template v-if="auction">
    <auction
      :user="user"
      :service="service"
      @bid:placed="placeBid"
    />

  </template>

  <template v-if="service.type == 'shout_out'">
    <shout-out
      :user="user"
      :service="service"
    />
  </template>

  <template v-if="service.type == 'master_class'">
    <master-class
      :user="user"
      :service="service"
    />
  </template>

  <notification :data="notification" />

</template>
<script>
import ShoutOut from "./dynamic/ShoutOut";
import Auction from "./dynamic/Auction";
import MasterClass from "./dynamic/MasterClass";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useActions, useGetters } from "vuex-composition-helpers";
import Notification from "../utils/Notification";
import axios from "axios";

export default {
  props: {
    service: Object,
    user: Object,
    auction: Boolean,
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
    const notification = ref({
      active: false,
    });

    const { currentBid, walletBalance, number_of_bidders } = useGetters([
      "currentBid",
      "walletBalance",
      "number_of_bidders",
    ]);

    const { getWalletBalance, makePost } = useActions([
      "getWalletBalance",
      "makePost",
    ]);

    function getCurrentBid() {
      axios
        .get("/bids/" + props.service.id)
        .then((res) => {
          store.commit("setCurrentBid", res.data.current_bid);
          store.commit("setNumberOfBidders", res.data.number_of_bids);
        })
        .catch(() => {});
    }

    onMounted(() => {
      Echo.join(`presence-bid.${props.service.id}`).listen(
        ".bid.added",
        (res) => {
          console.log(res);
          store.commit("setCurrentBid", res.current_bid);
          store.commit("setNumberOfBidders", res.number_of_bids);

          notification.value = {
            active: true,
            message: "This is a test",
            error: false,
            success: true,
          };
        }
      );

      getWalletBalance();
      getCurrentBid();
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
        .then(() => {})
        .catch(() => {});
    }

    return {
      placeBid,
      walletBalance,
      currentBid,
      getWalletBalance,
      getCurrentBid,
      placeBid,
      loading,
      makePost,
      new_bid,
      notification,
    };
  },
};
</script>