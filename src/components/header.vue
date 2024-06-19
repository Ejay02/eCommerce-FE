<template>
  <header class="header-top-strip py-3">
    <div class="container-xxl">
      <div class="row">
        <div class="col-6">
          <p class="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
        </div>
        <div class="col-6">
          <p class="text-end text-white mb-0">
            Hotline:
            <a class="text-white" href="(555) 1234 5678">(555) 1234 5678</a>
          </p>
        </div>
      </div>
    </div>
  </header>

  <header class="header-upper py-3">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-2">
          <h2><router-link class="text-white" to="/">BuyZone</router-link></h2>
        </div>
        <div class="col-5">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Search Product Here..."
              aria-label="Search Product Here..."
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text p-3" id="basic-addon2"
              ><i class="fa-solid fa-magnifying-glass"></i
            ></span>
          </div>
        </div>
        <div class="col-5">
          <div
            class="header-upper-links d-flex align-items-center justify-content-between"
          >
            <div>
              <router-link class="d-flex align-items-center gap-10 text-white"
                ><img src="/public/images/compare.svg" alt="compare" />
                <p class="mb-0">
                  Compare <br />
                  Products
                </p>
              </router-link>
            </div>
            <div>
              <router-link class="d-flex align-items-center gap-10 text-white"
                ><img src="/public/images/wishlist.svg" alt="wishlist" />
                <p class="mb-0">
                  Favorite <br />
                  Wishlist
                </p>
              </router-link>
            </div>
            <div>
              <router-link class="d-flex align-items-center gap-10 text-white"
                ><img src="/public/images/user.svg" alt="user" />
                <p class="mb-0">
                  Login <br />
                  My Account
                </p>
              </router-link>
            </div>
            <div>
              <router-link class="d-flex align-items-center gap-10 text-white"
                ><img src="/public/images/cart.svg" alt="cart" />
                <div class="d-flex flex-column gap-10">
                  <span class="badge bg-white text-dark">0</span>
                  <p class="mb-0">$0.00</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
