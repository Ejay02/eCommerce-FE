<template>
  <button v-if="isVisible" class="scroll-to-top button" @click="scrollToTop">
    <i class="fa fa-chevron-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { scrollToTop } from "@/utils/scrollToTop";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  /* opacity: 0.7; */
}

.scroll-to-top:hover {
  opacity: 1;
}
</style>

