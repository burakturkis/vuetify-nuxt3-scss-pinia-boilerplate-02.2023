<template>
  <FormLogin>
    <template #title>
      <h1 class="my-5">Login</h1>
    </template>
  </FormLogin>
</template>
<script lang="ts">
import FormLogin from "~/components/auth/FormLogin.vue";

definePageMeta({
  layout: "auth",
});
export default defineComponent({
  components: {
    FormLogin,
  },
  setup() {
    useHead({
      title: "Login",
    });
    return {};
  },
});
</script>
