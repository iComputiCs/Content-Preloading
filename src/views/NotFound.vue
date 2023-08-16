<template>
  <div id="not-found">
    <div id="safe-area">
      <h2>{{ $t('pnf.title') }}: 404</h2>
      <h1>{{ $t('pnf.desc') }}</h1>
      <p>{{ $t('pnf.warning') }}</p>
      <div><div ref="load" id="loading-bar"></div></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import i18n from '../locals/i18n'
import { useGlobalValuesStore } from '../stores/global_values'
const global = useGlobalValuesStore()
const router = useRouter()
const load = ref(null)
onMounted(async () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 5000)
  i18n.global.locale.value = global.siteLang
})
</script>

<style lang="scss" scoped>
@import '../assets/sass/variables';
@import '../assets/sass/breakpoints';
#not-found {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: $dark;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    color: $light;
  }
  #safe-area {
    width: 1280px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    @include media('<=1280px') {
      width: 90%;
    }
    @include media('<=tablet') {
      width: 95%;
      h1,
      h2,
      p {
        text-align: center;
      }
      div {
        width: 90%;
      }
    }
    @include media('<=phone') {
      h1 {
        font-size: 2em;
      }
    }
  }
  div {
    margin-top: 10px;
    width: 50%;
    #loading-bar {
      width: 0%;
      animation: end 5s ease-out forwards;
      height: 30px;
      background-color: transparent;
      overflow: hidden;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        height: 100%;
        background-size: 500%;
        background-image: linear-gradient(
          to right,
          #ebecf1,
          transparent,
          #ebecf1,
          transparent,
          #ebecf1,
          transparent,
          #ebecf1,
          transparent,
          #ebecf1
        );
        animation-name: loop;
        animation-duration: 35s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
      }
    }
  }
}
@keyframes loop {
  0% {
    background-position: 500% 0;
  }
  100% {
    background-position: 0 0;
  }
}
@keyframes end {
  100% {
    width: 100%;
  }
}
</style>
