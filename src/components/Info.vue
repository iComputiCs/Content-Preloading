<template>
  <div id="info">
    <div class="wrapper">
      <h1>{{ $t('mainTitle') }}</h1>
      <p>
        {{ $t('info.desc') }}
      </p>
      <p>
        {{ $t('info.invitation') }}
        <a href="">Instagram</a>, <a href="">Facebook</a>, <a href="">LinkedIn</a>,
        <a href="">Twitter</a> <img src="../assets/images/instagram-like-icon.png" alt="like" />
      </p>
      <a target="_blank" href="https://github.com/iComputiCs/Content-Preloading"
        ><h3>{{ $t('info.sc') }}</h3></a
      >
      <h3>{{ $t('info.tech') }}</h3>
      <p>{{ $t('info.techs') }}</p>
      <p>{{ $t('info.dep') }}</p>
      <h3>{{ $t('info.ins') }}:</h3>
      <p>
        <a target="_blank" href="https://www.pinterest.com/pin/365917538488524793/">{{
          $t('info.str')
        }}</a>
        <a target="_blank" href="https://youtu.be/rdtTCVzTwSQ">{{ $t('info.an') }}</a>
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#info {
  position: fixed;
  left: 0;
  top: var(--info-bar);
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 98;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 100px;
  padding-bottom: 80px;
  justify-content: center;
  overflow-y: auto;
  background-color: rgba($color: #212a3e, $alpha: 0.95);
  h3 {
    margin-top: 20px;
    font-size: 1.5em;
  }
  * {
    color: #eeeeee;
  }
  a {
    text-decoration: underline;
    margin: 0 10px;
  }
  .wrapper {
    width: 1280px;
    height: auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    p {
      font-size: 1.1em;
      line-height: 1.5em;
      font-weight: 500;
    }
    img {
      height: 2em;
      transform: translateY(10px);
    }
  }
}
</style>
