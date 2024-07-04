<template>
  <Metadata
    :title="`BuyZone | product | ${product.title}`"
    :description="`${product.description}`"
    :canonicalSuffix="`product/${product.id}`"
  />
  <Breadcrumb :title="product.title" />

  <div class="main-product-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <!-- left side -->
        <div class="col-6">
          <div class="main-product-image">
            <div class="image-container">
              <vue-image-zoomer
                :regular="product.image"
                img-class="img-fluid centered-image"
                :alt="product.title"
                :show-message="false"
              />
            </div>
          </div>
          <div class="other-product-images d-flex flex-wrap gap-15">
            <div
              v-for="(image, index) in product.images"
              :key="index"
              class="img-fluid"
            >
              <vue-image-zoomer
                :regular="image"
                img-class="img-fluid centered-image"
                :alt="product.title"
                :show-message="false"
              />
            </div>
          </div>
        </div>

        <!-- right side -->
        <div class="col-6">
          <div class="main-product-details">
            <div class="border-bottom">
              <h3 class="title">{{ product.title }}</h3>
            </div>
            <div class="border-bottom py-3">
              <p class="price">$ 100</p>
              <div class="d-flex align-items-center gap-10">
                <star-rating
                  v-bind:star-size="15"
                  v-bind:increment="0.5"
                  :rating="product.rating"
                  :read-only="true"
                  :show-rating="false"
                ></star-rating>
                <p class="mb-0 t-review">{{ product.reviews }}</p>
                <a class="review-btn" href="#review"> write a review </a>
              </div>
            </div>
            <div class="border-bottom">
              <div class="d-flex gap-10 align-items-center my-2">
                <h3 class="prod-head">Brand :</h3>
                <p class="prod-data">{{ product.brand }}</p>
              </div>
              <div class="d-flex gap-10 align-items-center my-2">
                <h3 class="prod-head">Categories :</h3>
                <p class="prod-data">
                  <span
                    v-for="(category, index) in product.categories"
                    :key="index"
                  >
                    {{ category
                    }}<span v-if="index < product.categories.length - 1"
                      >,
                    </span>
                  </span>
                </p>
              </div>
              <div class="d-flex gap-10 align-items-center my-2">
                <h3 class="prod-head">Tags :</h3>
                <p class="prod-data">
                  <span v-for="(tag, index) in product.tags" :key="index">
                    {{ tag
                    }}<span v-if="index < product.tags.length - 1">, </span>
                  </span>
                </p>
              </div>
              <div class="d-flex gap-10 align-items-center my-2">
                <h3 class="prod-head">Availability :</h3>
              <p 
                class="prod-data" 
                :class="{'text-danger font-bold': updatedAvailability === 0}"
               >
                  {{ updatedAvailability > 0 ? `${updatedAvailability} in Stock` : 'Out of Stock' }}
              </p>

             
              </div>
              <div class="d-flex gap-10 align-items-center my-2">
                <h3 class="prod-head">SKU :</h3>
                <p class="prod-data">{{ product.SKU }}</p>
              </div>
              <div class="d-flex gap-10 flex-column mt-2 mb-3">
                <h3 class="prod-head">Size :</h3>
                <div class="d-flex flex-wrap gap-15" v-for="(size, index) in product.sizes" :key="index">
                  <button class="badge border border-1  bg-white text-dark border-secondary pointer">
                    {{ size }}
                  </button>
                </div>
              
              </div>
              <div class="d-flex gap-10 flex-column mt-2 mb-3">
                <h3 class="prod-head">Color:</h3>
                <p class="prod-data">
                  <ul class="colors ps-0">
                    <li
                      v-for="(color, colorIndex) in colors.slice(
                        0,
                        product.colorCount
                      )"
                      :key="colorIndex"
                      :style="{ backgroundColor: color }"
                    ></li>
                  </ul>

                </p>
              </div>
              <div class="d-flex gap-15 align-items-center mt-2 mb-3 flex-row">
                <h3 class="prod-head">Quantity :</h3>
               <div class="">
              
                <input 
                type="number" 
                style="width: 70px;" 
                min="0" 
                :max="product.count" 
                v-model="quantity" 
                @input="updateAvailability"
                class="form-control"
                >
               </div>
               <div class="d-flex align-items-center gap-30 ms-5">
                <button class="button border-0" @click="addToCart">Add to Cart</button>
                  <button class="button signup"
                    >Buy Now</button
                  >
               </div>
              </div>

              <div class="d-flex align-items-center gap-15">
                <div class="">
                  <a href="" class=""><i class="me-2 fa-solid fa-code-compare"></i>Compare</a>
                </div>
                <div class="">
                  <a href=""><i class="me-2 fa-regular fa-heart"></i>
                    Add to Wishlist
                  </a>
                </div>
              </div>
              <div class="mt-3">

                <Accordion/>
              </div>
            </div>
            <div class="d-flex gap-10 align-items-center my-2">
              
              <a href="" @click="copy" @click.prevent><i class="me-2 fa-solid fa-link"></i></a>
              <h3 class="product-heading" style="font-size:14px">Share</h3>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- description -->
  <section class="description-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h4>Description</h4>
          <div class="">
            <p class="bg-white p-3">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- reviews -->
  <section id="review" class="reviews-wrapper home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <h3 class="">Reviews</h3>
          <div class="review-inner-wrapper">
            <div
              class="review-head d-flex justify-content-between align-items-end"
            >
              <div class="">
                <h4 class="mb-2">Customer Reviews</h4>
                <div class="d-flex gap-10 align-items-center">
                  <star-rating
                    v-bind:star-size="15"
                    v-bind:increment="0.5"
                    :rating="product.rating"
                    :read-only="true"
                    :show-rating="false"
                  ></star-rating>
                  <p class="mb-0">Based on 2 Reviews</p>
                </div>
              </div>
              <div class="" v-if="orderedProduct">
                <a href="" class="text-dark text-decoration-underline"
                  >Write a review</a
                >
              </div>
            </div>

            <div class="review-form py-4">
              <h4 class="">Write a Review</h4>
              <form class="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <input
                  
                    type="email"
                    class="form-control"
                    placeholder="janeSmith@example.com"
                  />
                </div>
                <div class="">
                  <star-rating
                    v-bind:star-size="15"
                    v-bind:increment="0.5"
                    :rating="product.rating"
                    :show-rating="false"
                  ></star-rating>
                </div>

                <div>
                  <input
                  
                    type="text"
                    class="form-control"
                    placeholder="Give your review a title"
                  />
                </div>
                <div>
                  <textarea
                    class="w-100 form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    placeholder="Write your comments here ✨"
                  ></textarea>
                </div>

                <div class="d-flex justify-content-end">
                  <button class="button border-0">Submit Review</button>
                </div>
              </form>
            </div>

            <div class="reviews mt-4">
              <div
                v-for="(reviewer, index) in product.reviewers"
                :key="index"
                class="review"
              >
              <star-rating
                v-bind:star-size="15"
                v-bind:increment="0.5"
                :rating="reviewer.rating"
                :read-only="true"
                :show-rating="false"
              ></star-rating>
                <div class="d-flex gap-10 align-items-center mt-2">
                  <h6 class="mb-0">{{ reviewer.name }}</h6>
                 <span class="fs-6 fst-italic text-secondary">
                   on 
                 </span> 
                  <h6 class="mb-0">{{reviewer.date}}</h6>
                </div>
                <p class="mt-3">
                  {{ reviewer.comment }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- popular -->
  <section class="popular-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <PopularProductCard text="You May Also Like" />
    </div>
  </section>


</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { colors } from "@/utils/colors";
import { products } from "@/utils/index";
import StarRating from "vue-star-rating";
import "vue-image-zoomer/dist/style.css";
import Metadata from "@/components/metadata.vue";
import { useCartStore } from '@/store/cartStore'; 
import { VueImageZoomer } from "vue-image-zoomer";
import Accordion from "@/components/accordion.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import { useNotifications } from '@/composable/useGlobalAlert.js';
import PopularProductCard from "@/components/cards/popularProductCard.vue";

const orderedProduct = ref(true);

const { notify } = useNotifications();

const cartStore = useCartStore(); 

const route = useRoute();
const baseUrl =  window.location.hostname === 'localhost' 
    ? 'http://localhost:5173'
    : "https://buyzone-demo.netlify.app";

const fullUrl = computed(() => `${baseUrl}/product/${productId.value}`);
const productId = computed(() => route.params.id);

const product = computed(() =>
  products.find((item) => item.id === parseInt(productId.value))
);

const quantity = ref(1); 

const updatedAvailability = computed(() => {
    if (product.value) {
        return product.value.count - quantity.value;
    }
    return 0;
});


const copy = async () => {
  try {
    await navigator.clipboard.writeText(fullUrl.value);
    notify('URL copied to clipboard', 'success');

  } catch (err) {
    notify('Failed to copy URL', 'error');
  
  }
};

const addToCart = () => {
  console.log(product.value)
  cartStore.addToCart(product.value, quantity.value);
  notify('Product added to cart', 'success');
};
</script>

<style lang="scss" scoped></style>
