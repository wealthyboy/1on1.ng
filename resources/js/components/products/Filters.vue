<template>
  <li>
    <a
      href="#"
      @click.prevent="getUrl(category)"
      class="list-group-item list-group-item-action"
    >{{ category.name }}</a>
  </li>
</template>
<script>
export default {
  props: {
    category: Object,
  },
  emits: ["send:link"],
  setup(props, { emit }) {
    function getUrl(link) {
      emit("send:link", link);
    }

    return {
      getUrl,
    };
  },
};
</script>
