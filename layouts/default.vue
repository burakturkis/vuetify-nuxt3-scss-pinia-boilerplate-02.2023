<template>
  <div>
    <v-layout>
      <v-app-bar color="blue-lighten-3 w-100" elevation="0">
        <Header />
      </v-app-bar>
      <v-main class="content h-50"><slot /></v-main>
      <Footer />
    </v-layout>
  </div>
</template>
<style lang="scss" scoped>
.content {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
