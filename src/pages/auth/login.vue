<template>
  <Metadata
    title="BuyZone/account/login"
    description="Login to the zone"
    canonicalSuffix="/account/login"
  />
  <Breadcrumb title="Login" />
  <div class="login-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="auth-card">
            <h3 class="text-center mb-3">Login</h3>
            <form action="" class="d-flex flex-column gap-15">
              <div>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div class="mt-1">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div class="">
                <router-link to="/account/forgot-password"
                  >Forgot your password?</router-link
                >
                <div
                  class="mt-3 d-flex justify-content-center gap-15 align-items-center"
                >
                  <button class="button border-0">Login</button>
                  <router-link to="/account/signup" class="button signup"
                    >Sign Up</router-link
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
</script>

<style lang="scss" scoped></style>
