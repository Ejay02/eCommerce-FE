<template>
  <Metadata
    title="BuyZone | Wishlist"
    description="Stay updated with BuyZone's latest articles, tips, and reviews."
    canonicalSuffix="layout/wishlist"
  />
  <Breadcrumb title="Wishlist(s)" />

  <div class="wishlist-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div v-for="(item, index) in wishlistItems" :key="index" class="col-3">
          <div class="wishlist-card position-relative">
            <img
              src="/images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div class="wishlist-card-image">
              <img
                :src="item.imageSrc"
                :alt="item.altText"
                class="img-fluid w-100"
              />
            </div>
            <div class="px-3 py-3">
              <h5 class="title">{{ item.title }}</h5>
              <h6 class="price">{{ item.price }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const wishlistItems = ref([
  {
    imageSrc: "/images/watch.jpg",
    altText: "watch",
    title:
      "Smart Watch for Men, Women, Fitness Watch with Intelligent Reminders and Phone Calls",
    price: "$ 100",
  },
  {
    imageSrc: "/images/tab.jpg",
    altText: "tablet",
    title:
      "Sleek, lightweight tablet with a high-resolution touch screen, perfect for both work and play",
    price: "$ 100",
  },
  {
    imageSrc: "/images/speaker.jpg",
    altText: "speaker",
    title:
      "Compact, high-quality speakers delivering crisp, clear sound. Perfect for music, ...",
    price: "$ 56.70",
  },
]);
</script>

<style scoped></style>
