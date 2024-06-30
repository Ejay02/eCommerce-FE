<template>
  <Metadata
    title="BuyZone/account/signup"
    description="Signup to the zone"
    canonicalSuffix="/account/signup"
  />
  <Breadcrumb title="Sign Up" />
  <div class="signup-wrapper home-wrapper-2 py-5">
    <div class="row">
      <div class="col-12">
        <div class="auth-card">
          <h3 class="text-center mb-3">Create Account</h3>

          <form action="" class="d-flex flex-column gap-15">
            <div>
              <input
                type="first name"
                class="form-control"
                name="first name"
                placeholder="First name"
                autofocus
              />
            </div>
            <div>
              <input
                type="last name"
                class="form-control"
                name="last name"
                placeholder="Last name"
                autofocus
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                autofocus
              />
            </div>
            <div>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                autofocus
              />
            </div>

            <div
              class="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center"
            >
              <button class="button border-0" type="submit">Create</button>
            </div>
          </form>
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
