<template>
  <div>
    <v-layout style="background: url('https://picsum.photos/1920/1080')">
      <v-app-bar color="blue-lighten-3 w-100" elevation="0"
        ><Header
      /></v-app-bar>
      <v-main class="content"><slot /></v-main>
    </v-layout>
  </div>
</template>
<style lang="scss" scoped>
.content {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);
}
</style>
