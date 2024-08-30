<template>
  <Metadata
    title="BuyZone | Compare"
    description="Compare products side-by-side to make informed decisions."
    canonicalSuffix="layout/compare"
  />
  <Breadcrumb title="Compare" />
  <div class="compare-product-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col-4">
          <div class="compare-product-card position-relative">
            <img
              src="/images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div
              :class="[
                'product-card-image',
                { 'product-card-image-2 mb-5': index !== 0 },
              ]"
            >
              <img
                :src="product.image"
                :alt="product.type"
                :class="{ 'centered-image': index !== 0 }"
              />
            </div>
            <div class="compare-product-details">
              <h5 class="title">{{ product.title }}</h5>
              <h6 class="price mb-3 mt-3">$ {{ product.price.toFixed(2) }}</h6>
              <div>
                <div class="product-detail">
                  <h5>Brand:</h5>
                  <p>{{ product.brand }}</p>
                </div>
                <div class="product-detail">
                  <h5>Type:</h5>
                  <p>{{ product.type }}</p>
                </div>
                <div class="product-detail">
                  <h5>SKU:</h5>
                  <p>{{ product.sku }}</p>
                </div>
                <div class="product-detail">
                  <h5>Availability:</h5>
                  <p>{{ product.availability }}</p>
                </div>
                <div class="product-detail">
                  <h5>Color:</h5>
                  <ul class="colors ps-0">
                    <li
                      v-for="(color, colorIndex) in colors.slice(
                        0,
                        product.colorCount
                      )"
                      :key="colorIndex"
                      :style="{ backgroundColor: color }"
                    ></li>
                  </ul>
                </div>
                <div class="product-detail">
                  <h5>Size:</h5>
                  <div class="d-flex gap-10">
                    <p v-for="size in product.sizes" :key="size">{{ size }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { colors } from "@/utils/colors";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const products = ref([
  {
    image: "/images/watch.jpg",
    title:
      "Smart Watch for Men Women, Fitness Watch with Intelligent Reminders and Phone Calls",
    price: 100,
    brand: "Samsung",
    type: "watches",
    sku: "SKU023",
    availability: "In Stock",
    colorCount: 3,
    sizes: ["S", "M"],
  },
  {
    image: "/images/tab.jpg",
    title:
      "Sleek, lightweight tablet with a high-resolution touch screen, perfect for...",
    // both work and play
    price: 100,
    brand: "Havels",
    type: "Tablet",
    sku: "SKU2252",
    availability: "In Stock",
    colorCount: 4,
    sizes: ["S", "M"],
  },
  {
    image: "/images/speaker.jpg",
    title:
      "Compact, high-quality speakers delivering crisp, clear sound. Perfect for music, mov...",
    // ies, and gaming
    price: 56.7,
    brand: "Bajaj",
    type: "Speaker",
    sku: "SKU1202",
    availability: "In Stock",
    colorCount: 2,
    sizes: ["M", "L"],
  },
]);
</script>

<style scoped></style>
