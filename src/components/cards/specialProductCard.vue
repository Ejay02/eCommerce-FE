<template>
  <div class="product-container">
    <div class="product-card" v-for="(data, index) in specProd" :key="index">
      <div class="special-product-card">
        <div class="d-flex justify-content-between gap-5">
          <div class="image-container">
            <img :src="data.image" :alt="data.brand" class="img-fluid" />
          </div>
          <div class="special-product-content">
            <h5 class="brand">{{ data.brand }}</h5>
            <h6 class="text-truncate desc">{{ data.description }}</h6>
            <star-rating
              v-bind:star-size="20"
              v-bind:increment="0.5"
              :rating="data.rating"
              :read-only="true"
              :show-rating="false"
            ></star-rating>
            <p class="price mt-2">
              <span class="">$ {{ data.price }}</span>
              <!-- <span class="red-p">$ {{ data.price }}</span> &nbsp;
              <del>$ 600</del> -->
            </p>
            <div class="discount-countdown d-flex align-items-center">
              <p class="mb-0 px-1"><b>5 </b> Days</p>
              <div class="d-flex align-items-center">
                <span class="badge rounded-circle bg-danger">05</span
                >&nbsp;:&nbsp;
                <span class="badge rounded-circle bg-danger">02</span
                >&nbsp;:&nbsp;
                <span class="badge rounded-circle bg-danger">00</span>
              </div>
            </div>
            <div class="prod-count mt-3">
              <p>Products: {{ data.count }}</p>
              <div class="progress" style="height: 8px">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: `${data.count}%` }"
                  aria-valuenow="data.count"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <router-link to="" class="button mt-5">Add to Cart</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRating from "vue-star-rating";
import { specProd } from "@/utils/index";
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.product-card {
  flex: 1 1 calc(33.333% - 20px); /* 3 cards per row with 20px gap */
  box-sizing: border-box;
  box-shadow: 0 0 10px #0000001a;
}

.special-product-card {
  padding: 20px 10px;
  border-radius: 10px;
  background-color: white;
}

.image-container img {
  max-width: 100%;
  border-radius: 5px;
}

.desc {
  color: #777777;
  font-size: 12px;
  line-height: 18px;
  font-weight: 200px;
  letter-spacing: 0.3;
}
</style>
