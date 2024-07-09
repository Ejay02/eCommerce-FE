<template>
  <div class="size-chart-container">
    <div class="size-chart-category">
      <h3 class="text-center">Clothing</h3>
      <table class="size-chart-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Chest (in)</th>
            <th>Waist (in)</th>
            <th>Hips (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="size in clothingSizes" :key="size.size">
            <td>{{ size.size }}</td>
            <td>{{ size.chest }}</td>
            <td>{{ size.waist }}</td>
            <td>{{ size.hips }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="size-chart-container">
    <div class="size-chart-category">
      <h3 class="text-center">Toys</h3>
      <table class="size-chart-table">
        <thead>
          <tr>
            <th>Size</th>
            <th>Dimensions (in)</th>
            <th>Weight (lbs)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="size in toySizes" :key="size.size">
            <td>{{ size.size }}</td>
            <td>{{ size.dimensions }}</td>
            <td>{{ size.weight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const clothingSizes = ref([
  { size: "XS", chest: "30-32", waist: "24-26", hips: "34-36" },
  { size: "S", chest: "34-36", waist: "28-30", hips: "38-40" },
  { size: "M", chest: "38-40", waist: "32-34", hips: "42-44" },
  { size: "L", chest: "42-44", waist: "36-38", hips: "46-48" },
  { size: "XL", chest: "46-48", waist: "40-42", hips: "50-52" },
  { size: "XXL", chest: "50-52", waist: "44-46", hips: "54-56" },
]);

const toySizes = ref([
  { size: "Small", dimensions: "5x5x5", weight: "0.5" },
  { size: "Medium", dimensions: "10x10x10", weight: "1.5" },
  { size: "Large", dimensions: "20x20x20", weight: "3.0" },
]);
</script>

<style scoped>
.size-chart-container {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

.size-chart-category {
  margin-bottom: 40px;
}

.size-chart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.size-chart-table th,
.size-chart-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.size-chart-table th {
  background-color: #f2f2f2;
}
</style>
