import axios from "axios";
import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { useNotifications } from "@/composable/useGlobalAlert";

const { notify } = useNotifications();

export const useBlogStore = defineStore("blog", () => {
  const state = reactive({
    blogs: [],
    loading: false,
    totalPages: 0,
    currentPage: 1,
    total: 0,
  });

  const fetchBlogs = async (params = {}) => {
    state.loading = true;
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/blog`,
        { params }
      );

      state.blogs = response?.data?.blog; // Update with paginated data
      state.total = response.data?.total;
      state.currentPage = params.page || 1; // Update current page
      state.totalPages = Math.ceil(state.total / (params.limit || 10)); // Update total pages
    } catch (error) {
      notify("Error fetching blogs", "error");
    } finally {
      state.loading = false;
    }
  };

  const deleteBlog = (id) => {
    state.blogs = state.blogs.filter((blog) => blog._id !== id);
  };

  return { ...toRefs(state), fetchBlogs, deleteBlog };
});
