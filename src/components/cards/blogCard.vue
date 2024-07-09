<template>
  <div class="row">
    <div
      v-for="blog in blogs"
      :key="blog.id"
      :class="[isBigCard ? 'col-6' : 'col-3', 'mb-4']"
    >
      <div class="blog-card">
        <div class="card-image">
          <img :src="blog.image" :alt="blog.title" class="img-fluid" />
        </div>
        <div class="blog-content">
          <p class="date">{{ blog.date }}</p>
          <h5 class="title text-truncate">{{ blog.title }}</h5>
          <p class="desc" style="color: gray; font-size: small">
            {{ blog.description }}
          </p>

          <router-link :to="`/blog/${blog.id}`" class="button"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isBigCard: {
    type: Boolean,
    default: false,
  },
});

const blogs = [
  {
    id: 1,
    image: "/images/blog-1.jpg",
    date: "1 March, 2024",
    title: "Launching Our New eCommerce Website",
    description:
      "Explore the exciting features of our brand-new eCommerce platform. Enjoy a seamless shopping experience with ...",
    // with fast delivery, secure payments, and exceptional customer service
    link: "/blog-1",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    date: "15 April, 2024",
    title: "Streamline Your Checkout Process",
    description:
      "Simplify your checkout process to reduce cart abandonment. Improve customer satisfaction and ...",
    //increase sales  with our tips.
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
</script>

<style scoped></style>
