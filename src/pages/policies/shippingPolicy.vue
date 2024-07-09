<template>
  <Metadata
    title="BuyZone | Shipping Policy"
    description="Discover BuyZone's shipping policy, including delivery options, shipping times, and handling procedures."
    canonicalSuffix="/shipping-policy"
  />
  <Breadcrumb title="Shipping" />
  <section class="policy-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <h1 class="text-center">Shipping Policy</h1>
            <p>
              At BuyZone, we strive to provide efficient and reliable shipping
              services to our customers. Please read our shipping policy to
              understand delivery options, shipping times, and handling
              procedures.
            </p>

            <h2>Delivery Options</h2>
            <p>
              We offer standard and expedited shipping options for our products.
            </p>

            <h2>Shipping Times</h2>
            <p>
              Shipping times vary depending on the destination and selected
              shipping method. Estimated delivery times will be provided during
              checkout.
            </p>

            <h2>Handling Procedures</h2>
            <p>
              All orders are processed and shipped within 1-2 business days,
              excluding weekends and holidays. Once shipped, you will receive a
              confirmation email with tracking information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our shipping policy, please
              <router-link to="/contact">contact us</router-link>.
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


</style>
