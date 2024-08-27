<template>
  <Metadata
    :title="`BuyZone | blog | ${blog?.title}`"
    :description="blog?.description"
    :canonicalSuffix="`blog/${blog._id}`"
  />
  <Breadcrumb :title="blog.title" />
  <div class="blog-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-3">
          <div class="filter-card mb-3">
            <h3 class="filter-title">Find By Categories</h3>
            <div class="ps-0">
              <ul class="d-flex flex-column">
                <router-link to="/" style="color: gray; text-decoration: none"
                  >Home</router-link
                >
                <router-link
                  to="/store"
                  style="color: gray; text-decoration: none"
                  >Store</router-link
                >
                <router-link
                  to="/blogs"
                  style="color: gray; text-decoration: none"
                  >Blogs</router-link
                >
                <router-link
                  to="/contact"
                  style="color: gray; text-decoration: none"
                  >Contact</router-link
                >
              </ul>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="single-blog-card">
            <router-link to="/blogs" class="d-flex align-items-center gap-10"
              ><i class="fa-solid fa-arrow-left"></i> Back to blogs</router-link
            >
            <h3 class="title">{{ blog?.title }}</h3>
            <div class="divider my-2"></div>

            <span class="font-monospace font mb-0 p-0"
              >{{ blog?.author }} | {{ readingTimeEstimate.text }}
            </span>
            <p class="date font-monospace font mb-0">
              {{
                new Date(blog?.createdAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </p>
            <div class="divider my-2"></div>
            <span class="me-4 fontz"
              ><i class="fa-regular fa-eye"></i>{{ blog?.numViews }}</span
            >
            <span class="fontz"
              ><i class="fa-regular fa-thumbs-up"></i>
              {{ blog?.likes?.length ?? 0 }}</span
            >
            <div class="divider my-4"></div>

            <img
              :src="blog?.image"
              :alt="blog?.title"
              class="img-fluid blog-image my-4 w-100"
            />

            <div class="divider my-4"></div>
            <div class="desc" v-html="markdownDesc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { marked } from "marked";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import { readingTime } from "reading-time-estimator";
import { useNotifications } from "@/composable/useGlobalAlert";

const { notify } = useNotifications();

const route = useRoute();
const blogId = computed(() => route.params.id);
const blog = ref({});
const markdownDesc = ref("");
const readingTimeEstimate = ref({});

const fetchBlog = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/blog/${blogId.value}`
    );

    blog.value = res.data;
    markdownDesc.value = marked(blog?.value?.description);
    readingTimeEstimate.value = readingTime(blog.value.description);
  } catch (error) {
    notify("Error fetching blog", "error");
  }
};

onMounted(() => {
  fetchBlog();
});
</script>

<style scoped>
.single-blog-card {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.blog-image {
  /* width: 100px; */
  height: 200px;
  border-radius: 5px;
  display: block;
}

.font {
  font-size: 12px;
  color: darkgray;
}
.fontz {
  font-size: 14px;
  color: dimgrey;
}

.divider {
  height: 1px;
  background-color: #f0f0f0;
}
</style>
