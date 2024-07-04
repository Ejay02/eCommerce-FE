<template>
  <div :class="`row products-container grid-${grid}`">
    <div
      :class="`col-${12 / grid}`"
      v-for="(product, index) in limitedProducts"
      :key="index"
    >
      <router-link :to="`/product/${product.id}`">
        <div class="product-card position-relative h-100">
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
            <p class="price">$ {{ product.price }}</p>
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

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
}

.product-card:hover .action-bar {
  right: 15px;
}

.product-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%; /* Ensure all cards have the same height */
  width: 100%;
}

.wishlist-icon {
  top: 10px;
  right: 10px;
}

.product-image {
  text-align: center;
  margin-bottom: 10px;
  height: 150px; /* Set a fixed height for the image container */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
}


.product-image img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.product-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-details h6.brand {
  color: var(--color-bf4800);
  font-size: 14px;
  margin-bottom: 5px;
}

.product-details h5.product-title {
  font-size: 16px;
  color: var(--color-1c1c1b);
  margin-bottom: 10px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 60px; /* Set a fixed height for 2 lines of text */
}

.product-details p.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.product-details .star-rating {
  margin-bottom: 10px;
}

.product-details p.price {
  font-size: 18px;
  color: var(--color-1c1c1b);
  /* font-weight: bold; */

  margin-top: 5px;
}
</style>
