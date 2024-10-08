<template>
  <Metadata
    title="BuyZone | Signup"
    description="Signup to the zone"
    canonicalSuffix="account/signup"
  />
  <Breadcrumb title="Sign Up" />
  <LoadingScreen :msg="'Brewing up something amazing...'" v-if="loading" />
  <div v-else class="signup-wrapper home-wrapper-2 py-5">
    <div class="row">
      <div class="col-12">
        <div class="auth-card">
          <h3 class="text-center mb-3">Create Account</h3>

          <form
            action=""
            class="d-flex flex-column gap-15"
            @submit.prevent="handleSubmit"
          >
            <div>
              <input
                type="first name"
                class="form-control"
                name="first name"
                placeholder="First name"
                autofocus
                v-model="firstname"
              />
            </div>
            <div>
              <input
                type="last name"
                class="form-control"
                name="last name"
                placeholder="Last name"
                autofocus
                v-model="lastname"
              />
            </div>
            <div>
              <input
                type="number"
                class="form-control"
                name="mobile"
                placeholder="Mobile"
                autofocus
                v-model="mobile"
              />
            </div>
            <div>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                autofocus
                v-model="email"
                @blur="validateEmail"
              />
              <p v-if="emailError" class="text-danger">{{ emailError }}</p>
            </div>
            <div>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                autofocus
                @blur="validatePassword"
                v-model="password"
              />
              <p v-if="passwordError" class="text-danger">
                {{ passwordError }}
              </p>
            </div>
            <div
              class="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center"
            >
              <button
                @click="handleSubmit"
                class="button border-0"
                type="submit"
                :disabled="!isFormValid"
                :class="{ 'opacity-50 pointer-events-none': !isFormValid }"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import router from "@/router";
import { computed, onMounted, ref } from "vue";
import Metadata from "@/components/metadata.vue";
import { useUserStore } from "@/store/useUserStore";
import Breadcrumb from "@/components/breadcrumb.vue";
import LoadingScreen from "@/components/loadingScreen.vue";
import { useNotifications } from "@/composable/useGlobalAlert";

const { notify } = useNotifications();
const userStore = useUserStore();

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const mobile = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const loading = ref(false);

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
    firstname.value &&
    lastname.value &&
    email.value &&
    password.value &&
    !emailError.value &&
    !passwordError.value
  );
});

// admin
const handleAdmin = async () => {
  loading.value = true;
  if (!isFormValid.value) return notify("Please fill all details", "warning");
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register-admin`,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        mobile: mobile.value,
        password: password.value,
      }
    );

    if (response.data) {
      userStore.setUser(response.data);

      // Set the Authorization header for all future requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      notify("Welcome!", "success");
      router.push("/layout");
    }
  } catch (error) {
    notify("Error creating admin user", "error");
  } finally {
    loading.value = false;
  }
};

//user
const handleUser = async () => {
  loading.value = true;
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        mobile: mobile.value,
        password: password.value,
      }
    );

    if (response.data) {
      userStore.setUser(response.data);

      // Set the Authorization header for all future requests
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      notify("Welcome!", "success");
      router.push("/layout");
    }
  } catch (error) {
    notify("Error setting up user", "error");
  } finally {
    loading.value = false;
  }
};

const role = ref(null);

onMounted(async () => {
  const query = router.currentRoute.value.query;
  role.value = query.role;
});

const handleSubmit = async () => {
  if (role.value === "admin") {
    await handleAdmin();
  } else {
    await handleUser();
  }
};
</script>

<style lang="scss" scoped></style>
