<template>
  <Metadata
    title="BuyZone | Login"
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
            <form
              action=""
              class="d-flex flex-column gap-15"
              @submit.prevent="handleLogin"
            >
              <div>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  @blur="validateEmail"
                  v-model="email"
                />
                <p v-if="emailError" class="text-danger">{{ emailError }}</p>
              </div>
              <div class="mt-1">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  @blur="validatePassword"
                  v-model="password"
                />
                <p v-if="passwordError" class="text-danger">
                  {{ passwordError }}
                </p>
              </div>
              <div class="">
                <router-link to="/account/forgot-password" class="fp"
                  >Forgot password?</router-link
                >
                <div
                  class="mt-3 d-flex justify-content-center gap-15 align-items-center"
                >
                  <button
                    class="button border-0"
                    type="submit"
                    :disabled="!isFormValid"
                    @click="handleLogin"
                  >
                    Login
                  </button>
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
import axios from "axios";
import router from "@/router";
import { ref, computed } from "vue";
import Metadata from "@/components/metadata.vue";
import { useUserStore } from "@/store/useUserStore";
import Breadcrumb from "@/components/breadcrumb.vue";
import { useNotifications } from "@/composable/useGlobalAlert";

const { notify } = useNotifications();

const email = ref("");
const password = ref("");

const emailError = ref("");
const passwordError = ref("");

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailPattern.test(email.value)
    ? "Invalid email address"
    : "";
};

const validatePassword = () => {
  passwordError.value =
    password.value.length < 6 ? "Password must be at least 6 characters" : "";
};

const isFormValid = computed(() => {
  return (
    email.value && password.value && !emailError.value && !passwordError.value
  );
});

const handleLogin = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/login`,
      {
        email: email.value,
        password: password.value,
      }
    );

    if (response.data) {
      const userStore = useUserStore();
      userStore.setUser(response.data);

      // Set the Authorization header for all future requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      notify("Login successful!", "success");
      router.push("/");
    }
  } catch (error) {
    notify("Invalid Credentials", "error");
  }
};
</script>

<style scoped>
.fp {
  text-decoration: underline;
  color: blue;
}
</style>
