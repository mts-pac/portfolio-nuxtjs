<template>
  <div class="-mx-10 rounded-[50px] bg-slate-100 p-5 drop-shadow-md">
    <nav class="w-100 flex items-center px-10">
      <h1 class="fs-lobster me-auto text-6xl drop-shadow-md">MP</h1>
      <ul class="flex grow justify-center gap-36">
        <li v-for="({ to, name }, i) in links" :key="i">
          <a class="text-xl duration-300 hover:text-green" :href="to">{{
            name
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  links: {
    name: string
    to: string
  }[]
}

defineProps<Props>()
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
