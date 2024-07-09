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
            <!-- <p class="desc">{{ blog.post }}</p> -->
            <div class="desc">
              <p v-for="(paragraph, index) in blog.post" :key="index">
                <template v-if="typeof paragraph === 'string'">{{
                  paragraph
                }}</template>
                <template v-else-if="paragraph.type === 'list'">
                  <ul>
                    <li
                      v-for="(item, itemIndex) in paragraph.items"
                      :key="itemIndex"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </template>
              </p>
            </div>
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

    post: [
      "Today marks an exciting milestone for our company as we officially launch our new eCommerce website! This platform represents a significant step forward in our commitment to providing you, our valued customers, with the best possible online shopping experience.",
      "Our new website combines sleek design with powerful functionality. You'll find an intuitive interface that makes browsing and purchasing easier than ever before. We've expanded our product catalog, offering a wider range of items to choose from, each accompanied by detailed descriptions and high-quality images.",
      "One of the standout features is our improved search functionality. Whether you're looking for a specific product or just exploring our offerings, you'll find what you need in seconds. We've also streamlined the checkout process, implementing state-of-the-art security measures to ensure your transactions are safe and secure.",
      "For our regular shoppers, we've introduced customer accounts. Now you can create a personalized profile to track your orders, save your favorites, and enjoy a more tailored shopping experience.",
      "We built this new platform with you in mind. Every feature, every improvement is the result of careful consideration of your needs and preferences. As we move forward, we'll continue to refine and enhance our site based on your feedback.",
      "We invite you to explore our new website and experience the difference for yourself. Whether you're shopping on your desktop, tablet, or smartphone, you'll enjoy a seamless experience across all devices.",
      "Thank you for your continued support. We're excited about this new chapter and look forward to serving you better than ever through our new eCommerce platform.",
      "Happy shopping!",
    ],
    link: "/blog-1",
  },
  {
    id: 2,
    image: "/images/blog-2.jpg",
    date: "15 April, 2024",
    title: "Streamline Your Checkout Process",
    description:
      "Simplify your checkout process to reduce cart abandonment. Improve customer satisfaction and increase sales with our tips.",
    post: [
      "A smooth checkout process is crucial for any eCommerce business. It's the final step in converting browsing customers into paying ones, and a clunky or confusing checkout can lead to abandoned carts and lost sales. Here are some key strategies to streamline your checkout process:",
      {
        type: "list",
        items: [
          "Minimize form fields: Only ask for essential information. The fewer fields customers have to fill out, the faster they can complete their purchase.",
          "Offer guest checkout: Don't force customers to create an account. Many shoppers prefer the speed of guest checkout.",
          "Provide multiple payment options: Include popular methods like credit cards, PayPal, and digital wallets to cater to different preferences.",
          "Use progress indicators: Show customers how far along they are in the checkout process to reduce uncertainty and frustration.",
          "Implement autofill: Use browser autofill capabilities to speed up form completion for returning customers.",
          "Optimize for mobile: Ensure your checkout process works seamlessly on smartphones and tablets.",
          "Display security badges: Showcase trust signals like SSL certificates to reassure customers about the safety of their information.",
          "Offer real-time validation: Provide immediate feedback on form errors to help customers correct mistakes quickly.",
          "Include a summary: Show a clear order summary throughout the checkout process so customers can review their purchases.",
          "Provide clear calls-to-action: Use prominent, descriptive buttons to guide customers through each step.",
        ],
      },
      "By implementing these strategies, you can create a faster, more user-friendly checkout process that boosts conversions and customer satisfaction. Remember, the goal is to make purchasing as effortless as possible for your customers.",
    ],
    link: "/blog-2",
  },

  {
    id: 3,
    image: "/images/blog-3.jpg",
    date: "10 May, 2024",
    title: "Top eCommerce Marketing Tips",
    description:
      "Learn the best marketing tactics for your eCommerce business. Boost your reach and engagement with our expert advice.",
    post: [
      "In the competitive world of eCommerce, effective marketing can make or break your business. Here are some top tips to boost your online store's visibility and sales:",
      {
        type: "list",
        items: [
          "Optimize for SEO: Ensure your product pages and content are optimized for relevant keywords to improve search engine rankings.",
          "Leverage social media: Use platforms like Instagram and Facebook to showcase products and engage with customers.",
          "Implement email marketing: Build a mailing list and send targeted campaigns to nurture leads and encourage repeat purchases.",
          "Offer personalized recommendations: Use data to suggest products based on browsing history and past purchases.",
          "Run retargeting ads: Re-engage potential customers who have shown interest but haven't made a purchase.",
          "Create valuable content: Develop blog posts, videos, or guides that provide value to your target audience and showcase your expertise.",
          "Encourage customer reviews: Positive reviews build trust and can significantly influence purchasing decisions.",
          "Optimize for mobile: Ensure your site is mobile-friendly, as a growing number of shoppers use smartphones for online purchases.",
          "Use influencer partnerships: Collaborate with influencers in your niche to reach new audiences and build credibility.",
          "Offer loyalty programs: Reward repeat customers to encourage brand loyalty and increase customer lifetime value.",
        ],
      },
      "By implementing these strategies, you can enhance your eCommerce marketing efforts and drive more traffic and sales to your online store. Remember, successful marketing is about continuously testing, measuring, and refining your approach to find what works best for your unique business and audience.",
    ],
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
    post: [
      "Compelling product listings are crucial for attracting customers and driving sales in eCommerce. Here are key strategies to create engaging product listings:",
      {
        type: "list",
        items: [
          "Write clear, benefit-focused titles: Highlight the product's main features and benefits in the title.",
          "Use high-quality images: Showcase your product from multiple angles with professional, well-lit photos.",
          "Craft detailed descriptions: Provide comprehensive information about the product's features, materials, and uses.",
          "Highlight unique selling points: Clearly communicate what sets your product apart from competitors.",
          "Include size and specifications: Offer precise measurements and technical details to help customers make informed decisions.",
          "Incorporate customer reviews: Display authentic feedback to build trust and provide social proof.",
          "Optimize for search engines: Use relevant keywords naturally throughout your listing to improve visibility.",
          "Add videos when possible: Short product videos can significantly boost engagement and conversions.",
          "Use bullet points: Break down key features and benefits for easy scanning.",
          "Be honest about limitations: Clearly state any potential drawbacks or limitations to set accurate expectations.",
          "Include a strong call-to-action: Guide customers on what to do next, whether it's 'Add to Cart' or 'Learn More'.",
          "Keep mobile users in mind: Ensure your listings are easy to read and navigate on smaller screens.",
        ],
      },
      "Remember, the goal is to provide all the information a customer needs to make a purchase decision while making your listing visually appealing and easy to digest. Regularly update and refine your listings based on customer feedback and performance metrics for best results.",
    ],
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
