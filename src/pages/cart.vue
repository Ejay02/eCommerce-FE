<template>
  <Metadata
    title="BuyZone | Cart"
    description="View and manage the items in your shopping cart."
    canonicalSuffix="/cart"
  />

  <Breadcrumb title="Your Cart" />

  <div
    v-if="cartStore.isCartEmpty"
    class="home-wrapper-2 py-5 empty-cart-container"
  >
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="d-flex align-items-center flex-column empty mt-5">
            <h2 class="text-capitalize">Your cart is empty</h2>
            <p>Add some items to your cart to get started!</p>
            <router-link to="/store" class="text-dark text-decoration-underline"
              >Continue Shopping</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <section v-else class="cart-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div
            class="cart-header py-3 d-flex justify-content-between align-items-center"
          >
            <h4 class="cart-col-1">Product</h4>
            <h4 class="cart-col-2">Price</h4>
            <h4 class="cart-col-3">Quantity</h4>
            <h4 class="cart-col-4">Total</h4>
          </div>
          <div
            class="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
            v-for="item in cartStore.items"
            :key="item.id"
          >
            <div class="cart-col-1 d-flex align-items-center gap-15">
              <div class="w-25">
                <img :src="item.image" class="img-fluid" />
              </div>
              <div class="w-75">
                <p>{{ item.title }}</p>
                <p>Color : {{ item.selectedColor }}</p>
                <p>Size : {{ item.selectedSize }}</p>
              </div>
            </div>
            <div class="cart-col-2">
              <h5 class="price">{{ item.price }}</h5>
            </div>
            <div class="cart-col-3 d-flex align-items-center gap-15">
              <div class="">
                <input
                  type="number"
                  name=""
                  id=""
                  class="form-control"
                  min="1"
                  v-model="item.quantity"
                  @input="cartStore.updateQuantity(item.id, item.quantity)"
                />
              </div>
              <div class="" @click="cartStore.removeFromCart(item.id)">
                <i class="fa-solid fa-trash-can text-danger p-3"></i>
              </div>
            </div>

            <div class="cart-col-4">
              <h5 class="price">${{ item.price * item.quantity }}</h5>
            </div>
          </div>
        </div>
        <div class="col-12 py-2 mt-4">
          <router-link to="/store" class="button"
            >Continue Shopping</router-link
          >
        </div>
        <div
          class="cart-bottom col-12 mt-4 d-flex justify-content-between align-items-baseline py-3"
        >
          <div class="">
            <h4 class="">Other special instructions</h4>
            <textarea rows="4" />
          </div>
          <div class="d-flex align-items-end flex-column">
            <p>Subtotal: ${{ cartStore.cartTotal }}</p>
            <p>Taxes and shipping calculated at checkout</p>
            <router-link to="/checkout" class="button">Check Out</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCartStore } from "@/store/cartStore";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const cartStore = useCartStore();
</script>

<style scoped></style>
