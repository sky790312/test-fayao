<!-- eslint-disable vue/valid-v-model -->

<script setup>
import { ref } from 'vue'

const choice = ref('')
</script>

<template>
  <div class="container">
    <div class="question-main-container">
      <img alt="menu" class="title-img" src="@/assets/images/main-menu-1.png" />
      <div class="info-container">
        <div class="main-menu">
          <h3>腦神經系統</h3>
          <span class="symptom"> ∙偏頭痛 </span>
        </div>
        <el-progress :percentage="10" :text-inside="true" :stroke-width="40"> 1/25 </el-progress>
      </div>
    </div>
    <div class="question-vision-container">
      <div class="question-title-container">
        <img alt="vision" class="chat-img" src="@/assets/images/question-chat.jpg" />
        <p>是否經常被人說臉紅心心跳喘，心煩也常常想喝水？</p>
      </div>
      <img alt="vision" class="vision-img" src="@/assets/images/question-vision.png" />
      <div>
        <el-radio-group v-model="choice" class="question-answer-container">
          <el-radio-button class="answer-choice" label="沒有" value="0" />
          <el-radio-button class="answer-choice" label="一點點" value="1" />
          <el-radio-button class="answer-choice" label="有" value="2" />
          <el-radio-button class="answer-choice" label="明顯" value="3" />
          <el-radio-button class="answer-choice" label="很嚴重" value="4" />
        </el-radio-group>
      </div>
      <div class="pagination-container">
        <div class="prev">⟪⟪ 上一則</div>
        <div class="next">下一則 ⟫⟫</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply flex justify-center flex-col;
  @apply max-w-[1024px] h-[100vh];
  @apply px-[10px] md:px-[100px];
  @apply mx-auto text-center;
  @apply animate-fadeIn;
  @apply text-main font-bold;
  @apply bg-black bg-opacity-20 bg-cover;
}

.question-main-container {
  @apply flex items-center;
  @apply mb-[20px] md:mb-[40px];

  .title-img {
    @apply w-[80px] md:w-[100px];
    @apply mr-[10px];
  }

  .info-container {
    @apply flex-grow;
  }

  .main-menu {
    @apply flex justify-between items-baseline;
    @apply text-white;
  }
}

.question-vision-container {
  @apply relative;

  .vision-img {
    @apply mx-auto;
    @apply w-full max-w-[720px];
    @apply z-0;
    @apply mt-[-40px] md:mt-[-60px] lg:mt-[-60px];
  }

  .question-title-container {
    @apply relative flex items-center;
    @apply z-10;
    @apply bg-[url('@/assets/images/quesrion-bg.png')];
    @apply bg-[length:100%_100%];
    @apply my-[10px];
    @apply pt-[15px] pb-[20px] px-[20px] md:px-[20px];
    @apply md:pt-[40px] md:pb-[54px] md:px-[30px];
    @apply lg:pt-[40px] lg:pb-[54px] lg:px-[50px];
    @apply text-xs md:text-2xl;

    .chat-img {
      @apply w-[30px] md:w-[60px];
      @apply rounded-full mx-[10px];
    }
  }

  .question-answer-container {
    @apply relative flex justify-around items-center;
    @apply z-10;
    @apply mt-[-40px] md:mt-[-40px] lg:mt-[-60px];
    @apply px-[30px] md:px-[60px];
    @apply bg-[url('@/assets/images/answer-bg.png')];
    @apply bg-[length:100%_100%];
  }

  .pagination-container {
    @apply flex justify-between;

    .prev,
    .next {
      @apply md:mx-[60px] lg:mx-[100px];
      @apply px-[20px] py-[3px];
      @apply text-white;
      @apply border border-white rounded-3xl;
      @apply cursor-pointer;
      @apply hover:opacity-70;
    }
  }
}
</style>
<style lang="scss">
#app .answer-choice {
  @apply relative;
  @apply text-xs md:text-2xl;
  @apply px-0;
  @apply pt-[30px] pb-[40px];
  @apply md:pt-[40px] md:pb-[60px];
  @apply lg:pt-[40px] lg:pb-[60px];
  @apply cursor-pointer;

  .el-radio-button__inner {
    @apply text-xs md:text-2xl;
    @apply text-black bg-white;
    @apply shadow-none;
  }

  &:hover {
    .el-radio-button__inner {
      @apply opacity-70;
    }
  }

  &::before {
    content: ' ';
    @apply absolute;
    @apply w-[15px] h-[15px];
    @apply md:w-[30px] md:h-[30px];
    @apply my-[6px] ml-[-5px] md:ml-[-20px];
    @apply bg-[url('@/assets/images/paw-blue.png')];
    @apply bg-contain;
    @apply z-10;
    @apply opacity-0 hover:opacity-100;
  }

  &.is-active {
    .el-radio-button__inner {
      @apply text-[#800909];
    }

    &::before {
      @apply bg-[url('@/assets/images/paw-red.png')];
      @apply opacity-100;
    }
  }
}
</style>
