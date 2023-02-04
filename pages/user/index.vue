<template>
  <div class="page-user_profile">
    <h1>User Profile (Restricted)</h1>
    <p><strong>Email:</strong> {{ user.email }}</p>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "~~/store/user";

useHead({
  title: "User Profile (Restricted)",
});
definePageMeta({
  restricted: true,
});
const { user } = useUserStore();
</script>
