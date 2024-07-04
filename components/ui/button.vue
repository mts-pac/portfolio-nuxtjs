<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    class="rounded-md drop-shadow-md"
    :class="{
      'bg-green text-white': variant == 'green',
      'bg-slate-100 text-slate-600': variant == 'secondary',
      'animate-[btn-pulse_0.75s_infinite_alternate]': pulse,
      'py-2': !iconLabel,
      block,
    }"
    @click="$emit('click')"
  >
    <template v-if="icon">
      <template v-if="iconLabel">
        <span
          class="my-auto inline-block min-h-full items-center bg-[#0000001A] px-3 py-2"
        >
          <slot name="icon">
            <font-awesome-icon class="icon" :icon :size="iconSize" />
          </slot>
        </span>

        <span
          class="inline-block h-full min-w-[125px] px-3 py-2 align-middle text-base"
        >
          <slot>
            {{ title }}
          </slot>
        </span>
      </template>

      <template v-else>
        <slot name="icon">
          <font-awesome-icon class="!align-middle" :icon :size="iconSize" />
        </slot>

        <span class="ms-2 inline-block min-w-[125px] align-middle text-base">
          <slot>
            {{ title }}
          </slot>
        </span>
      </template>
    </template>

    <slot class="inline-block min-w-[125px] text-base" v-else>
      {{ title }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  title?: string
  icon?: string
  iconLabel?: boolean
  block?: boolean
  pulse?: boolean
  iconSize?: 'xs' | 'sm' | 'lg' | 'xl' | '2x'
  variant?: 'green' | 'secondary'
}

const { variant = 'green' } = defineProps<Props>()

defineEmits(['click'])
</script>

<style>
.icon {
  @apply align-middle !important;
}
</style>
