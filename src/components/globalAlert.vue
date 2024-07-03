<template>
  <transition name="fade">
    <div v-if="show" :class="['notification', type]">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "info",
  },
  duration: {
    type: Number,
    default: 3000,
  },
});

const show = ref(false);

onMounted(() => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, props.duration);
});
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: black;
  /* font-weight: bold; */
}

.info {
  background-color: #2196f3;
}

.success {
  background-color: #c1ffc1;
}

.warning {
  background-color: #ffc107;
}

.error {
  background-color: #f44336;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
