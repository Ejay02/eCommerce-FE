<template>
  <div class="loading-screen d-flex justify-content-center align-items-center">
    <div class="spinner-border text-primary" role="status"></div>
    <h2 class="loading-text font-monospace">{{ message }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: "Loading, stand by...",
  },
});

const message = props.msg;
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.loading-text {
  margin-left: 15px;
  font-size: 1.5rem;
  color: #007bff;
  animation: fadeIn 1s ease-in-out infinite alternate;
}

/* Keyframes for fade-in effect */
@keyframes fadeIn {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
