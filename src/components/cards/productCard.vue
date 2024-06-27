<template>
  <div :class="`row products-container grid-${grid}`">
    <div
      :class="`col-${12 / grid}`"
      v-for="(product, index) in limitedProducts"
      :key="index"
    >
      <router-link to="">
        <div class="product-card position-relative">
          <div class="wishlist-icon position-absolute">
            <router-link to="">
              <img src="/images/wish.svg" alt="wishlist" />
            </router-link>
          </div>
          <div class="product-image">
            <img
              :src="product.image"
              :alt="`product image of ${product.title}`"
            />
          </div>
          <div class="product-details">
            <h6 class="brand">{{ product.brand }}</h6>
            <h5 class="product-title">{{ product.title }}</h5>
            <star-rating
              v-bind:star-size="15"
              v-bind:increment="0.5"
              :rating="product.rating"
              :read-only="true"
              :show-rating="false"
            ></star-rating>
            <p class="price">{{ product.price }}</p>
          </div>
          <actionBar />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import StarRating from "vue-star-rating";
import ActionBar from "../actionBar.vue";
import { products } from "../../utils/index";

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
  grid: {
    type: Number,
    default: 6,
  },
});

const limitedProducts = computed(() => {
  return props.limit ? products.slice(0, props.limit) : products;
});
</script>
