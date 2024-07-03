<template>
  <div class="accordion border-top" id="accordionExample">
    <!-- 1 -->
    <div class="accordion-item border-top">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="me-2 fa-solid fa-truck icon" style=""></i> Shipping and
          Returns
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <!-- {{ product.shippingAndReturns }} -->
          <ul>
            <li
              v-for="(data, index) in product.shippingAndReturns"
              :key="index"
            >
              {{ data }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="accordion-item border-top">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i class="icon me-2 fa-solid fa-asterisk"></i> Materials
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul>
            <li v-for="(material, index) in product.materials" :key="index">
              {{ material }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="accordion-item border-top">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <i class="icon me-2 fa-solid fa-ruler"></i> Dimensions
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {{ product.dimensions }}
        </div>
      </div>
    </div>
    <!-- 4 -->
    <div class="accordion-item border-top">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          <i class="icon me-2 fa-regular fa-heart"></i> Care Instructions
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {{ product.careInstructions }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { products } from "@/utils/index";

const route = useRoute();
const productId = computed(() => route.params.id);

const product = computed(() =>
  products.find((item) => item.id === parseInt(productId.value))
);
</script>

<style scoped>
.accordion {
  --bs-accordion-border-width: 0;
  --bs-accordion-btn-focus-border-color: transparent;
  --bs-accordion-btn-focus-box-shadow: none;
  --bs-accordion-active-bg: transparent;
  --bs-accordion-active-color: var(--bs-accordion-btn-color);
}

.accordion-item {
  border: none;
}

.accordion-button {
  border: none;
}

.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-btn-color);
  background-color: transparent;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: transparent;
}

.accordion-item .icon,
.accordion-body {
  font-size: 13px;
  color: var(--color-777777);
}
</style>
