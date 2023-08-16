<template>
  <div id="controls">
    <div class="wrapper">
      <div id="bg-colors">
        <button
          v-for="item in colorButtons"
          :key="item.name"
          :style="{
            '--button-color': item.name,
            scale: item.isActive ? '1' : '0.7'
          }"
          @click="changeBGColor(item.name)"
        ></button>
      </div>
      <div id="locale-changer">
        <TransitionGroup name="langs" tag="ul">
          <li v-for="lang in langs" :key="lang.name">
            <button :class="{ active: lang.isActive }" @click="changeLang(lang.name)">
              {{ lang.name }}
            </button>
          </li>
        </TransitionGroup>
      </div>
      <!-- <div id="locale-changer-mobile">
        <TransitionGroup name="langs" tag="ul">
          <li v-for="lang in langs" :key="lang.name">
            <button :class="{ active: lang.isActive }" @click="changeLang(lang.name)">
              {{ lang.name }}
            </button>
          </li>
        </TransitionGroup>
      </div> -->
      <button id="toggle-code" @click="toggleCode">
        {{ $t('code.button') }}
      </button>
      <div id="code" :class="{ active: global.isCodeOpen }">
        <button id="toggle-code-2" @click="toggleCode">
          {{ $t('code.close') }}
        </button>
        <div id="code-changer">
          <h2>{{ $t('code.button') }}:</h2>
          <div class="code-wrapper">
            <div class="code-changers">
              <button @click="elBlock = 'el'" :class="{ active: elBlock === 'el' }">
                {{ $t('code.codeChangeEl') }}
              </button>
              <button @click="elBlock = 'block'" :class="{ active: elBlock === 'block' }">
                {{ $t('code.codeChangeBl') }}
              </button>
            </div>
            <code class="code-polygon">
              <div class="line">
                <span class="green">.pre-{{ elBlock === 'block' ? 'block' : 'element' }}</span> {
              </div>
              <div class="line">
                <span class="blue">background-color</span>: <span class="blue">transparent</span>;
              </div>
              <div class="line">
                <span class="blue">overflow</span>: <span class="blue">hidden</span>;
              </div>
              <div class="line"><span class="blue">inset</span>: <span class="blue">0</span>;</div>
              <div class="line"><span class="blue">animation-name</span>: <span>loop</span>;</div>
              <div class="line">
                <span class="blue">animation-timing-function</span>:
                <span class="blue">linear</span>;
              </div>
              <div class="line">
                <span class="blue">animation-iteration-count</span>:
                <span class="blue">infinite</span>;
              </div>
              <div class="line">
                <span class="blue">animation-duration</span>:
                <span class="blue">{{ global.animationTime }}</span
                ><span class="red">s</span>;
              </div>
              <div class="line">
                <span class="blue">border-radius</span>:
                <span class="blue">{{ global.borderRadius }}</span
                ><span class="red">px</span>;
              </div>
              <div class="line">
                <span class="blue">background-size</span>:
                <span class="blue">{{ global.waveSteps * 100 }}</span
                ><span class="red">%</span>;
              </div>
              <div class="line">
                <span class="blue">background-image</span>:
                <span class="blue">{{
                  elBlock === 'block' ? global.blockGradientValue : global.elementGradientValue
                }}</span
                >;
              </div>
              <div class="line pl0">}</div>
              <button class="copy" @click="copyCode('main')">
                <Transition name="copying" mode="out-in">
                  <img src="../assets/images/copied.svg" v-if="copying" alt="copied" />
                  <img src="../assets/images/copy.svg" v-else alt="copy" />
                </Transition>
              </button>
            </code>
          </div>
          <code class="code-polygon">
            <div class="line"><span class="red">@keyframes</span> loop {</div>
            <div class="line"><span class="blue">0%</span> {</div>
            <div class="line t4">
              <span class="blue">background-position</span>:
              <span class="blue">{{ global.waveSteps * 100 }}</span
              ><span class="red">%</span> <span class="blue">0</span>;
            </div>
            <div class="line">}</div>
            <div class="line"><span class="blue">100%</span> {</div>
            <div class="line t4">
              <span class="blue">background-position</span>:
              <span class="blue">{{ global.waveSteps * 100 }}</span
              ><span class="red">%</span> <span class="blue">0</span>;
            </div>
            <div class="line">}</div>
            <div class="line pl0">}</div>
            <button class="copy" @click="copyCode('animation')">
              <Transition name="copying" mode="out-in">
                <img src="../assets/images/copied.svg" v-if="copyingAnim" alt="copied" />
                <img src="../assets/images/copy.svg" v-else alt="copy" />
              </Transition>
            </button>
          </code>
          <form method="post" @submit.prevent="checkAndApply" class="main-block">
            <div class="control-block number">
              <label>
                <input maxlength="2" min="2" max="20" type="number" v-model="aSteps" />
                <button @click="aSteps++">+</button>
                <button @click="aSteps--">-</button>
              </label>
              <span>{{ $t('code.aSteps') }}</span>
            </div>
            <div v-if="elBlock === 'block'" class="control-block hex">
              <label>
                <span>#</span>
                <input maxlength="6" type="text" v-model="blockGColor" />
              </label>
              <span>{{ $t('code.blockGColor') }}</span>
            </div>
            <div v-else class="control-block hex">
              <label>
                <span>#</span>
                <input maxlength="6" type="text" v-model="elementGColor" />
              </label>
              <span>{{ $t('code.elementGColor') }}</span>
            </div>
            <div class="control-block number">
              <label>
                <input maxlength="2" min="2" max="30" type="number" v-model="aTime" />
                <button @click="aTime++">+</button>
                <button @click="aTime--">-</button>
              </label>
              <span>{{ $t('code.aTime') }}</span>
            </div>
            <div class="control-block number">
              <label>
                <input maxlength="2" min="0" max="50" type="number" v-model="borderRadius" />
                <button @click="borderRadius++">+</button>
                <button @click="borderRadius--">-</button>
              </label>
              <span>{{ $t('code.borderRadius') }}</span>
            </div>
            <button type="submit">{{ $t('code.apply') }}</button>
          </form>
          <span class="error">{{ err }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalValuesStore } from '../stores/global_values'
