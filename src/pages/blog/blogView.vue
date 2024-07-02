<template>
  <Metadata
    :title="`BuyZone | blog | ${blog.title}`"
    :description="blog.description"
    :canonicalSuffix="`blog/${blog.id}`"
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
            <h3 class="title">{{ blog.title }}</h3>
            <p class="date">{{ blog.date }}</p>
            <img
              :src="blog.image"
              :alt="blog.title"
              class="img-fluid blog-image my-4 w-100"
            />
            <p class="desc">{{ blog.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

const blogs = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    date: "1 March, 2024",
    title: "Launching Our New eCommerce Website",
    description:
      "Explore the exciting features of our brand-new eCommerce platform. Enjoy a seamless shopping experience with ...",
    link: "/blog-1",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    date: "15 April, 2024",
    title: "Streamline Your Checkout Process",
    description:
      "Simplify your checkout process to reduce cart abandonment. Improve customer satisfaction and increase sales with our tips.",
    //
    link: "/blog-2",
  },
  {
    id: 3,
    image: "/images/blog-3.jpg",
    date: "10 May, 2024",
    title: "Top eCommerce Marketing Tips",
    description:
      "Learn the best marketing tactics for your eCommerce business. Boost your reach and engagement with our expert advice.",
    link: "/blog-3",
  },
  {
    id: 4,
    image: "/images/blog-4.jpg",
    date: "18 June, 2024",
    title: "Creating Engaging Product Listings",
    description:
      "Craft compelling product listings that convert. Enhance your descriptions and images to attract and retain customers.",
    link: "/blog-4",
  },
];

const route = useRoute();
const blogId = computed(() => route.params.id);
const blog = computed(() => blogs.find((b) => b.id === parseInt(blogId.value)));
</script>

<style scoped>
.blog-image {
  /* width: 100px; */
  height: 200px;
  border-radius: 5px;
  display: block;
}
</style>
