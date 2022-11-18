<template>
  {{ $filters.formatNumber(walletBalance) }}
</template>
<script>
import { onMounted } from "vue";
import { useActions, useGetters } from "vuex-composition-helpers";

export default {
  setup() {
    const { getWalletBalance } = useActions(["getWalletBalance"]);
    const { walletBalance } = useGetters(["walletBalance"]);
    onMounted(() => {
      getWalletBalance();
    });

    return {
      getWalletBalance,
      walletBalance,
    };
  },
};
</script>