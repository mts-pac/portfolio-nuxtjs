<template>
  <div
    class="rounded-3xl bg-gradient-to-b from-green to-blue px-10 py-8 text-slate-100 drop-shadow-md"
  >
    <h2 class="text-center text-xl font-bold">{{ title }}</h2>

    <div class="flex flex-col gap-3 py-5">
      <template v-if="Array.isArray(paragraph)">
        <p v-for="(item, i) in paragraph" :key="i" class="text-justify">
          {{ item }}
        </p>
      </template>

      <p v-else class="text-justify">{{ paragraph }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { title } = defineProps<{
  title?: string
  paragraph: string | string[]
}>()
</script>
