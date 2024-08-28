<template>
  <Metadata
    title="BuyZone | Terms of Service"
    description="Review BuyZone's terms of service to understand the rules and regulations for using our website and services."
    canonicalSuffix="/terms-of-service"
  />
  <Breadcrumb title="Terms Of Service" />

  <section class="policy-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="policy">
            <h1>Terms of Service</h1>
            <p>
              Welcome to BuyZone. Please read these terms of service carefully
              before using our website and services.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using BuyZone's website and services, you agree to
              abide by these terms of service and all applicable laws and
              regulations.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              You agree to use BuyZone's services only for lawful purposes and
              in accordance with these terms of service. Prohibited activities
              include, but are not limited to, violating laws, infringing
              intellectual property rights, and interfering with the operation
              of BuyZone's website.
            </p>

            <h2>3. Privacy Policy</h2>
            <p>
              Your use of BuyZone's services is also governed by our
              <a href="/layout/privacy-policy">privacy policy</a>. Please review the
              privacy policy to understand how we collect, use, and protect your
              information.
            </p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>
              BuyZone's services are provided on an "as is" and "as available"
              basis. We do not warrant that our services will be uninterrupted,
              secure, or error-free.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall BuyZone be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              any way connected with the use of our services.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our terms of service, please
              contact us at
              <a href="mailto:support@buyzone.com">support@buyzone.com</a> or
              call us at (123) 456-7890.
            </p>
          </div>

       
          <Disclaimer />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Disclaimer from "@/components/disclaimer.vue";
import Metadata from "@/components/metadata.vue";
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

.note {
  font-style: italic;
  color: #888;
  margin-top: 0.5rem; /* Adjust margin top as needed */
}
</style>
