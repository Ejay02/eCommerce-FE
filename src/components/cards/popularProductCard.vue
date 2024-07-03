<template>
  <section class="popular-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h3 class="section-heading">{{ props.text }}</h3>
        </div>
      </div>
      <div class="row products-container">
        <div class="d-flex gap-30">
          <!-- card 1 -->
          <div class="col-2">
            <div class="card">
              <div class="popular-card d-flex gap-15">
                <div class="details d-flex gap-15 align-items-center">
                  <img
                    src="/images/prod-6.jpg"
                    alt="watch"
                    style="width: 40px; height: 40px"
                  />
                  <h6>Smart Watch</h6>
                </div>
                <div class="details d-flex gap-15 align-items-center">
                  <img
                    src="/images/speaker.jpg"
                    alt="speaker"
                    style="width: 40px; height: 40px"
                  />
                  <h6>Speaker</h6>
                </div>
                <div class="details d-flex gap-15 align-items-center">
                  <img
                    src="/images/laptop.jpg"
                    alt="laptop"
                    style="width: 40px; height: 40px"
                  />
                  <h6>Laptops</h6>
                </div>
              </div>
            </div>
          </div>
          <!-- card 2 -->
          <div class="col-2">
            <div class="card">
              <div class="popular-card-2 d-flex">
                <div class="details-2 d-flex align-items-center">
                  <h4 class="">15% OFF</h4>
                </div>
                <div class="details-2 d-flex align-items-center">
                  <h2>Home Speakers</h2>
                </div>
                <div class="details-2 d-flex align-items-center">
                  <h4>
                    From $ 99.99 or $ 16.65/mo. <br />
                    for 24 mo. *
                  </h4>
                </div>
                <div class="image-container">
                  <img
                    src="/images/homepod.png"
                    alt="homePod"
                    class="homePod"
                  />
                </div>
              </div>
            </div>
          </div>
          <ProductCard :limit="4" :grid="4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./productCard.vue";

const props = defineProps({
  text: {
    type: String,
    // required: true,
  },
});
</script>

<style lang="scss" scoped></style>
