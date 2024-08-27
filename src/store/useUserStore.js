import axios from "axios";
import router from "../router";
import { defineStore } from "pinia";
import { useNotifications } from "@/composable/useGlobalAlert";

const { notify } = useNotifications();

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    user: null,
  }),

  actions: {
    setUser(data) {
      // Check if data contains both user information and token
      if (data && data.token && data.id) {
        this.token = data.token; // Assign the token
        this.user = {
          id: data.id,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          mobile: data.mobile,
        }; // Create a user object from the response data
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(this.user));

        // Set the Authorization header when the user is set
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      } else if (data) {
        this.user = {
          ...this.user,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          mobile: data.mobile,
        };
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        notify("Invalid user data:", "error");
      }
    },

    loadUserFromStorage() {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      if (token) {
        this.token = token;
        // Set the Authorization header if the token exists
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        this.token = null;
      }

      if (user) {
        try {
          this.user = JSON.parse(user);
        } catch (error) {
          notify("Failed to parse user data from local storage:", "error");

          this.user = null;
        }
      } else {
        this.user = null;
      }
    },

    clearUser() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // Remove the Authorization header when the user is cleared
      delete axios.defaults.headers.common["Authorization"];

      router.push("/");
    },
  },
});

// Axios interceptor for handling token expiration
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const userStore = useUserStore();
      userStore.clearUser();
    }
    return Promise.reject(error);
  }
);
