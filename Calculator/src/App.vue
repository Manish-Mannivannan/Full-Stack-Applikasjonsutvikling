<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div class="navbar">
    <h1 id="title">Calculator</h1>
    <nav>
      <RouterLink to="/">Calculator</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/Contact">Contact</RouterLink>
    </nav>
  </div>

  <router-view v-slot="{ Component }" class="routerComps">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}

.fade-enter-to, .fade-leave-from{
  opacity: 1;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3s ease-out;
}

#title{
  width: 100%;
  margin-left: 1rem;
  font-size: 2.5rem;
  color: var(--color-red);
}

.navbar{
  display: flex;
  position: fixed;
  background-color: var(--color-background);
  margin: 1rem auto;
  padding: 0;
  min-width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-1rem);
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: right;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.routerComps{
  margin-top: 4rem;
}

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
