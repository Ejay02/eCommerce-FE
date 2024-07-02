<template>
  <Metadata
    title="BuyZone | Forgot-password"
    description="Forgot password? No worries! Reset it in seconds and get back to it!"
    canonicalSuffix="/account/forgot-password"
  />
  <Breadcrumb title="Forgot Password" />
  <div class="reset-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="auth-card">
            <h3 class="text-center mb-3">Forgot Your Password?</h3>
            <h6 class="text-center mb-3 mt-2">
              No worries, We will send you an email to reset your password
            </h6>
            <form action="" class="d-flex flex-column gap-15">
              <div>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  autofocus
                />
              </div>

              <div
                class="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center"
              >
                <button class="button border-0" type="submit">Submit</button>
                <router-link to="/account/login">Cancel</router-link>
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

<style scoped></style>
