<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <main class="main-bg">
    <RouterView />
  </main>
</template>

<style scoped>
.main-bg {
  @apply min-w-[100vw] min-h-[100vh];
  @apply m-0;
  @apply bg-[url('@/assets/images/main-bg.jpg')];
  @apply bg-cover;
}
</style>
