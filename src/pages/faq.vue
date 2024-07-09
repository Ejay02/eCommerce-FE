<template>
  <Metadata
    title="BuyZone | FAQs"
    description="Find answers to the most commonly asked questions about our products and services."
    canonicalSuffix="/faq"
  />
  <Breadcrumb title="FAQs" />

  <section class="faq-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="faq">
            <h2 class="text-center">Frequently Asked Questions</h2>
            <div class="faq-item" v-for="(item, index) in faqs" :key="index">
              <h4 class="faq-question">{{ item.question }}</h4>
              <p class="faq-answer">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <Disclaimer />
    </div>
  </section>
</template>
<script setup>
import Metadata from "@/components/metadata.vue";
import Disclaimer from "@/components/disclaimer.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import { ref } from "vue";

const faqs = ref([
  {
    question: "What is BuyZone?",
    answer:
      "BuyZone is an online marketplace offering a wide range of products at competitive prices.",
  },
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our product catalog, add items to your cart, and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards, PayPal, and BuyZone gift cards.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and checking the 'Order History' section.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most items. Please visit our Returns page for more details.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "You can contact our customer service team through the Contact Us page or by calling our support hotline.",
  },
]);
</script>

<style scoped>
.faq {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  font-weight: bold;
  margin-bottom: 10px;
}

.faq-answer {
  margin-bottom: 0;
  color: #777;
}
</style>
