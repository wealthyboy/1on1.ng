<template>

  <div class="form-floating mb-2">
    <input
      type="email"
      class="form-control"
      :class="{'is-invalid': error.$error}"
      :id="$attrs.id"
      placeholder="name@example.com"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label :for="$attrs.id">{{ $attrs.name }}</label>
  </div>
  <simple-message
    class="link-danger fs-xs-6 fs-6 "
    v-if="error.$error"
    :message="error.$errors[0].$message"
  />
  <simple-message
    class="link-danger fs-6"
    v-if="Array.isArray(server_errors)"
    :message="server_errors[0]"
  />

</template>


<script>
import SimpleMessage from "../message/SimpleMessage";

export default {
  props: ["error", "modelValue", "server_errors"],
  emits: ["update:modelValue"],
  components: {
    SimpleMessage,
  },
};
</script>