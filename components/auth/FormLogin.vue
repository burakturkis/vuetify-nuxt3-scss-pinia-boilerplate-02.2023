<template>
  <v-sheet width="500" class="comp-form_login mx-auto">
    <slot name="title">
      <h1 class="text-left">Login</h1>
    </slot>
    <v-form ref="form-login" fast-fail @submit.prevent :disabled="loading">
      <v-text-field
        v-model="form.email"
        label="Email"
        :rules="[rules.required, rules.email]"
      ></v-text-field>

      <v-text-field
        v-model="form.password"
        :append-icon="show.password ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show.password ? 'text' : 'password'"
        label="Password"
        hint="At least 4 characters"
        counter
        @click:append="show.password = !show.password"
      ></v-text-field>

      <v-btn
        color="success"
        type="submit"
        size="large"
        block
        class="mt-2 mb-4"
        :loading="loading"
        @click="handleLogin"
        >Login</v-btn
      >
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
import { useUserStore } from "~/store/user";
export default defineComponent({
  setup() {
    const store = useUserStore();

    const form = ref({
      email: "",
      password: "",
    });
    const show = ref({
      password: false,
    });
    const rules = ref({
      required: (value: string) => !!value || "Required.",
      min: (v: string) => v.length >= 4 || "Min 4 characters",
      email: (value: string) => {
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(value)) return true;
        return "Invalid e-mail.";
      },
    });
    const loading = ref(false);
    return {
      form,
      show,
      rules,
      loading,
      store,
    };
  },
  methods: {
    async handleLogin() {
      const form = this.$refs["form-login"] as any;
      const { valid } = await form.validate();

      if (valid) {
        this.loading = true;
        setTimeout(() => {
          this.store.setUser({
            email: this.form.email,
            password: this.form.password,
          });
          this.loading = false;
          this.$router.push("/");
        }, 2000);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.comp-form_login {
  background: rgba($white, 0.9);
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;
}
</style>
