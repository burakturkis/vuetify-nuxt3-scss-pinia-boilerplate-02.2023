<template>
  <v-sheet width="500" class="comp-form_register mx-auto">
    <slot name="title">
      <h2 class="text-left">Register</h2>
    </slot>
    <v-form ref="form-register" fast-fail @submit.prevent :disabled="loading">
      <v-text-field
        v-model="form.fullName"
        label="Full Name"
        variant="solo"
        :rules="[rules.required]"
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        label="Email"
        :rules="[rules.required, rules.email]"
        variant="solo"
      ></v-text-field>
      <v-text-field
        v-model="form.password"
        :append-icon="show.password ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show.password ? 'text' : 'password'"
        variant="solo"
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
        class="mt-5 mb-5"
        @click="handleRegister"
        :loading="loading"
        :disabled="loading"
        >Register</v-btn
      >
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
export default {
  setup() {
    const form = ref({
      fullName: "",
      email: "",
      password: "",
    });
    const show = ref({
      password: false,
    });
    const rules = ref({
      required: (value: any) => !!value || "Required.",
      min: (v: any) => v.length >= 4 || "Min 4 characters",
      email: (value: any) => {
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(value)) return true;
        return "Invalid e-mail.";
      },
    });
    const loading = ref(false);
    const handleRegister = () => {
      loading.value = true;
      setTimeout(() => {
        console.log("Registered", form.value);
        loading.value = false;
        alert("Register Success! More details in console.");
      }, 2000);
    };
    return {
      handleRegister,
      form,
      show,
      rules,
      loading,
    };
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
.comp-form_register {
  background: rgba($white, 0.9);
  padding: 0.2rem 1rem;
  border-radius: 0.2rem;
}
</style>
