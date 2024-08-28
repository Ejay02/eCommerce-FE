<template>
  <Metadata
    title="BuyZone | Login"
    description="Login to the zone"
    canonicalSuffix="/"
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
              <!-- pssword -->
              <!-- new -->
              <div class="mt-1">
                <div class="password-field">
                  <input
                    :type="passwordFieldType"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    @blur="validatePassword"
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
      },
      {
        withCredentials: true, // This is important for CORS with credentials
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      const userStore = useUserStore();
      userStore.setUser(response.data);

      // Set the Authorization header for all future requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      notify("Welcome 👋🏽", "success");
      router.push("/layout");
    }
  } catch (error) {
    notify("Invalid Credentials", "error");
  }
};

const passwordVisible = ref(false);

const passwordFieldType = computed(() =>
  passwordVisible.value ? "text" : "password"
);

const togglePasswordVisibility = (field) => {
  if (field === "password") {
    passwordVisible.value = !passwordVisible.value;
  }
};
</script>

<style scoped>
.fp {
  text-decoration: underline;
  color: blue;
}

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

.text-danger{
  font-size: 12px;
}
</style>
