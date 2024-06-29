<template>
  <div class="col-4 mb-3">
    <div class="special-product-card">
      <div class="d-flex justify-content-between gap-30">
        <div class="image-container">
          <img src="/images/prod1.jpg" alt="airPod" class="img-fluid" />
        </div>
        <div class="special-product-content">
          <h5 class="brand">Apple</h5>
          <h6 class="title">All new Apple AirPod Max</h6>
          <star-rating
            v-bind:star-size="20"
            v-bind:increment="0.5"
            :rating="3.8"
            :read-only="true"
            :show-rating="false"
          >
          </star-rating>
          <p class="price">
            <span class="red-p">$ 529.99</span> &nbsp;

            <del>$ 600</del>
          </p>
          <div class="discount-countdown d-flex align-items-center gap-10">
            <p class="mb-0"><b>5 </b> Days</p>

            <div class="d-flex gap-10 align-items-center">
              <span class="badge rounded-circle bg-danger">05</span>:
              <span class="badge rounded-circle bg-danger">02</span>:
              <span class="badge rounded-circle bg-danger">00</span>
            </div>
          </div>
          <div class="prod-count mt-3">
            <p>Products: 6</p>
            <div class="progress" style="height: 8px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
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
</template>

<script setup>
import StarRating from "vue-star-rating";
</script>

<style lang="scss" scoped></style>
