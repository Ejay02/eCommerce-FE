<template>
  <div></div>
</template>

<script setup>
import { useHead } from "unhead";
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  canonicalSuffix: {
    type: String,
    required: true,
  },
});

const baseUrl = "http://localhost:5173";
const canonicalUrl = `${baseUrl}/${props.canonicalSuffix}`;

useHead({
  title: props.title,
  meta: [
    { name: "description", content: props.description },
    { property: "og:title", content: props.title },
  ],
  link: [{ rel: "canonical", href: canonicalUrl }],
});
</script>

<style lang="scss" scoped></style>
