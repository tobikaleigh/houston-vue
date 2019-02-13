<template>
  <div id="app" class="wrapper">
    <div id="nav" class="bg-blue-darkest">
      <router-link to="/" class="menu-item">Dashboard</router-link>
      <router-link to="/about" class="menu-item">Statistics</router-link>
    </div>
    <div class="pt-8 px-8">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.menu-item {
  @apply px-8 py-5 inline-block border-b-2 border-blue-darkest;

  &:hover {
    @apply text-white;
  }
}

.router-link-exact-active {
  @apply text-white border-b-2 border-indigo-lighter;
}
</style>
