<template>
  <FormRegister>
    <template #title>
      <h1 class="my-5">Register</h1>
    </template>
  </FormRegister>
</template>
<script lang="ts">
import FormRegister from "~/components/auth/FormRegister.vue";
definePageMeta({
  layout: "auth",
});

export default defineComponent({
  components: {
    FormRegister,
  },
  setup() {
    useHead({
      title: "Register",
    });
    return {};
  },
});
</script>