import { computed, ref, watch } from 'vue'
import i18n from '../locals/i18n'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({})

const global = useGlobalValuesStore()

function changeLang(lang) {
  localStorage.setItem('lang', lang)
  i18n.global.locale.value = lang
  global.siteLang = lang
}

function toggleCode() {
  if (global.isCodeOpen) {
    global.isCodeOpen = false
  } else {
    global.isCodeOpen = true
  }
}

const langs = computed(() => {
  if (i18n.global.locale.value === 'en') {
    return [
      { name: 'uz', isActive: false },
      { name: 'en', isActive: true }
    ]
  } else {
    return [
      { name: 'en', isActive: false },
      { name: 'uz', isActive: true }
    ]
  }
})

const colorButtons = computed(() => {
  return global.bgColors
})

function changeBGColor(color) {
  global.pageBackground = color
  for (let i = 0; i < global.bgColors.length; i++) {
    if (global.bgColors[i].name === color) {
      global.bgColors[i].isActive = true
    } else {
      global.bgColors[i].isActive = false
    }
  }
}

const copying = ref(false)
const copyingAnim = ref(false)
const elBlock = ref('el')
function copyCode(content) {
  if (content === 'main') {
    copying.value = true
    if (elBlock.value === 'el') {
      navigator.clipboard.writeText(global.elementCopy)
    } else if (elBlock.value === 'block') {
      navigator.clipboard.writeText(global.blockCopy)
    }
    setTimeout(() => {
      copying.value = false
    }, 1500)
  }
  if (content === 'animation') {
    copyingAnim.value = true
    navigator.clipboard.writeText(global.animCopy)
    setTimeout(() => {
      copyingAnim.value = false
    }, 1500)
  }
}

