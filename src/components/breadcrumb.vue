<template>
  <div class="breadcrumb mb-0 py-4">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <p class="text-center mb-0">
            <router-link to="/" class="text-dark">Home &nbsp; </router-link> /
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
