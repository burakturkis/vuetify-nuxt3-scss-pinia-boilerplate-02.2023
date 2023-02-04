<template>
  <header class="comp-header">
    <div>
      <NuxtLink v-slot="{ navigate }" to="/" custom>
        <v-btn variant="flat" @click="navigate" class="mr-1">Home </v-btn>
      </NuxtLink>
      <NuxtLink v-slot="{ navigate }" to="/about-us" custom>
        <v-btn variant="flat" @click="navigate" class="mr-1">About Us </v-btn>
      </NuxtLink>
    </div>
    <div>
      <Transition name="slideX" mode="out-in">
        <div v-if="isLoggedIn">
          <NuxtLink v-slot="{ navigate }" to="/user" custom>
            <v-btn
              variant="flat"
              prepend-icon="mdi-account"
              @click="navigate"
              class="mr-1"
              >User
            </v-btn>
          </NuxtLink>
          <v-btn
            variant="flat"
            :prepend-icon="
              loading ? 'mdi-loading animated' : 'mdi-logout-variant'
            "
            @click="handleLogout"
            class="mr-1"
            >Logout
          </v-btn>
        </div>

        <div v-else-if="!isLoggedIn">
          <!-- <NuxtLink v-slot="{ navigate }" to="/auth/login" custom> -->
          <v-btn variant="flat" @click="navigateTo('/auth/login')" class="mr-1"
            >Login
          </v-btn>
          <!-- </NuxtLink> -->
          <NuxtLink v-slot="{ navigate }" to="/auth/register" custom>
            <v-btn variant="flat" @click="navigate" class="mr-1"
              >Register
            </v-btn>
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>
<script lang="ts">
import { useAuth } from "~/composables/useAuth";
import { useUserStore } from "~/store/user";
export default defineComponent({
  setup() {
    const isLoggedIn = computed(useAuth);
    const loading = ref(false);

    const handleLogout = () => {
      loading.value = true;

      setTimeout(() => {
        useUserStore().logout();
        loading.value = false;
      }, 2000);
    };

    return {
      isLoggedIn,
      loading,
      handleLogout,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 1rem;
}
.mr-1 {
  margin-right: 4rem;
}
</style>
<style lang="scss">
.animated {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
