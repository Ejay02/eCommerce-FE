<template>
  <Metadata
    title="BuyZone | Reset-password"
    description="Update your account security by setting a new password."
    canonicalSuffix="/account/reset-password"
  />
  <Breadcrumb title="Forgot Password" />
  <div class="reset-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="auth-card">
            <h3 class="text-center mb-3">Reset Your Password</h3>
            <h6 class="text-center mb-3 mt-2">
              We will send you an email to reset your password
            </h6>
            <form action="" class="d-flex flex-column gap-15">
              <div class="password-field">
                <!-- end now -->
                <!-- type="password" -->
                <input
                  :type="passwordFieldType"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  autofocus
                  v-model="password"
                />
                <span
                  class="toggle-password"
                  @click="togglePasswordVisibility('password')"
                >
                  <i
                    :class="
                      passwordVisible === 'visible'
                        ? 'fa-solid fa-eye-slash'
                        : 'fa-solid fa-eye'
                    "
                  ></i>
                </span>
              </div>
              <div class="password-field mt-1">
                <!-- type="password" -->
                <input
                  :type="confirmPasswordFieldType"
                  class="form-control"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  autofocus
                  v-model="confirmPassword"
                />

                <span
                  class="toggle-password"
                  @click="togglePasswordVisibility('confirmPassword')"
                >
                  <i
                    :class="
                      confirmPasswordVisible
                        ? 'fa-solid fa-eye-slash'
                        : 'fa-solid fa-eye'
                    "
                  ></i>
                </span>
              </div>

              <div
                class="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center"
              >
                <button class="button border-0" type="submit">Ok</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const password = ref("");
const confirmPassword = ref("");
const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);

const passwordFieldType = computed(() =>
  passwordVisible.value ? "text" : "password"
);

const confirmPasswordFieldType = computed(() =>
  confirmPasswordVisible.value ? "text" : "password"
);

const togglePasswordVisibility = (field) => {
  if (field === "password") {
    passwordVisible.value = !passwordVisible.value;
  } else if (field === "confirmPassword") {
    confirmPasswordVisible.value = !confirmPasswordVisible.value;
  }
};
</script>

<style scoped>
.password-field {
  position: relative;
}
.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
