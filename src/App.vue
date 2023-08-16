<template>
  <div id="container">
    <router-view v-slot="{ Component }">
      <transition name="route">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>

<style lang="scss">
#container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
