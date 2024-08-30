<template>
  <header class="header-top-strip py-3">
    <div class="container-xxl">
      <div class="row">
        <div class="col-6 form-control-sm">
          <p class="text-white mb-0">Free Shipping Over $ 100 & Free Returns</p>
        </div>
        <div class="col-6 form-control-sm">
          <div class="d-flex justify-content-end">
            <!-- line -->
            <p class="text-white mb-0 me-2">
              Hotline:
              <a class="text-white" href="(555) 1234 567890"
                >+00 123 456 7890</a
              >
            </p>
            <p class="text-white mb-0">|</p>
            <!-- sell -->
            <router-link
              to="/account/signup?role=admin"
              class="text-white mb-0 me-2 ms-2"
              >Sell On BuyZone</router-link
            >
            <p class="text-white mb-0">|</p>

            <div class="div">
              <div class="btn-group" v-if="isLoggedIn">
                <div
                  class="d-flex align-items-center gap-10 text-white ms-2 mb-0 logout dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hello {{ user?.firstname }},
                </div>
                <ul class="dropdown-menu">
                  <li
                    class="dropdown-menu-item"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                  >
                    <a
                      href="https://buyzone-demo.netlify.app/"
                      target="_blank"
                      class="d-flex gap-3 align-items-center text-decoration-none text-secondary text-center"
                      :class="{ hovered: hover }"
                    >
                      <i class="fas fa-external-link-alt"></i>
                      Admin Dashboard
                    </a>
                  </li>

                  <li
                    class="dropdown-menu-item"
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                  >
                    <div
                      data-test="logout"
                      @click="handleLogout"
                      class="d-flex gap-3 align-items-center text-decoration-none text-secondary"
                      :class="{ hovered: hover }"
                    >
                      <i class="fa-solid fa-power-off"></i>
                      <span>Logout</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div v-else @click="handleLogin">
                <span
                  class="d-flex align-items-center gap-10 text-white ms-2 mb-0 logout"
                  >Login <br
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header class="header-upper py-3">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-2">
          <h2>
            <router-link class="text-white" to="/layout">BuyZone</router-link>
          </h2>
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
        <div class="col-5 form-control-sm">
          <div
            class="header-upper-links d-flex align-items-center justify-content-between"
          >
            <!--  -->
            <div>
              <div class="d-flex align-items-center gap-10 text-white">
                <p class="mb-0">
                  <br />
                </p>
              </div>
            </div>
            <div>
              <div class="d-flex align-items-center gap-10 text-white">
                <p class="mb-0">
                  <br />
                </p>
              </div>
            </div>
            <div>
              <div class="d-flex align-items-center gap-10 text-white">
                <p class="mb-0">
                  <br />
                </p>
              </div>
            </div>
            <!--  -->
            <div>
              <router-link
                to="/layout/compare"
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
                to="/layout/wishlist"
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
                to="/layout/cart"
                class="d-flex align-items-center gap-10 text-white"
                ><img src="/images/cart.svg" alt="cart" />
                <div class="d-flex flex-column gap-10">
                  <span class="badge bg-white text-dark">{{
                    cartStore.cartItemCount
                  }}</span>
                  <p class="mb-0">$ {{ cartStore.cartTotal.toFixed(2) }}</p>
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
                <router-link class="" to="/layout">Home</router-link>
                <router-link class="" to="/layout/store">Store</router-link>
                <router-link class="" to="/layout/blogs">Blogs</router-link>
                <router-link class="" to="/layout/contact">Contact</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNotifications } from "@/composable/useGlobalAlert";
import router from "@/router";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/useUserStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const cartStore = useCartStore();

const { notify } = useNotifications();

const userStore = useUserStore();

userStore.loadUserFromStorage();

const { user } = storeToRefs(userStore);

const isLoggedIn = computed(() => !!user.value);

const handleLogout = async () => {
  try {
    userStore.clearUser();

    router.push("/");
    notify("You have been logged out of your account.!", "success");
  } catch (error) {
    notify("Logout failed. Please try again.", "error");
  }
};
const handleLogin = async () => {
  router.push("/");
};
</script>

<style scoped>
.logout {
  cursor: pointer;
}

li {
  font-size: 12px;
  padding: 8px;
  cursor: pointer;
}

.dropdown-menu-item:hover,
.dropdown-menu-item.hovered {
  background-color: #f5f5f5;
  cursor: pointer;
}

.dropdown-menu-item:hover a,
.dropdown-menu-item.hovered a {
  color: #007bff;
}

.dropdown-menu-item:hover i,
.dropdown-menu-item.hovered i {
  color: #007bff;
}
</style>
