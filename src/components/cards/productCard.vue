<template>
  <div class="row products-container">
    <div class="col-2" v-for="(product, index) in products" :key="index">
      <div class="product-card position-relative">
        <div class="wishlist-icon position-absolute">
          <router-link>
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
            v-bind:star-size="20"
            v-bind:increment="0.5"
            :rating="product.rating"
            :read-only="true"
            :show-rating="false"
          ></star-rating>
          <p class="price">{{ product.price }}</p>
        </div>
        <ActionBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import StarRating from "vue-star-rating";
import ActionBar from "../actionBar.vue";

const products = ref([
  {
    image: "/images/prod-1.png",
    brand: "Apple",
    title: "AirPods Max",
    rating: 3.8,
    price: "$529.99",
  },
  {
    image: "/images/prod-2.jpg",
    brand: "Jazwares",
    title: 'Squishmallows 16" Plush - Holiday Cat in Blue Scarf',
    rating: 4.5,
    price: "$24.99",
  },
  {
    image: "/images/prod-3.jpg",
    brand: "Sonos",
    title: "Move 2 Speaker",
    rating: 3.5,
    price: "$449.00",
  },
  {
    image: "/images/prod-4.jpg",
    brand: "PELONIS",
    title: "42-Inch Tower Fan, Standing Fan with Remote",
    rating: 3,
    price: "$65.88",
  },
  {
    image: "/images/prod-5.jpg",
    brand: "Sony",
    title: "PlayStation 5 DualSense Wireless Controller",
    rating: 4.5,
    price: "$54.95",
  },
  {
    image: "/images/prod-6.jpg",
    brand: "Samsung",
    title: "Samsung Galaxy Watch6",
    rating: 4.4,
    price: "$209",
  },
]);
</script>
