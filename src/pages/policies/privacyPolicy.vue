<template>
  <Metadata
    title="BuyZone | Privacy Policy"
    description="Read BuyZone's privacy policy to understand how we collect, use, and protect your personal information."
    canonicalSuffix="layout/privacy-policy"
  />
  <Breadcrumb title="Privacy Policy" />
  <section class="policy-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <h1 class="text-center">Privacy Policy</h1>

            <h2>1. Introduction</h2>
            <p>
              Welcome to BuyZone. We are committed to protecting your personal
              information and your right to privacy. If you have any questions
              or concerns about our policy, or our practices with regards to
              your personal information, please feel free to
              <router-link to="/layout/contact">contact us</router-link>.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We collect personal information that you provide to us such as
              name, address, contact information, passwords and security data,
              and payment information.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect or receive to communicate
              directly with you, to manage user accounts, and to comply with our
              legal obligations.
            </p>

            <h2>4. Sharing Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws,
              to protect your rights, or to fulfill business obligations.
            </p>

            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable.
            </p>

            <h2>6. Your Privacy Rights</h2>
            <p>
              You have the right to request access to the information we have on
              you, to request correction of your information, and to request
              deletion of your information. To exercise these rights, please
              feel free to
              <router-link to="/layout/contact">contact us</router-link>.
            </p>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal, or regulatory reasons.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, feel free to
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

<style scoped></style>
