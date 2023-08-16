import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import i18n from '../locals/i18n'

export const useGlobalValuesStore = defineStore('gvId', () => {
  const waveSteps = ref(5)
  const textWave = ref('d4d5d8')
  const blockWave = ref('d4d5d8')
  const animationTime = ref(10)
  const borderRadius = ref(5)

  const isMenuOpen = ref(false)

  const siteLang = ref('en')
  if (localStorage.getItem('lang')) {
    siteLang.value = localStorage.getItem('lang')
    i18n.global.locale.value = localStorage.getItem('lang')
  }

  const elementGradientValue = computed(() => {
    let gv0 = `#${textWave.value}, transparent, `
    gv0 = gv0.repeat(waveSteps.value)
    gv0 = `linear-gradient(to right, ${gv0}#${textWave.value})`
    return gv0
  })
  const blockGradientValue = computed(() => {
    let gv0 = `transparent, #${blockWave.value}, `
    gv0 = gv0.repeat(waveSteps.value)
    gv0 = `linear-gradient(to right, ${gv0}transparent)`
    return gv0
  })

  const elementCopy = computed(() => {
    return `.pre-element {
\tbackground-color: transparent;
\toverflow: hidden;
\tinset: 0;
\tanimation-name: loop;
\tanimation-timing-function: linear;
\tanimation-iteration-count: infinite;
\tanimation-duration: ${animationTime.value}s;
\tborder-radius: ${borderRadius.value}px;
\tbackground-size: ${waveSteps.value}00%;
\tbackground-image: ${elementGradientValue.value};
}`
  })
  const blockCopy = computed(() => {
    return `.pre-block {
\tbackground-color: transparent;
\toverflow: hidden;
\tinset: 0;
\tanimation-name: loop;
\tanimation-timing-function: linear;
\tanimation-iteration-count: infinite;
\tanimation-duration: ${animationTime.value}s;
\tborder-radius: ${borderRadius.value}px;
\tbackground-size: ${waveSteps.value}00%;
\tbackground-image: ${blockGradientValue.value};
}`
  })

  const animCopy = computed(() => {
    return `@keyframes loop {
\t0% {
\t\tbackground-position: ${waveSteps.value}00% 0;
\t}
\t100% {
\t\tbackground-position: ${waveSteps.value}00% 0;
\t}
}`
  })

  const pageBackground = ref('white')
  const bgColors = ref([
    { name: 'white', isActive: true },
    { name: 'black', isActive: false },
    { name: '#2B2E4A', isActive: false },
    { name: '#2f4f4f', isActive: false },
    { name: '#126E82', isActive: false },
    { name: '#8b4513', isActive: false },
    { name: '#F9B208', isActive: false },
    { name: '#800000', isActive: false },
    { name: '#808000', isActive: false }
  ])

  const isInfo = ref(95)
  const isCodeOpen = ref(false)

  return {
    waveSteps,
    textWave,
    blockWave,
    elementGradientValue,
    blockGradientValue,
    animationTime,
    pageBackground,
    borderRadius,
    isInfo,
    bgColors,
    isCodeOpen,
    elementCopy,
    blockCopy,
    animCopy,
    siteLang,
    isMenuOpen
  }
})
