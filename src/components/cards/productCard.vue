<template>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-1.png" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">Apple</h6>
        <h5 class="product-title">AirPods Max</h5>

        <star-rating
          v-bind:star-size="20"
          v-bind:increment="0.5"
          :rating="3.8"
          :read-only="true"
          :show-rating="false"
        >
        </star-rating>
        <p class="price">$529.99</p>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-2.jpg" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">Jazwares</h6>
        <h5 class="product-title">
          Squishmallows 16" Plush - Holiday Cat in Blue Scarf
        </h5>
        <div class="rating">
          <star-rating
            v-bind:star-size="20"
            v-bind:increment="0.5"
            :rating="4.5"
            :read-only="true"
            :show-rating="false"
          >
          </star-rating>
        </div>
        <p class="price">$24.99</p>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-3.jpg" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">Sonos</h6>
        <h5 class="product-title">Move 2 Speaker</h5>
        <star-rating
          v-bind:star-size="20"
          v-bind:increment="0.5"
          :rating="3.5"
          :read-only="true"
          :show-rating="false"
        >
        </star-rating>
        <p class="price">$449.00</p>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-4.jpg" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">PELONIS</h6>
        <h5 class="product-title">
          42-Inch Tower Fan, Standing Fan with Remote
        </h5>
        <star-rating
          v-bind:star-size="20"
          v-bind:increment="0.5"
          :rating="3"
          :read-only="true"
          :show-rating="false"
        >
        </star-rating>
        <p class="price">$65.88</p>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-5.jpg" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">Sony</h6>
        <h5 class="product-title">
          PlayStation 5 DualSense Wireless Controller
        </h5>
        <star-rating
          v-bind:star-size="20"
          v-bind:increment="0.5"
          :rating="4.5"
          :read-only="true"
          :show-rating="false"
        >
        </star-rating>
        <p class="price">$54.95</p>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="product-card">
      <div class="product-image">
        <img src="/images/prod-6.jpg" alt="product image" />
      </div>
      <div class="product-details">
        <h6 class="brand">Samsung</h6>
        <h5 class="product-title">Samsung Galaxy Watch6</h5>
        <star-rating
          class="rating"
          v-bind:star-size="20"
          v-bind:increment="0.5"
          :rating="4.4"
          :read-only="true"
          :show-rating="false"
        >
        </star-rating>
        <p class="price">$209</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRating from "vue-star-rating";
</script>

<style lang="scss" scoped></style>
<!-- prod 1 -->
<!-- Apple
Apple -  - Sky Blue
Model:MGYL3AM/ASKU:6376542
User rating, 4.7 out of 5 stars with 14125 reviews.
4.7
(14,125 Reviews)
$529.99Your price for this item is $529.99
Save $20
Was $549.99The previous price was $549.99
Or
$44.17/mo.*See disclaimers from Show me how button 1
suggested payments with 12-Month Financing
Show me how > -->

<!-- prod 2 -->
<!-- Jazwares - Squishmallows 16" Plush - Holiday Cat in Blue Scarf - Cam
Model:SQXM00562SKU:6550013
User rating, 4.8 out of 5 stars with 91 reviews.
4.8
(91 Reviews)
$24.99 -->

<!-- prod3 -->
<!-- Sonos
Sonos - Move 2 Speaker (Each) - Black
Model:MOVE2US1BLKSKU:6557775
User rating, 4.7 out of 5 stars with 280 reviews.
4.7
(280 Reviews)
$449.00Your price for this item is $449.00
Or
$37.42/mo.*See disclaimers from Show me how button 1
suggested payments with 12-Month Financing
Show me how > -->

<!-- prod4 -->

<!-- PELONIS 42-Inch Tower Fan, Standing Fan with Remote, Quiet Bladeless Cooling Fan -->
<!-- with 5 Speeds and 9-Hour Timer, Oscillating Electric Fan with LED Display,... -->
<!-- 41/2 star Limited time deal
 £65.88 with 33 percent savings-33% £65.88 -->
<!-- prod5 -->
<!-- PlayStation 5 DualSense Wireless Controller Brand: PlayStation Platform :
PlayStation 5 4.6 4.6 out of 5 stars 43,047 ratings 6K+ bought in past month
£54.95 with 7 percent savings-7% £54.95 RRP: £59.15RRP: £59.15 -->
<!-- prod6 -->
<!-- Samsung Galaxy Watch6 Smart Watch, Fitness Tracker, Bluetooth, 44mm, Silver, 3
Year Extended Warranty (UK Version) Visit the Samsung Store 4.4 4.4 out of 5
stars 32 ratings Amazon's Choice 100+ bought in past month Limited time deal
£209.00 with 34 percent savings-34% £209.00 RRP: £319.00RRP: £319.00 -->
