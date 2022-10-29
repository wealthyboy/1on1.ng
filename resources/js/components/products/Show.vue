<template>
  <template v-if="service.type == 'auction'">
    <auction
      :user="user"
      :service="service"
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

</template>
<script>
import ShoutOut from "./dynamic/ShoutOut";
import Auction from "./dynamic/Auction";
import MasterClass from "./dynamic/MasterClass";

export default {
  props: {
    service: Object,
    user: Object,
  },
  components: {
    ShoutOut,
    Auction,
    MasterClass,
  },
  setup() {},
};
</script>