<template>
  <div>
    <Metadata
      title="BuyZone | Size Chart"
      description="Size chart for our products."
      canonicalSuffix="layout/size-chart"
    />
    <Breadcrumb title="Size Chart" />

    <section class="size-chart-wrapper py-5 home-wrapper-2">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <Chart />
          </div>
        </div>
        <Disclaimer />
      </div>
    </section>
  </div>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Disclaimer from "@/components/disclaimer.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import Chart from "@/components/chart.vue";
</script>

<style scoped>
.size-chart-wrapper {
  background-color: #f9f9f9;
  padding: 20px;
}
</style>
