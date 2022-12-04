<template>
  <div class="row mt-4">

    <div class="col-md-3  d-none d-lg-block d-md-block d-xl-block">
      <ul class="list-group list-unstyled">
        <filters
          @send:link="getLink"
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </ul>
    </div>
    <div class="col-md-9">

      <loader :loading="loading" />

      <div
        v-if="!loading &&  services.length"
        class="row"
      >
        <div
          v-for="service in services"
          :key="service.id"
          class="col-lg-4 mb-2"
        >
          <a :href="service.url">
            <div class="card card-background">
              <img
                :src="service.celebrity.image"
                alt=""
                srcset=""
              >

              <div class="card-body pt-12">
                <h4 class="tex">{{ service.name }} <i class="fa-solid fa-empty-set"></i>
                </h4>
              </div>
            </div>
          </a>
        </div>
      </div>

      <template v-if="!loading &&  !services.length">
        <empty :message="'No auctions found'" />

      </template>

    </div>

    <!-- <div class="col-md-9">
      <div class="d-flex"></div>
    </div> -->
  </div>

</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import Filters from "./Filters";
import Loader from "../utils/Loader";
import Empty from "../general/Empty";

export default {
  props: {
    categories: Array,
    category: Object,
    wallet_balance: Object,
  },

  components: {
    Filters,
    Loader,
    Empty,
  },

  setup() {
    const services = ref([]);
    const loading = ref(true);

    onMounted(() => {
      getP();
    });

    function getP(link = location.href + "?get=1") {
      loading.value = true;

      axios
        .get(link)
        .then((res) => {
          services.value = res.data.data;
          loading.value = false;
        })
        .catch((err) => {
          loading.value = false;
        });
    }

    function getLink(link) {
      console.log(link);
      const state = { page_id: 1, user_id: 5 };
      const url = link.url;

      history.pushState(state, "", url);

      getP((link = location.href + "?get=1"));
    }

    return {
      services,
      getLink,
      getP,
      loading,
    };
  },
};
</script>


