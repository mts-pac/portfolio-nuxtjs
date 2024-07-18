<template>
  <div class="rounded-[50px] bg-slate-100 p-5 drop-shadow-md lg:-mx-2 2xl:-mx-10">
    <nav class="w-100 flex items-center px-10">
      <h1 class="fs-lobster me-auto text-5xl drop-shadow-md">MP</h1>
      <ul class="flex grow justify-center lg:gap-20 2xl:gap-36">
        <li v-for="({ to, name }, i) in links" :key="i">
          <a class="text-nowrap duration-300 hover:text-green lg:text-lg 2xl:text-xl" :href="to">{{
            name
          }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  links: {
    name: string
    to: string
  }[]
}

defineProps<Props>()
</script>
1
