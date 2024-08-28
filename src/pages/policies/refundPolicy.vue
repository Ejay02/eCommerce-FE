<template>
  <Metadata
    title="BuyZone | Refund Policy"
    description="Learn about BuyZone's refund policy, including eligibility, process, and timeframes for returns and refunds."
    canonicalSuffix="/refund-policy"
  />
  <Breadcrumb title="Refund" />
  <section class="policy-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <h1 class="text-center">Refund Policy</h1>
            <p>
              At BuyZone, we want you to be completely satisfied with your
              purchase. If you are not satisfied with the product, you can
              request a refund within 30 days of the purchase date. Please read
              our refund policy carefully to understand the conditions and
              process.
            </p>

            <h2>Eligibility for Refunds</h2>
            <ul>
              <li>Products must be returned within 30 days of purchase.</li>
              <li>
                Products must be in their original packaging and in unused
                condition.
              </li>
              <li>Proof of purchase is required for all refunds.</li>
            </ul>

            <h2>Non-Refundable Items</h2>
            <ul>
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Personalized items</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <ol>
              <li>
                <router-link to="/layout/contact">Contact</router-link> our customer
                service team at with your order number and reason for the
                return.
              </li>
              <li>
                Our team will review your request and provide you with a Return
                Merchandise Authorization (RMA) number.
              </li>
              <li>
                Ship the product back to us using the provided RMA number.
                Ensure the product is securely packaged to prevent damage during
                shipping.
              </li>
            </ol>

            <h2>Processing Time</h2>
            <p>
              Once we receive the returned product, our team will inspect it and
              process the refund within 7-10 business days. The refund will be
              issued to the original payment method used for the purchase.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please
              <router-link to="/layout/contact">contact us</router-link>.
            </p>
          </div>

          <Disclaimer />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Disclaimer from "@/components/disclaimer.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
</script>

<style scoped>
.policy {
  line-height: 1.6;
}
.policy h1,
.policy h2 {
  margin-bottom: 1rem;
}
.policy ul,
.policy ol {
  margin-left: 1.5rem;
}
.policy ul li,
.policy ol li {
  margin-bottom: 0.5rem;
}
</style>
