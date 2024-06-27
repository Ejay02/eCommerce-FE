<template>
  <div class="row products-container">
    <div
      :class="[
        grid === 6
          ? 'col-2'
          : grid === 4
          ? 'col-3'
          : grid === 2
          ? 'col-6'
          : 'col-12',
        'mb-3',
      ]"
      v-for="(product, index) in limitedProducts"
      :key="index"
    >
      <div class="store-product-card h-100 position-relative">
        <div class="wishlist-icon position-absolute">
          <router-link to="">
            <img src="/images/wish.svg" alt="wishlist" />
          </router-link>
        </div>
        <div class="product-image">
          <img
            :src="product.image"
            :alt="`product image of ${product.title}`"
            class="img-fluid"
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
          <p v-if="grid === 1" class="description">{{ product.description }}</p>
          <p class="price">{{ product.price }}</p>
        </div>
        <actionBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import StarRating from "vue-star-rating";
import actionBar from "../actionBar.vue";
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

.store-product-card:hover .action-bar {
  right: 15px;
}

/* .action-bar {
  top: 10%;
  right: -23px;
  transition: 0.3s;
} */

.store-product-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.wishlist-icon {
  top: 10px;
  right: 10px;
}

.product-image {
  text-align: center;
  margin-bottom: 10px;
}

.product-image img {
  max-height: 150px;
  object-fit: contain;
}

.product-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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
}

.product-details p.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.product-details p.price {
  font-size: 18px;
  color: var(--color-1c1c1b);
  font-weight: bold;
  margin-top: auto;
}
</style>
