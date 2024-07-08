<template>
  <router-view />
  <ScrollToTopButton />
</template>

<script setup>
import { onMounted } from "vue";
import { useCartStore } from "@/store/cartStore";
import ScrollToTopButton from "@/components/scrollToTopButton.vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.initializeCart();
});
</script>

<style scoped></style>
