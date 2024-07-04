<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useCartStore } from "@/store/cartStore";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.initializeCart();
});
</script>

<style lang="scss" scoped></style>
