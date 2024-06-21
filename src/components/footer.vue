<template>
  <footer class="py-4 ">
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-5">
          <div class="footer-top-data d-flex gap-30 align-items-center">
            <img src="/images/newsletter.png" alt="newsletter" />
            <h2 class="mb-0 text-white">Sign Up for Newsletter</h2>
          </div>
        </div>
        <div class="col-7">
          <div class="input-group">
            <input
              type="text"
              class="form-control py-1"
              placeholder="ej@example.com"
              aria-label="ej@example.com"
              aria-describedby="basic-addon2"
            />
            <button class="input-group-text p-2" id="basic-addon2"
              >Subscribe</button
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="py-4 flex-wrap">
    <div class="container-xxl">
      <div class="row bottom-group">
        <div class="col-3">
          <h4 class="text-white mb-4">Contact Us</h4>
          <div>
            <address class="text-white fs-6">
              Demo Store <br />
              4116 Sherwood Circle,
              <br />
              Lafayette, Louisiana. <br />
              70501.
            </address>

            <a href="+00 123 456 7890" class="text-white mt-3 d-block mb-1"
              >+00 123 456 7890</a
            >

            <div class="social-icons d-flex align-items-center gap-15">
              <a href="https://github.com/Ejay02" class="text-white fs-5"
                ><i class="fa-brands fa-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/ejakpovi/"
                class="text-white fs-5"
                ><i class="fa-brands fa-linkedin"></i
              ></a>

              <a
                href="mailto:dreamydamsel2000@yahoo.com"
                class="text-white fs-5"
                ><i class="fa-solid fa-paper-plane"></i
              ></a>
              <a href="/" class="text-white fs-5"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a href="/" class="text-white fs-5"
                ><i class="fa-brands fa-youtube"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h4 class="text-white mb-4">Information</h4>
          <div class="footer-link d-flex flex-column">
            <router-link to="" class="text-white py-2 mb-1"
              >Privacy Policy</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Refund Policy</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Shipping Policy</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Terms Of Service</router-link
            >
            <router-link to="" class="text-white py-2 mb-1">Blogs</router-link>
          </div>
        </div>
        <div class="col-2">
          <h4 class="text-white mb-4">Account</h4>
          <div class="footer-link d-flex flex-column">
            <router-link to="" class="text-white py-2 mb-1">Search</router-link>
            <router-link to="" class="text-white py-2 mb-1"
              >About Us</router-link
            >
            <router-link to="" class="text-white py-2 mb-1">FAQs</router-link>
            <router-link to="" class="text-white py-2 mb-1"
              >Contact</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Size Chart</router-link
            >
          </div>
        </div>
        <div class="col-2">
          <h4 class="text-white mb-4">Quick Links</h4>
          <div class="footer-link d-flex flex-column">
            <router-link to="" class="text-white py-2 mb-1"
              >Accessories</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Laptops</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Headphones</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Smart Watches</router-link
            >
            <router-link to="" class="text-white py-2 mb-1"
              >Tablets</router-link
            >
          </div>
        </div>
        <div class="col-3">
          <h4 class="text-white mb-4">Our App</h4>
          <p class="text-white fs-6">
            Download our App and get extra 15% Discount on your first Order !
          </p>
          <img
            class=""
            src="/images/GetItOnGooglePlay_Badge_Web_color_English.png"
            alt="google play badge"
            style="width: 119.67px; height: 40px; margin-right: 10px"
            s
          />
          <img
            src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            alt="appstore badge"
          />
        </div>
      </div>
    </div>
  </footer>
  <footer class="footer-last">
    <div class="container-xxl">
      <div class="row">
        <div class="col-7">
          <p class="mb-0 text-white">
            &copy; {{ new Date().getFullYear() }}, Powered by Unknown Heroes 🖤
          </p>
        </div>

        <div class="col-2"></div>
        <div class="col-3">
          <div class="d-flex gap-2" style="width: 25px; height: 25px">
            <img src="/images/visa.png" alt="visa" class="" />
            <img src="/images/mastercard.png" alt="mastercard" />
            <img src="/images/amex.png" alt="amex" />
            <img src="/images/paypal.png" alt="paypal" />
            <img src="/images/discover.png" alt="discover" />
            <img src="/images/jcb.png" alt="jcb" />
          </div>
        </div>
        <!-- <div class="col-2">
          <span class="scroll-to-top">
            <i class="fa-solid fa-chevron-up"></i>
          </span>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
