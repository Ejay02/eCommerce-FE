<template>
  <Metadata
    title="BuyZone/store"
    description="Discover top products at BuyZone. Shop tech gadgets, fashion, and more at great prices."
    canonicalSuffix="/store"
  />
  <Breadcrumb title="Store" />
  <div class="store-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-3">
          <!-- shop by -->
          <div class="filter-card mb-3">
            <h3 class="filter-title">Shop By Categories</h3>
            <div class="ps-0">
              <ul class="">
                <li class="">Watch</li>
                <li class="">Tv</li>
                <li class="">Laptop</li>
                <li class="">Speaker</li>
              </ul>
            </div>
          </div>
          <!-- filter by -->
          <div class="filter-card mb-3">
            <h3 class="filter-title">Filter By</h3>
            <div class="">
              <!-- availability -->
              <h5 class="sub-title">Availability</h5>
              <div>
                <div class="form-check">
                  <label class="checkbox-label d-flex align-items-center gap-2">
                    <input type="checkbox" class="form-check-input" />
                    <!-- v-model="inStock" -->
                    <!--  v-model.trim="msg"  -->
                    In Stock(4)
                  </label>
                </div>
                <div class="form-check">
                  <label class="checkbox-label d-flex align-items-center gap-2">
                    <input type="checkbox" class="form-check-input" />
                    <!-- v-model="outOfStock" -->
                    <!--  v-model.trim="msg"  -->
                    Out of Stock(0)
                  </label>
                </div>
              </div>

              <!-- price -->
              <h5 class="sub-title">Price</h5>
              <div class="d-flex align-items-center gap-10">
                <!-- From -->
                <div class="">$</div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
                  <!--  v-model.trim="msg"  -->
                  <!-- style="width: 40px; height: 40px" -->
                  <label for="floatingInput">From</label>
                </div>
                <!-- To -->
                <div class="">$</div>
                <div class="form-floating">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <!--  v-model.trim="msg"  -->
                  <label for="floatingInput1">To</label>
                </div>
              </div>

              <!-- Colors -->
              <h5 class="sub-title">Color</h5>
              <div class="">
                <div class="">
                  <ul class="colors ps-0">
                    <li
                      v-for="(color, index) in colors"
                      :key="index"
                      :style="{ backgroundColor: color }"
                    ></li>
                  </ul>
                </div>
              </div>

              <!-- size -->
              <h5 class="sub-title">Size</h5>
              <div class="">
                <div class="form-check">
                  <label class="checkbox-label d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="color-1"
                    />
                    <!-- v-model="color" -->
                    <!--  v-model.trim="msg"  -->
                    S (2)
                  </label>
                </div>
                <div class="form-check">
                  <label class="checkbox-label d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="color-2"
                    />
                    <!-- v-model.trim="msg"  -->
                    M (2)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- tags -->
          <div class="filter-card mb-3">
            <h3 class="filter-title">Product Tag</h3>
            <div class="">
              <div
                class="product-tag d-flex flex-wrap align-items-center gap-10"
              >
                <span
                  v-for="(tag, index) in productTags"
                  :key="index"
                  class="badge bg-light text-secondary rounded-3 py-2 px-3"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <!-- random -->
          <div class="filter-card mb-3">
            <h3 class="filter-title">Random Products</h3>
            <div class="">
              <div class="random-products d-flex mb-3">
                <div class="w-50">
                  <img
                    src="/images/headphone.jpg
                "
                    alt="headphone"
                    class="img-fluid"
                  />
                </div>
                <div class="w-50">
                  <h5>
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                  <star-rating
                    v-bind:star-size="15"
                    v-bind:increment="0.5"
                    :rating="3.5"
                    :read-only="true"
                    :show-rating="false"
                  ></star-rating>
                  <b class="price">$100</b>
                </div>
              </div>
              <div class="random-products d-flex">
                <div class="w-50">
                  <img
                    src="/images/watch.jpg
                "
                    alt="smartwatch"
                    class="img-fluid"
                  />
                </div>
                <div class="w-50">
                  <h5>
                    Smart Watch for Men Women, Fitness Watch with Intelligent
                    Reminders and Phone Calls
                  </h5>
                  <star-rating
                    v-bind:star-size="15"
                    v-bind:increment="0.5"
                    :rating="4.5"
                    :read-only="true"
                    :show-rating="false"
                  ></star-rating>
                  <b class="price">$100</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="filter-sort-grid mb-4">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center gap-10">
                <p class="mb-0 d-block" style="width: 100px">Sort By:</p>
                <select name="" class="form-control form-select" id="">
                  <option value="manual">Featured</option>
                  <option value="best-selling" selected>Best Selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
              <div class="d-flex align-items-center gap-10">
                <p class="totalProducts mb-0">21 Products</p>
                <div class="d-flex gap-10 align-items-center grid">
                  <img
                    @click="setGrid(6)"
                    src="/images/gr4.svg"
                    class="d-block img-fluid"
                    alt="grid"
                  />
                  <img
                    @click="setGrid(4)"
                    src="/images/gr3.svg"
                    class="d-block img-fluid"
                    alt="grid"
                  />
                  <img
                    @click="setGrid(2)"
                    src="/images/gr2.svg"
                    class="d-block img-fluid"
                    alt="grid"
                  />
                  <img
                    @click="setGrid(1)"
                    src="/images/gr.svg"
                    class="d-block img-fluid"
                    alt="grid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="products-list pb-5">
            <div class="d-flex gap-10 flex-wrap">
              <storeProductCard :grid="grid" />
            </div>
          </div>
          <!-- <productCard :limit="2" :grid="grid" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { colors } from "@/utils/colors";
import StarRating from "vue-star-rating";
import { productTags } from "@/utils/index";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import storeProductCard from "@/components/cards/storeProductCard.vue";

const grid = ref(6);

const setGrid = (value) => {
  grid.value = value;
};
</script>

<style scoped>
.store {
  padding: 20px;
}

.grid img {
  cursor: pointer;
}

.products-list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.products-list .d-flex {
  width: 100%;
}

.products-list .col-1,
.products-list .col-2,
.products-list .col-3,
.products-list .col-4,
.products-list .col-6,
.products-list .col-12 {
  padding: 0 10px;
}
</style>
