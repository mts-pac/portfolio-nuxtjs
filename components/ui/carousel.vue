<template>
  <vc-carousel
    class=""
    :autoplay="2500"
    :wrap-around="true"
    :breakpoints="breakpoints"
    :transition="1000"
  >
    <slot> </slot>

    <template #addons>
      <vc-pagination v-if="!hidePagination" />
    </template>
  </vc-carousel>
</template>

<script lang="ts" setup>
interface Props {
  hidePagination?: boolean
}

defineProps<Props>()

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center'
  },
  // 1024 and up
  1024: {
    itemsToShow: 10,
    snapAlign: 'start'
  }
}
</script>
