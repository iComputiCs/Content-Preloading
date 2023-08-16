<template>
  <div :style="globalStyle" id="content-preloading">
    <HeaderComponent></HeaderComponent>
    <Controls></Controls>
    <ContentComponent></ContentComponent>
  </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue'
import ContentComponent from '../components/ContentComponent.vue'
import Controls from '../components/Controls.vue'

import { useGlobalValuesStore } from '../stores/global_values'
import { computed, onMounted, ref } from 'vue'

const global = useGlobalValuesStore()

const globalStyle = computed(() => {
  return {
    backgroundColor: global.pageBackground,
    '--bf-size': `${(global.waveSteps + 1) * 100}%`,
    '--element-gradient': global.elementGradientValue,
    '--block-gradient': global.blockGradientValue,
    '--animation-time': global.animationTime + 's',
    '--border-radius': global.borderRadius + 'px',
    '--info-bar': '-' + global.isInfo + 'vh'
  }
})
</script>

<style lang="scss">
#content-preloading {
  width: 100vw;
  min-height: 100vh;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  * {
    transition: 0.25s ease;
  }
  justify-content: center;
  background-color: transparent;
  --bg-size: 300%;
  --element-gradient: linear-gradient(
    to right,
    #d4d5d8,
    transparent,
    #d4d5d8,
    transparent,
    #d4d5d8
  );
  --block-gradient: linear-gradient(
    to right,
    transparent,
    #d4d5d8,
    transparent,
    #d4d5d8,
    transparent
  );
  --animation-time: 3s;
  --border-radius: 10px;
}
@keyframes loop {
  0% {
    background-position: var(--bg-size) 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
