<template>
  <Metadata
    title="BuyZone | Blogs"
    description="Stay updated with BuyZone's latest articles, tips, and reviews."
    canonicalSuffix="/blogs"
  />
  <Breadcrumb title="Blogs" />
  <div class="blog-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-3">
          <div class="filter-card mb-3">
            <h3 class="filter-title">Find By Categories</h3>
            <div class="ps-0">
              <ul class="">
                <li class="">Watch</li>
                <li class="">Tv</li>
                <li class="">Laptop</li>
                <li class="">Speaker</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="row">
            <blogCard :isBigCard="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import blogCard from "@/components/cards/blogCard.vue";
</script>

<style lang="scss" scoped></style>
