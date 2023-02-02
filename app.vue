<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - bT Boilerplate 2023",
});
</script>
