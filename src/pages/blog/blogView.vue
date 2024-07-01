<template>
  <Metadata
    title="BuyZone/blog"
    description="Stay updated with BuyZone's latest articles, tips, and reviews."
    canonicalSuffix="blog/:id"
  />
  <Breadcrumb title="Dynamic Blog Name" />
  <div class="blog-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-3">
          <div class="filter-card mb-3">
            <h3 class="filter-title">Find By Categories</h3>
            <div class="ps-0">
              <ul class="d-flex flex-column">
                <router-link to="/" style="color: gray; text-decoration: none"
                  >Home</router-link
                >
                <router-link
                  to="/store"
                  style="color: gray; text-decoration: none"
                  >Store</router-link
                >
                <router-link
                  to="/blogs"
                  style="color: gray; text-decoration: none"
                  >Blogs</router-link
                >
                <router-link
                  to="/contact"
                  style="color: gray; text-decoration: none"
                  >Contact</router-link
                >
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
</script>

<style lang="scss" scoped></style>
