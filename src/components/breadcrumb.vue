<template>
  <div class="breadcrumb mb-0 py-4">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">
            <span @click="route" class="text-dark">Home &nbsp; </span> /
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "@/router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/useUserStore";

const userStore = useUserStore();

userStore.loadUserFromStorage();

const { user } = storeToRefs(userStore);
const isLoggedIn = computed(() => !!user.value);

const route = async () => {
  if (isLoggedIn.value) {
    router.push("/layout");
  } else {
    router.push("/");
  }
};

defineProps({
  title: String,
});
</script>

<style scoped>
.breadcrumb {
  cursor: pointer;
}
</style>
