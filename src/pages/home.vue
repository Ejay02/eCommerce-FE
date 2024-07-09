<template>
  <Metadata
    title="BuyZone | Home"
    description="Stay updated with BuyZone's latest articles, tips, and reviews."
    canonicalSuffix="/home"
  />

  <!-- main banner -->
  <section class="home-wrapper-1 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-6">
          <div class="main-banner position-relative">
            <img
              src="/images/main-banner-1.jpg"
              alt="main banner"
              class="img-fluid rounded-3"
            />

            <div class="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>iPhone 15 Pro</h5>
              <p>From $ 999.00 or $ 41.62/mo.</p>
              <router-link to="" class="button">BUY NOW</router-link>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div
            class="d-flex flex-wrap gap-10 justify-content-between align-items-center"
          >
            <div class="small-banner position-relative">
              <img
                src="/images/catbanner-01.jpg"
                alt="air max"
                class="img-fluid rounded-3"
              />

              <div class="small-banner-content position-absolute">
                <h4>Best sale</h4>
                <h5>MacBook Pro 14</h5>
                <p>
                  From $ 1699.00 or <br />
                  $ 64.62/mo.
                </p>
              </div>
            </div>
            <div class="small-banner position-relative">
              <img
                src="/images/catbanner-02.jpg"
                alt="smartwatch"
                class="img-fluid rounded-3"
              />

              <div class="small-banner-content position-absolute">
                <h4>15% off</h4>
                <h5>Smartwatch 7</h5>
                <p>
                  Shop the latest band <br />
                  styles and colors
                </p>
              </div>
            </div>
            <div class="small-banner position-relative">
              <img
                src="/images/catbanner-03.jpg"
                alt="ipad air"
                class="img-fluid rounded-3"
              />

              <div class="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>Buy iPad Air</h5>
                <p>
                  From $ 599 or <br />
                  $ 49.91/mo. for 12 mo. *
                </p>
              </div>
            </div>
            <div class="small-banner position-relative">
              <img
                src="/images/catbanner-04.jpg"
                alt="airPods max"
                class="img-fluid rounded-3"
              />

              <div class="small-banner-content position-absolute">
                <h4>Free Engraving</h4>
                <h5>AirPods Max</h5>
                <p>
                  High-fidelity playback & <br />
                  ultra-low distortion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- services -->
  <section class="home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div
            class="services d-flex align-items-center justify-content-between"
          >
            <div
              class="d-flex align-items-center gap-15"
              v-for="(data, index) in servicesData"
              :key="index"
            >
              <img :src="data.image" alt="services" />
              <div>
                <h6>{{ data.title }}</h6>
                <p class="mb-0">{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- categories -->
  <section class="home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div
            class="categories d-flex justify-content-between flex-wrap align-items-center"
          >
            <div
              class="d-flex gap align-items-center p-2"
              v-for="(data, index) in categoriesData"
              :key="index"
            >
              <div>
                <h6>{{ data.title }}</h6>
                <p>{{ data.count }}Items</p>
              </div>
              <img :src="data.image" :alt="data.alt" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- featured collection -->
  <section class="featured-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h3 class="section-heading">Featured Collection</h3>
        </div>
        <ProductCard />
      </div>
    </div>
  </section>

  <!--famous  -->
  <section class="famous-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <FamousCard />
      </div>
    </div>
  </section>

  <!-- special products -->
  <section class="special-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h3 class="section-heading">Special Products</h3>
        </div>
      </div>
      <div class="row">
        <SpecialProductCard />
        <SpecialProductCard />
        <SpecialProductCard />
      </div>
    </div>
  </section>

  <!-- popular products -->
  <PopularProductCard text="Our Popular Products" />

  <!-- marquee -->
  <section class="marquee-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="marquee-inner-wrapper card-wrapper">
            <vue-marquee-slider :speed="15000" reverse id="marquee-slider">
              <div class="mx-4 w-15"></div>
              <img
                :src="data.src"
                :alt="data.alt"
                v-for="(data, index) in brandData"
                :key="index"
              />
            </vue-marquee-slider>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- blogs -->
  <section class="blog-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h3 class="section-heading">Our Latest Blogs</h3>
        </div>
        <blogCard />
      </div>
    </div>
  </section>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import blogCard from "../components/cards/blogCard.vue";
import FamousCard from "../components/cards/famousCard.vue";
import ProductCard from "@/components/cards/productCard.vue";
import "../../node_modules/vue3-marquee-slider/dist/style.css";
import { servicesData, categoriesData, brandData } from "@/utils/index";
import PopularProductCard from "@/components/cards/popularProductCard.vue";
import SpecialProductCard from "../components/cards/specialProductCard.vue";
</script>

<style scoped></style>
