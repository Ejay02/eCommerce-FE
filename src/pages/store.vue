<template>
  <Metadata
    title="BuyZone/Store"
    description="This is my store page"
    canonicalSuffix="/store"
  />
  <Breadcrumb title="Store" />
  <div class="store-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="col-3">
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
        <div class="filter-card mb-3">
          <h3 class="filter-title">Filter By</h3>
          <div class="">
            <!-- availability -->
            <h5 class="sub-title">Availability</h5>
            <div>
              <div class="form-check">
                <label class="checkbox-label d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    v-model="inStock"
                    class="form-check-input"
                  />
                  In Stock(4)
                </label>
              </div>
              <div class="form-check">
                <label class="checkbox-label d-flex align-items-center gap-2">
                  <input
                    type="checkbox"
                    v-model="outOfStock"
                    class="form-check-input"
                  />
                  Out of Stock(0)
                </label>
              </div>
            </div>

            <!-- price -->
            <h5 class="sub-title">Price</h5>
            <div class="d-flex align-items-center gap-10">
              <!-- From -->
              <div class="">$</div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="From"
                />
                <!-- style="width: 40px; height: 40px" -->
                <label for="floatingInput">From</label>
              </div>
              <!-- To -->
              <div class="">$</div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput1"
                  placeholder="To"
                />
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
                    v-model="inStock"
                    class="form-check-input"
                  />
                S (2)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="filter-card mb-3">
          <h3 class="filter-title">Product Tag</h3>
        </div>
        <div class="filter-card mb-3">
          <h3 class="filter-title">Random Products</h3>
        </div>
      </div>
      <div class="col-9"></div>
    </div>
  </div>
</template>

<script setup>
import { colors } from "@/utils/colors";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
</script>

<style lang="scss" scoped></style>
