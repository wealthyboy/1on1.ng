<template>
  <div class="col-md-3">
    <ul class="list-group list-unstyled">
      <filters
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </ul>
  </div>
  <div class="col-md-9">
    <div class="row">
      <div
        v-for="service in services"
        :key="service.id"
        class="col-lg-4 mb-lg-0 mb-4"
      >
        <a  :href="service.url">
          <div class="card card-background">
            <img :src="service.celebrity.image" alt="" srcset="">
            <div class="card-body pt-12">
              <h4 class="tex">{{ service.name }} </h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import Filters from "./Filters";

export default {
  props: {
    categories: Array,
    category: Object,
  },

  components: {
    Filters,
  },

  setup() {
    const services = ref([]);
    onMounted(() => {
      axios
        .get(location.href + "?get=1")
        .then((res) => {
          services.value = res.data.data;
        })
        .catch((err) => {});
    });

    return {
      services,
    };
  },
};
</script>


