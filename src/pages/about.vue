<template>
  <Metadata
    title="BuyZone | About"
    description="Learn more about BuyZone, our mission, values, and the team dedicated to providing the best shopping experience."
    canonicalSuffix="layout/about"
  />
  <Breadcrumb title="About" />

  <section class="about-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="about">
            <h1 class="text-center">About BuyZone</h1>
            <p>
              Welcome to BuyZone, your number one source for all things
              shopping. We're dedicated to giving you the very best of products,
              with a focus on quality, customer service, and uniqueness.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a seamless and enjoyable shopping
              experience for our customers. We aim to offer a wide variety of
              products that cater to all your needs, ensuring quality and
              affordability.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Customer Satisfaction:</strong> We prioritize our
                customers' satisfaction by offering exceptional service and
                high-quality products.
              </li>
              <li>
                <strong>Integrity:</strong> We conduct our business with honesty
                and transparency, building trust with our customers and
                partners.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly seek new and better
                ways to improve our products and services.
              </li>
            </ul>

            <h2>Meet Our Team</h2>
            <p>
              Our dedicated team is passionate about providing the best shopping
              experience. We work hard to bring you the latest products and
              trends.
            </p>
            <ul>
              <li><strong>Sarah Doe:</strong> Founder & CEO</li>
              <li><strong>John Smith:</strong> Chief Marketing Officer</li>
              <li><strong>Emily Johnson:</strong> Head of Customer Service</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions or comments, please don't hesitate to
              contact us. We're here to help you with anything you need.
            </p>
            <p>
              Email:
              <a href="mailto:support@buyzone.com">support@buyzone.com</a>
            </p>
            <p>Phone: (123) 456-7890</p>
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
</script>

<style scoped>
.about {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* .about h1,
.about h2 {
  margin-bottom: 1rem;
} */

/* .about ul {
  list-style-type: none;
  padding: 0;
} */

.about ul li {
  margin-bottom: 0.5rem;
}
</style>
