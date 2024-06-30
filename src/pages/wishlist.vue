<template>
  <Metadata
    title="BuyZone/wishlist"
    description="Stay updated with BuyZone's latest articles, tips, and reviews."
    canonicalSuffix="/wishlist"
  />
  <Breadcrumb title="Wishlist(s)" />

  <div class="wishlist-wrapper home-wrapper-2 py-5">
    <div class="container-xxl">
      <div class="row">
        <div class="col-3">
          <div class="wishlist-card position-relative">
            <img
              src="/images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div class="wishlist-card-image">
              <img
                src="/images/watch.jpg"
                alt="watch"
                class="img-fluid w-100"
              />
            </div>
            <div class="px-3 py-3">
              <h5 class="title">
                Smart Watch for Men, Women, Fitness Watch with Intelligent
                Reminders and Phone Calls
              </h5>
              <h6 class="price">$ 100</h6>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="wishlist-card position-relative">
            <img
              src="/images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div class="wishlist-card-image">
              <img src="/images/tab.jpg" alt="watch" class="img-fluid w-100" />
            </div>
            <div class="px-3 py-3">
              <h5 class="title">
                Sleek, lightweight tablet with a high-resolution touch screen,
                perfect for both work and play
              </h5>
              <h6 class="price">$ 100</h6>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="wishlist-card position-relative">
            <img
              src="/images/cross.svg"
              alt="cross"
              class="position-absolute cross img-fluid"
            />
            <div class="wishlist-card-image">
              <img
                src="/images/speaker.jpg"
                alt="watch"
                class="img-fluid w-100"
              />
            </div>
            <div class="px-3 py-3">
              <h5 class="title">
                Compact, high-quality speakers delivering crisp, clear sound.
                Perfect for music, movies, ...
              </h5>
              <h6 class="price">$ 56.70</h6>
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
</script>

<style lang="scss" scoped></style>
