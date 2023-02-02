<template>
  <div>
    <h2>AUTH LOGİN/REGİSTER PAGE</h2>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});
useHead({
  title: "Auth Page",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Auth Page Description",
    },
  ],
});
</script>
