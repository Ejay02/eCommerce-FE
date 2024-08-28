<template>
  <Metadata
    title="BuyZone | Contact"
    description="Questions, compliments, or just want to chat? Reach out"
    canonicalSuffix="layout/contact"
  />
  <Breadcrumb title="Contact" />

  <div class="contact-wrapper py-5 home-wrapper-2">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="map-container">
            <div v-if="!iframeLoaded" class="skeleton-loader"></div>
            <iframe
              @load="onIframeLoad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317719.601511855!2d-0.43193464729125997!3d51.5281778231739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1719487383009!5m2!1sen!2suk"
              width="600"
              height="450"
              style="border: 0; border-radius: 10px; width: 100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="col-12 mt-5">
          <div class="contact-inner-wrapper d-flex justify-content-between">
            <div class="">
              <h3 class="contact-title mb-4">Contact</h3>
              <form class="d-flex flex-column gap-15">
                <div>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div>
                  <input
                    autofocus
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    autofocus
                    type="number"
                    class="form-control"
                    placeholder="Mobile number"
                  />
                </div>
                <div>
                  <textarea
                    class="w-100 form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                  ></textarea>
                </div>

                <div class="">
                  <button class="button border-0">Submit</button>
                </div>
              </form>
            </div>
            <div class="">
              <h3 class="contact-title mb-4">Get In Touch</h3>
              <div class="">
                <ul class="ps-0">
                  <li class="mb-3 d-flex gap-15 align-items-center">
                    <i class="fa-solid fa-house-chimney"></i>
                    <address class="mb-0">
                      Demo Store, 4116 Sherwood Circle, Lafayette, Louisiana.
                      70501.
                    </address>
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center">
                    <i class="fa-solid fa-phone-volume"></i>

                    <a href="+00 123 456 7890" class="">(+00)1 234 567 890</a>
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:e.jae02@gmail.com" class=""
                      >e.jae02@gmail.com</a
                    >
                  </li>
                  <li class="mb-3 d-flex gap-15 align-items-center">
                    <i class="fa-solid fa-info"></i>
                    <p class="mb-0">Monday - Friday 10AM - 5PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Metadata from "@/components/metadata.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import { ref } from "vue";

const iframeLoaded = ref(false);

const onIframeLoad = () => {
  iframeLoaded.value = true;
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 450px;
}

.skeleton-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #d0d0d0 25%, #b0b0b0 50%, #d0d0d0 75%);
  background-size: 200% 100%;
  animation: loading 3s infinite;
  border-radius: 10px;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
