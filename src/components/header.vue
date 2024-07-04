<template>
  <header class="header-top-strip py-3">
    <div class="container-xxl">
      <div class="row">
        <div class="col-6">
          <p class="text-white mb-0">Free Shipping Over $ 100 & Free Returns</p>
        </div>
        <div class="col-6">
          <p class="text-end text-white mb-0">
            Hotline:
            <a class="text-white" href="(555) 1234 567890">+00 123 456 7890</a>
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
            <!--  v-model.trim="msg"  -->
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
              <router-link
                to="/compare"
                class="d-flex align-items-center gap-10 text-white"
                ><img src="/images/compare.svg" alt="compare" />
                <p class="mb-0">
                  Compare <br />
                  Products
                </p>
              </router-link>
            </div>
            <div>
              <router-link
                to="/wishlist"
                class="d-flex align-items-center gap-10 text-white"
                ><img src="/images/wishlist.svg" alt="wishlist" />
                <p class="mb-0">
                  Favorite <br />
                  Wishlist
                </p>
              </router-link>
            </div>
            <div>
              <router-link
                to="/account/login"
                class="d-flex align-items-center gap-10 text-white"
                ><img src="/images/user.svg" alt="user" />
                <p class="mb-0">
                  Login <br />
                  My Account
                </p>
              </router-link>
            </div>
            <div>
              <router-link
                to="/cart"
                class="d-flex align-items-center gap-10 text-white"
                ><img src="/images/cart.svg" alt="cart" />
                <div class="d-flex flex-column gap-10">
                  <span class="badge bg-white text-dark">0</span>
                  <p class="mb-0">$ 0.00</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header class="header-bottom py-3">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="menu-bottom d-flex align-items-center gap-30">
            <div class="">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/images/menu.svg" alt="menu" />
                  <span class="me-5 d-inline-block"> Shop categories </span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <router-link to="" class="dropdown-item text-white" href="#"
                      >Action</router-link
                    >
                  </li>
                  <li>
                    <router-link to="" class="dropdown-item text-white" href="#"
                      >Another action</router-link
                    >
                  </li>
                  <li>
                    <router-link to="" class="dropdown-item text-white" href="#"
                      >Something else here</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="menu-links">
              <div class="d-flex align-items-center gap-15">
                <router-link class="" to="/">Home</router-link>
                <router-link class="" to="/store">Store</router-link>
                <router-link class="" to="/blogs">Blogs</router-link>
                <router-link class="" to="/contact">Contact</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
