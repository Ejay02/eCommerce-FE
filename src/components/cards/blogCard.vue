<template>
  <div class="row">
    <div
      v-for="blog in limitedBlogs"
      :key="blog._id"
      :class="[isBigCard ? 'col-6' : 'col-3', 'mb-4']"
    >
      <div class="blog-card">
        <div class="card-image">
          <img :src="blog.image" :alt="blog.title" class="img-fluid" />
        </div>
        <div class="blog-content">
          <p class="date">{{ blog.date }}</p>
          <h5 class="title text-truncate">{{ blog.title }}</h5>

          <div
            class="desc"
            style="color: gray; font-size: small"
            v-html="truncateDescription(markedDescription(blog?.description))"
          ></div>

          <router-link :to="`/blog/${blog._id}`" class="butn text-center"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from "@/store/useBlogStore";
import { computed, onMounted } from "vue";
import { marked } from "marked";
import { defineProps } from "vue";

const { isBigCard, blogCount } = defineProps({
  isBigCard: {
    type: Boolean,
    default: false,
  },
  blogCount: {
    type: Number,
    default: Infinity,
  },
});

const blogStore = useBlogStore();

const truncateDescription = (description) => {
  // Remove excess whitespace
  const cleanedDescription = description.replace(/\s+/g, " ").trim();
  // Split the cleaned description into words
  const words = cleanedDescription.split(" ");
  // Check if the number of words exceeds 80
  return words.length > 5
    ? words.slice(0, 5).join(" ") + "..."
    : cleanedDescription;
};

const markedDescription = (description) => {
  return marked(description);
};

const limitedBlogs = computed(() => {
  return blogStore.blogs.slice(0, blogCount);
});

onMounted(async () => {
  await blogStore.fetchBlogs();
});
</script>

<style scoped>
.blog-card {
  height: 350px; /* Set a fixed height for the card */
}

.card-image {
  height: 150px; /* Set a fixed height for the image container */
  overflow: hidden; /* Hide excess image parts */
}

.card-image img {
  width: 100%; /* Make the image responsive */
  height: 100%; /* Make the image responsive */
  object-fit: cover; /* Keep the image aspect ratio */
}

.blog-content {
  padding: 20px;
}

.title {
  font-size: 18px; /* Set a fixed font size for the title */
  height: 50px; /* Set a fixed height for the title */
  overflow: hidden; /* Hide excess title parts */
}

.desc {
  height: 100px; /* Set a fixed height for the description */
  overflow: hidden; /* Hide excess description parts */
}

.blog-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.desc {
  height: 100px;
  overflow: hidden;
}

.butn {
  margin-top: auto;
  background-color: var(--color-232f3e);
  color: white;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}
.butn:hover {
  background-color: var(--color-febd69);
  color: #131921;
}
</style>
