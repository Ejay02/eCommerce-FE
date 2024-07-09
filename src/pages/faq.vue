<template>
  <Metadata
    title="BuyZone | FAQs"
    description=""
    canonicalSuffix="/faq"
  />
  <Breadcrumb title="FAQs" />

  <section class="faq-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="faq"></div>
        </div>
      </div>
      <Disclaimer />
    </div>
  </section>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Disclaimer from "@/components/disclaimer.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
</script>

<style scoped>
.faq {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>