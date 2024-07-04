<template>
  <div
    class="rounded-b-3xl rounded-t-[40px] bg-slate-100 text-black drop-shadow-md"
  >
    <div class="rounded-t-3xl bg-blue px-5 py-3">
      <nuxt-img height="65px" :src="logo"></nuxt-img>
    </div>

    <div class="px-7 py-3">
      <h2 class="text-lg font-bold">{{ title }}</h2>

      <div class="flex gap-2 py-2">
        <span
          class="rounded-lg bg-blue px-2 py-1 text-xs font-semibold text-white"
          v-if="Array.isArray(techs)"
          v-for="(item, i) in techs"
          :key="i"
        >
          {{ item }}
        </span>

        <span
          class="rounded-lg bg-blue px-2 py-1 text-xs font-semibold text-white"
          v-else
        >
          {{ techs }}
        </span>
      </div>

      <p class="text-sm font-bold text-slate-600">
        {{ company }} - Início em {{ initiation }} até
        {{ ending ?? 'atualmente' }}
      </p>

      <hr class="my-2 border-t-2" />

      <div class="flex flex-col gap-3 text-sm">
        <p
          v-if="Array.isArray(paragraph)"
          v-for="(item, i) in paragraph"
          :key="i"
          class="text-justify"
        >
          {{ item }}
        </p>

        <p class="text-justify" v-else>{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  company: string
  title: string
  techs: string | string[]
  logo: string
  initiation: string
  ending?: string
  paragraph: string | string[]
}>()
</script>