// Input values:
const aSteps = ref(global.waveSteps)
const elementGColor = ref(global.textWave)
const blockGColor = ref(global.blockWave)
const aTime = ref(global.animationTime)
const borderRadius = ref(global.borderRadius)
const hexSample = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'A',
  'b',
  'B',
  'c',
  'C',
  'd',
  'D',
  'e',
  'E',
  'f',
  'F'
]

const err = ref('')

watch(elementGColor, (newValue) => {
  let temp = newValue.split('')
  for (let i = 0; i < temp.length; i++) {
    if (!hexSample.includes(temp[i])) {
      temp.splice(i, 1)
    }
  }
  elementGColor.value = temp.join('')
})
watch(blockGColor, (newValue) => {
  let temp = newValue.split('')
  for (let i = 0; i < temp.length; i++) {
    if (!hexSample.includes(temp[i])) {
      temp.splice(i, 1)
    }
  }
  blockGColor.value = temp.join('')
})

function checkAndApply() {
  let empty = true,
    cCode = true
  err.value = ''
  if (
    !Boolean(aSteps.value) ||
    !Boolean(aTime.value) ||
    borderRadius.value < 0 ||
    elementGColor.value.length == 0 ||
    blockGColor.value.length == 0
  ) {
    err.value += t('code.error.empty')
  } else {
    empty = false
  }
  if (
    (elementGColor.value.length === 6 || elementGColor.value.length === 3) &&
    (blockGColor.value.length === 6 || blockGColor.value.length === 3)
  ) {
    cCode = false
  } else {
    err.value += t('code.error.cCode')
  }

  if (!empty && !cCode) {
    err.value = ''
    global.waveSteps = aSteps.value
    global.textWave = elementGColor.value
    global.blockWave = blockGColor.value
    global.animationTime = aTime.value
    global.borderRadius = borderRadius.value
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/breakpoints';
@import '../assets/sass/variables';

#controls {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 97;
  display: flex;
  justify-content: center;
  .wrapper {
    border: 3px solid black;
    display: flex;
    justify-content: space-between;
    top: 0;
    #bg-colors {
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 40px;
      column-gap: 10px;
      top: 100%;
      background-color: #212a3e;
      border-radius: 0 0 20px 20px;
      button {
        flex-shrink: 0;
        border: 3px solid white;
        cursor: pointer;
        flex-grow: 0;
        padding: 8px;
        transform: scale(--scale);
        border-radius: 50%;
        background-color: var(--button-color);
      }
    }
    #locale-changer-mobile {
      display: none;
    }
    #locale-changer {
      display: flex;
      align-items: center;
      padding: 0;
      height: auto;
      padding: 0;
      top: 50%;
      &:hover {
        top: 99%;
      }
      button {
        cursor: pointer;
        background-color: #394867;
        border: none;
        color: #f1f6f9;
        outline: none;
        padding: 10px;
        width: 50px;
        &.active {
          background-color: #212a3e;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
    #code {
      position: absolute;
      width: 60%;
      padding: 50px 20px !important;
      top: -100vh;
      bottom: auto;
      left: 0;
      z-index: 97;
      background-color: #212a3e;
      max-height: 85vh;
      left: 50%;
      overflow-y: auto;
      transform: translateX(-30%);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      &.active {
        top: 100%;
      }
      #code-changer {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        width: 100%;

        * {
          color: #f1f6f9;
        }
        .code-polygon {
          letter-spacing: 0.5px;
          word-spacing: 1px;
          background-color: #0d1117;
          width: 100%;
          border-radius: 10px;
          padding: 20px 15px;
          display: flex;
          flex-direction: column;
          row-gap: 5px;
          &:nth-child(2) {
            max-height: 40vh;
            overflow-y: auto;
          }
          .line {
            margin-left: 2ch;

            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              margin-left: 0;
            }
          }
          & *::selection {
            background-color: #264f78;
            color: white;
          }
          &::selection {
            background-color: #264f78;
            color: white;
          }
          * {
            font-family: 'Consola', sans-serif;
            color: white;
          }
          .blue {
            color: #68c0ff;
          }
          .red {
            color: #ff7b55;
          }
          .green {
            color: #7ee778;
          }
          .t4 {
            margin-left: 4ch;
          }
        }
        .main-block {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          column-gap: 10px;
          row-gap: 20px;
          button[type='submit'] {
            width: auto;
            padding: 8px;
            border: none;
            outline: none;
            background-color: #0d1117;
            color: white;
            border-radius: 10px;
            font-family: 'Consola', sans-serif;
            border: 2px solid #0d1117;
            cursor: pointer;
            &:hover {
              background-color: #212a3e;
              color: white;
              border-color: white;
            }
            &:active {
              background-color: #264f78;
            }
          }
          .control-block {
            width: 10ch;
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 5px;
            input {
              width: calc(7ch + 20px);
              padding: 10px;
              border: none;
              outline: none;
              background-color: #0d1117;
              color: white;
              border-radius: 10px;
              font-family: 'Consola', sans-serif;
            }
            span {
              width: 12ch;
              font-size: 10pt;
              text-align: center;
            }
          }
        }
      }
      & > button {
        position: absolute;
        cursor: pointer;
        top: 100%;
        width: 20ch;
        background-color: #212a3e;
        color: #f1f6f9;
        font-weight: 600;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    @include media('<=1280px') {
      width: 100%;
      padding: 0 20px;
    }
    @include media('<=tablet') {
      #bg-colors {
        top: calc(100vh - 50px);
        height: 50px;
        padding: 0 20px;
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        column-gap: 20px;
      }
      #code {
        width: 90%;
        bottom: 0;
        background-color: #212a3e;
        height: 75vh;
        left: 50%;
        transform: translateX(-50%);
        &.active {
          bottom: -75vh;
        }
      }
    }
    @include media('<=phone') {
      #bg-colors {
        width: 100%;
        top: calc(100vh - 50px);
        height: 50px;
        padding: 20px 10px;
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        column-gap: 10px;
      }
    }
  }
}

