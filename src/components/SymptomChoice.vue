<script setup>
// import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// const gender = ref('1')
// const chronic = ref([''])
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  }
]
</script>

<template>
  <div class="container">
    <img alt="logo" class="title-img" src="@/assets/images/main-menu-1.png" />
    <h3 class="title">耳鼻喉科</h3>
    <div class="main-info">
      <!-- <div class="gender-container"> -->
      <el-select v-model="value" placeholder="選擇主要症狀" size="large" class="select-symptom">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!-- </div> -->
    </div>
    <RouterLink to="/question">
      <div class="submit-btn">
        <img alt="paw" class="paw" src="@/assets/images/paw.png" />
        選擇科別
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply flex justify-center flex-col;
  @apply max-w-[1024px] h-[100vh];
  @apply pb-[20px] px-[10px] md:px-[100px];
  @apply mx-auto text-center;
  @apply animate-fadeIn;
  @apply text-main font-bold;
  @apply bg-black bg-opacity-20 bg-cover;
}

.title-img {
  @apply w-[40%];
  @apply mx-auto;
  @apply md:mb-[40px];
}

.title {
  @apply text-white;
  @apply text-2xl md:text-4xl;
  @apply mb-[20px] md:mb-[40px];
}

.main-info {
  @apply flex justify-between items-center gap-x-[10px];
  @apply mb-[20px];
}

.select-symptom {
  @apply rounded-3xl mx-auto px-[10px];
  @apply md:w-[400px] h-[60px];
}

.submit-btn {
  @apply flex items-center justify-center gap-x-[20px];
  @apply w-[300px] md:w-[400px] mx-auto;
  @apply py-[15px] md:py-[30px];
  @apply rounded-[40px] cursor-pointer;
  @apply border-[5px] border-main;

  .paw {
    @apply w-[50px];
  }
}
</style>
