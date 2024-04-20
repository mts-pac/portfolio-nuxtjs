<template>
  <div class="bg-green h-100">
    <h1 class="dis text-3xl font-bold">Hello world!</h1>
  </div>
</template>

<style lang="scss">
$green: #01c38e;

body,
html,
h1 {
  margin: 0 !important;
}

:root {
  --color-green: #{$green};
}

.bg-green {
  background-color: var(--color-green);
}

.h-100 {
  height: 100vh;
}
</style>