.number {
  label {
    border-radius: 10px;
    overflow: hidden;
    button {
      position: absolute;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      right: 0 !important;
      top: 0;
      background-color: transparent;
      height: 50%;
      width: 1ch;
      padding: 0 10px;
      cursor: pointer;
      &:nth-child(3) {
        top: 50%;
      }
      &:hover {
        background-color: #212a3e;
      }
      &:active {
        background-color: #264f78;
      }
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
      padding-right: 15px;
    }
    input[type='number'] {
      z-index: 1;
      -moz-appearance: textfield;
    }
  }
}
.hex {
  label {
    span {
      position: absolute;
      left: 0;
      text-align: center;
      width: 20px !important;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      color: rgba($color: #68c0ff, $alpha: 0.8) !important;
    }
    input[type='text'] {
      width: 11ch !important;
      padding-left: 20px !important;
    }
  }
}
.error {
  color: red !important;
}

.copy {
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 10px;
  height: auto;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.1);
  }
  img {
    width: 20px;
    opacity: 0.8;
  }
}
.pl0 {
  margin-left: 0 !important;
}

.code-wrapper {
  padding: 0;
  .code-changers {
    position: absolute;
    right: 20px;
    display: flex;
    column-gap: 10px;
    bottom: 100%;
    button {
      padding: 5px 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #0d1117;
      font-weight: 600;
      opacity: 0.5;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
      &.active {
        opacity: 1;
      }
    }
  }
}

#toggle-code,
#toggle-code-2 {
  position: absolute;
  top: 100%;
  padding: 10px;
  right: 120px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #212a3e;
  color: $light;
  font-weight: 600;
  cursor: pointer;
}
#toggle-code-2 {
  top: 0% !important;
  background-color: red !important;
  left: auto !important;
  right: 0px !important;
  position: absolute;
}
</style>
