<template>
  <header>
    <div class="wrapper">
      <div id="mobileMenu">
        <button @click="menuToggle('open')" class="menu-button">
          <img src="../assets/images/3844442_dot_menu_more_vertical_icon.svg" alt="menu" />
        </button>
        <nav :style="{ bottom: global.isMenuOpen ? '0' : '-100vh' }">
          <a @click="menuToggle('close')" href="#s-hero">{{ $t('content.title[0]') }}</a>
          <a @click="menuToggle('close')" href="#s-service">{{ $t('content.title[1]') }}</a>
          <a @click="menuToggle('close')" href="#s-cards">{{ $t('content.title[2]') }}</a>
          <a @click="menuToggle('close')" href="#s-images">{{ $t('content.title[3]') }}</a>
          <a @click="menuToggle('close')" href="#s-list">{{ $t('content.title[4]') }}</a>
          <a @click="menuToggle('close')" href="#footer">{{ $t('content.title[5]') }}</a>
          <button @click="menuToggle('close')">{{ $t('content.close') }}</button>
        </nav>
      </div>
      <nav id="desktopMenu">
        <a href="#s-hero">{{ $t('content.title[0]') }}</a>
        <a href="#s-service">{{ $t('content.title[1]') }}</a>
        <a href="#s-cards">{{ $t('content.title[2]') }}</a>
        <a href="#s-images">{{ $t('content.title[3]') }}</a>
        <a href="#s-list">{{ $t('content.title[4]') }}</a>
        <a href="#footer">{{ $t('content.title[5]') }}</a>
      </nav>
      <div>
        <h2>{{ $t('mainTitle') }}</h2>
        <span @click="infoToggle">
          <Transition name="icon-change" mode="out-in">
            <img v-if="isInfoOpen" src="../assets/images/8723144_x_icon.svg" alt="close" />
            <img v-else src="../assets/images/8542265_question_mark_icon.svg" alt="info" />
          </Transition>
        </span>
      </div>
    </div>
  </header>
  <Info></Info>
</template>

<script setup>
import Info from './Info.vue'

import { useGlobalValuesStore } from '../stores/global_values'
import { computed, ref } from 'vue'
const global = useGlobalValuesStore()

const isInfoOpen = ref(false)

function infoToggle() {
  if (!isInfoOpen.value) {
    global.isInfo = 0
    global.isCodeOpen = false
    isInfoOpen.value = !isInfoOpen.value
  } else {
    global.isInfo = 95
    isInfoOpen.value = !isInfoOpen.value
  }
}
function menuToggle(isIt) {
  if (isIt === 'close') {
    global.isMenuOpen = false
  } else {
    isInfoOpen.value = true
    infoToggle()
    global.isCodeOpen = false
    global.isMenuOpen = true
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/breakpoints';

.wrapper {
  display: flex;
  justify-content: space-between;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0;
  height: 80px;
  width: 100%;
  z-index: 99;
  background-color: #212a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid red;
  * {
    color: #f1f6f9;
    font-weight: 500;
  }
  .menu-button {
    display: none;
  }
  nav {
    display: flex;
    column-gap: 20px;
    transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    a {
      font-size: 1.1em;
      overflow: hidden;
      z-index: 2;
      padding: 10px;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 80%;
        left: 0;
        top: 120%;
        background-color: #394867;
        z-index: -1;
        border-radius: 5px;
        transition: 0.25s ease;
      }
      &:hover::before {
        top: 10%;
      }
    }
  }
  div {
    display: flex;
    align-items: center;
    column-gap: 20px;
    h2 {
      font-weight: 700;
    }
    span {
      cursor: pointer;
      width: 3.5vh;
      height: 3.5vh;
      border-radius: 50%;
      border: 3px solid black;
      filter: invert(100%) sepia(25%) saturate(6448%) hue-rotate(179deg) brightness(114%)
        contrast(95%);
      display: flex;
      align-items: center;
      justify-content: center;
      &::selection {
        background-color: transparent;
      }
      img {
        height: 65%;
        &::selection {
          background-color: transparent;
        }
      }
    }
  }
  @include media('<=tablet') {
    .menu-button {
      display: flex;
      padding: 10px;
      background-color: transparent;
      background-color: rgba($color: #394867, $alpha: 0.4);
      border-radius: 10px;
      img {
        height: 3vh;
        filter: invert(100%);
      }
    }
    nav {
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      bottom: -100vh;
      z-index: 999;
      background-color: rgba($color: #212a3e, $alpha: 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 2em;
      a {
        font-size: 2em;
      }
      button {
        background-color: #394867;
        font-weight: 600;
        font-size: 2em;
        margin-top: 20px;
        border-radius: 10px;
      }
    }
  }
}

@include media('>tablet') {
  #desktopMenu {
    display: flex;
  }
  #mobileMenu {
    display: none;
  }
}
@include media('<=tablet') {
  #desktopMenu {
    display: none;
  }
  #mobileMenu {
    display: flex;
    row-gap: 5px;
  }
  h2 {
    font-size: 1.2em;
    text-align: center;
  }
  #mobileMenu a,
  #mobileMenu button {
    font-size: 1.5em;
  }
}
</style>
