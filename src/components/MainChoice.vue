<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import image1 from '@/assets/images/main-menu-1.png'
import image2 from '@/assets/images/main-menu-2.png'
import image3 from '@/assets/images/main-menu-3.png'
import image4 from '@/assets/images/main-menu-4.png'
import image5 from '@/assets/images/main-menu-5.png'
import image6 from '@/assets/images/main-menu-6.png'
import image7 from '@/assets/images/main-menu-7.png'

const items = ref([
  {
    imgUrl: image1,
    text: '耳鼻喉科'
  },
  {
    imgUrl: image2,
    text: '呼吸系統科'
  },
  {
    imgUrl: image3,
    text: '手足筋骨科'
  },
  {
    imgUrl: image4,
    text: '女性美容科'
  },
  {
    imgUrl: image5,
    text: '泌尿科'
  },
  {
    imgUrl: image6,
    text: '消化系統科'
  },
  {
    imgUrl: image7,
    text: '腦神經科'
  }
])
</script>

<template>
  <div class="container">
    <div class="main-menu">
      <div v-for="item in items" :key="item.text" class="menu-item">
        <RouterLink to="/symptom-choice">
          <img :alt="item.text" class="menu-item-img" :src="item.imgUrl" />
          {{ item.text }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$radius: 120;
$center: 50%;
$menu-count: 7;

.container {
  @apply flex justify-center items-center;
  @apply max-w-[1024px] h-[100vh];
  @apply mx-auto text-center;
  @apply animate-fadeIn;
  @apply text-main font-bold;
  @apply bg-black bg-opacity-20 bg-cover;
  @apply py-[40px];
}

.main-menu {
  @apply relative;
  @apply grid place-items-center;
  @apply bg-[url('@/assets/images/main-choice-title.jpg')];
  @apply bg-cover;
  @apply rounded-full;
  @apply border border-4 border-black;
  @apply w-[100px] md:w-[300px];
  @apply h-[100px] md:h-[300px];

  .menu-item {
    @apply absolute;
    @apply flex justify-center items-center flex-col;
    @apply text-lg md:text-4xl;
    @apply w-[100px] md:w-[180px];
    @apply text-white cursor-pointer;

    transition: 0.5s;
    animation: moveMenu 0.5s ease-in-out forwards;

    @for $i from 0 through 7 {
      &:nth-child(#{$i + 1}) {
        animation-delay: 0.5s;
        top: $center;
        left: $center;
        transform: translate(-50%, -50%);
        opacity: 0;

        @keyframes moveMenu-#{$i} {
          to {
            top: #{$center + $radius * sin($i * 360deg / $menu-count)};
            left: #{$center + $radius * cos($i * 360deg / $menu-count)};
            opacity: 1;
          }
        }

        animation-name: moveMenu-#{$i};
      }
    }

    .menu-item-img {
      @apply w-[50px] md:w-[150px] mx-auto;
    }
  }
}
</style>
