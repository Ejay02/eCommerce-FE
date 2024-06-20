<template>
  <div>
    <Header />
    <router-view />
    <Home />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./header.vue";
import Footer from "./footer.vue";
import Home from "../pages/home.vue";
</script>

<style lang="scss" scoped></style>
