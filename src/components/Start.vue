<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const gender = ref('1')
const chronic = ref([''])
</script>

<template>
  <div class="container">
    <img alt="logo" class="title-img" src="@/assets/images/title.png" />

    <div class="main-info">
      <div class="gender-container">
        性別：
        <el-radio-group v-model="gender" type="primary">
          <el-radio value="1" size="large">男</el-radio>
          <el-radio value="2" size="large">女</el-radio>
        </el-radio-group>
      </div>
      <div class="age-container">
        年紀：
        <el-input type="primary" class="age-input" />
      </div>
    </div>
    <div class="chronic-container">
      慢性病史：
      <div class="chronic-inner-container">
        <el-checkbox-group v-model="chronic">
          <el-checkbox label="心臟病" value="Value A" />
          <el-checkbox label="糖尿病" value="Value B" />
          <el-checkbox label="高血壓" value="Value C" />
          <el-checkbox label="心臟病" value="Value D" />
          <el-checkbox label="糖尿病" value="Value E" />
          <el-checkbox label="高血壓" value="Value F" />
          <el-checkbox label="心臟病" value="Value G" />
          <el-checkbox label="糖尿病" value="Value H" />
          <el-checkbox label="高血壓" value="Value I" />
          <el-checkbox label="心臟病" value="Value J" />
          <el-checkbox label="糖尿病" value="Value K" />
          <el-checkbox label="高血壓" value="Value L" />
          <el-checkbox label="心臟病" value="Value M" />
          <el-checkbox label="糖尿病" value="Value N" />
          <el-checkbox label="高血壓" value="Value O" />
          <el-checkbox label="心臟病" value="Value P" />
          <el-checkbox label="糖尿病" value="Value Q" />
          <el-checkbox label="高血壓" value="Value R" />
        </el-checkbox-group>
      </div>
    </div>
    <RouterLink to="/main-choice">
      <div class="submit-btn">
        <img alt="paw" class="paw" src="@/assets/images/paw.png" />
        選擇科別
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply max-w-[1024px] md:h-[100vh];
  @apply py-[5%] px-[10px] md:px-[100px];
  @apply mx-auto text-center;
  @apply animate-fadeIn;
  @apply text-main font-bold;
  @apply bg-black bg-opacity-20 bg-cover;
  @apply py-[40px];
}

.title-img {
  @apply w-[40%];
  @apply mx-auto mb-[40px];
}

.main-info {
  @apply flex justify-between items-center gap-x-[10px];
  @apply mb-[20px];
}

.gender-container {
  @apply font-bold;
}

.age-container {
  @apply flex items-center justify-center;
  @apply font-bold;

  .age-input {
    @apply w-[50px] md:w-[100px];
  }
}

.chronic-container {
  @apply font-bold text-left;

  .chronic-inner-container {
    @apply bg-[url('@/assets/images/info-bg.png')];
    @apply bg-[length:100%_100%];
    @apply px-[20px] py-[20px] mb-[40px];
  }
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
