<template>
  <div id="content">
    <section id="s-hero">
      <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[0]') }}</h2>
      <p class="pre-element">#{{ $t('content.text') }}</p>
      <p class="pre-element">#{{ $t('content.text') }}</p>
    </section>
    <section id="s-service">
      <div>
        <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[1]') }}</h2>
        <p class="pre-element">#{{ $t('content.text') }}</p>
        <p class="pre-element">#{{ $t('content.text') }}</p>
        <p class="pre-element">#{{ $t('content.text') }}</p>
        <p class="pre-element">#{{ $t('content.text') }}</p>
        <p class="pre-element">#{{ $t('content.text') }}</p>
      </div>
      <div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
      </div>
    </section>
    <section id="s-cards">
      <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[2]') }}</h2>
      <p class="pre-element">#{{ $t('content.text') }}</p>
      <div id="cards">
        <div v-for="n in cards" class="pre-block">
          <div class="pre-element image">#{{ $t('content.image') }}</div>
          <h3 class="pre-element">#{{ $t('content.titleT') }}</h3>
          <p class="pre-element">#{{ $t('content.subtitle') }}</p>
          <div class="social-media">
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
          </div>
        </div>
      </div>
      <button class="pre-element">#{{ $t('content.button') }}</button>
    </section>
    <section id="s-images">
      <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[3]') }}</h2>
      <p class="pre-element">#{{ $t('content.text') }}</p>
      <div class="gallery">
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
        <div class="pre-element image">#{{ $t('content.image') }}</div>
      </div>
    </section>
    <section id="s-list">
      <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[4]') }}</h2>
      <p class="pre-element">#{{ $t('content.text') }}</p>
      <div class="list">
        <div v-for="n in list" class="pre-block">
          <div>
            <h3 class="pre-element">#{{ $t('content.titleT') }}</h3>
            <p class="pre-element">#{{ $t('content.text') }}</p>
          </div>
          <button class="pre-element">#{{ $t('content.button') }}</button>
        </div>
      </div>
    </section>
    <footer id="footer">
      <section>
        <div class="left">
          <h2 class="pre-element">#{{ $t('content.preTitle') + $t('content.title[5]') }}</h2>
          <p class="pre-element">#{{ $t('content.text') }}</p>
          <p class="pre-element">#{{ $t('content.text') }}</p>
          <p class="pre-element">#{{ $t('content.text') }}</p>
          <div class="social-media">
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
          </div>
        </div>
        <div class="right">
          <div v-for="n in 3">
            <h3 class="pre-element">#{{ $t('content.preTitle') }}</h3>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
            <a class="pre-element">#{{ $t('content.link') }}</a>
          </div>
        </div>
      </section>
      <section>
        <p class="pre-element">#{{ $t('content.text') }}</p>
        <div>
          <a class="pre-element">#{{ $t('content.link') }}</a>
          <a class="pre-element">#{{ $t('content.link') }}</a>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cards = ref(4)
const list = ref(6)
</script>

<style lang="scss" scoped>
@import '/src/assets/sass/_variables.scss';
@import '/src/assets/sass/_breakpoints.scss';
@import '/src/assets/sass/_mixins.scss';

* {
  color: transparent;
  text-align: center;
}
*:hover {
  color: black;
}

button,
a {
  cursor: pointer;
}

.pre-element,
.pre-block {
  background-color: transparent;
  overflow: hidden;
  inset: 0;
  animation-name: loop;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: var(--animation-time);
  border-radius: var(--border-radius);
  background-size: var(--bg-size);
}
.pre-element {
  background-image: var(--element-gradient);
}
.pre-block {
  background-image: var(--block-gradient);
}
.image {
  width: auto;
  min-height: 200px;
  @include flexCenter(row);
}
#content {
  width: 100%;
  background-color: transparent;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
  h2 {
    padding: 16px 100px;
  }
  h3 {
    padding: 14px 36px;
  }
  p {
    width: 100%;
    padding: 12px;
  }
  & > section {
    width: 100%;
    min-height: 720px;
    border-bottom: 2px solid rgba($color: #000000, $alpha: 0.2);
    padding: 80px 5%;
  }
  #s-hero {
    @include flexCenter(column);
    row-gap: 16px;
    padding: 50px 15%;
    padding-top: calc(50px + 7vh);
    h2 {
      margin-bottom: 20px;
    }
    p:last-child {
      width: 80%;
    }
  }
  #s-service {
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 40% 50%;
    & > div {
      &:nth-child(1) {
        @include flexCenter(column);
        align-items: flex-start;
        row-gap: 16px;
        h2 {
          margin-bottom: 16px;
        }
        p:last-child {
          width: 80%;
        }
      }
      &:nth-child(2) {
        display: grid;
        grid-template-columns: 47.5% 47.5%;
        column-gap: 5%;
        row-gap: 24px;
        .image:last-child {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }
  }
  #s-cards {
    @include flexCenter(column);
    row-gap: 24px;
    & > p {
      width: 80%;
      margin-bottom: 16px;
    }
    #cards {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 23%);
      justify-content: space-between;
      margin-bottom: 16px;
      & > div {
        padding: 24px;
        @include flexCenter(column);
        row-gap: 16px;
        .image {
          flex-shrink: 0;
          width: 160px;
          height: 160px;
          min-height: 160px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
      }
    }
  }
  #s-images {
    @include flexCenter(column);
    row-gap: 24px;
    & > p {
      width: 80%;
      margin-bottom: 16px;
    }
    .gallery {
      width: 100%;
      display: grid;
      gap: 24px;
      justify-content: space-between;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 200px);
      .image:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }
      .image:nth-child(3) {
        grid-row: 2 / 4;
      }
      .image:nth-child(7) {
        grid-column: 2 / 4;
      }
    }
  }
  #s-list {
    @include flexCenter(column);
    row-gap: 24px;
    & > p {
      width: 80%;
      margin-bottom: 16px;
    }
    .list {
      @include flexCenter(column);
      row-gap: 24px;
      width: 100%;
      .pre-block {
        width: 100%;
        display: grid;
        grid-template-columns: 60% 20%;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        div {
          @include flexCenter(column);
          align-items: flex-start;
          row-gap: 16px;
          h3 {
            padding: 10px 15%;
          }
        }
        button {
          padding: 16px;
        }
      }
    }
  }
  footer {
    display: grid;
    grid-template-rows: 90% 10%;
    width: 100%;
    min-height: 720px;
    section {
      &:nth-child(1) {
        h2 {
          padding: 16px 50px;
        }
        border-bottom: 2px solid rgba($color: #000000, $alpha: 0.2);
        padding: 80px 5%;
        display: grid;
        grid-template-columns: 30% 50%;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
        }
        .right {
          display: flex;
          flex-wrap: wrap;
          row-gap: 30px;
          column-gap: 20px;
          div {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            h3 {
              margin-bottom: 10px;
            }
          }
        }
      }
      &:nth-child(2) {
        padding: 20px 5%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          flex-basis: 300px;
        }
        div {
          display: flex;
          column-gap: 10px;
        }
      }
    }
  }
}

.social-media {
  margin-top: 10px;
  @include flexCenter(row);
  column-gap: 10px;
  a {
    @include flexCenter(row);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 0.4em;
  }
}

@include media('<=tablet') {
  #s-service {
    grid-template-columns: 100% !important;
    row-gap: 60px;
  }
  #cards {
    grid-template-columns: repeat(2, 45%) !important;
    row-gap: 40px;
  }
}

@include media('<=phone') {
  h2 {
    font-size: 20px !important;
    padding: 16px 30px !important;
  }
  #cards {
    grid-template-columns: 100% !important;
    row-gap: 40px;
  }
  .gallery {
    grid-template-columns: 100% !important;
    grid-template-rows: auto !important;
    .image {
      grid-column: auto !important;
      grid-row: auto !important;
    }
  }
  footer {
    section:nth-child(1) {
      display: flex !important;
      flex-direction: column !important;
      row-gap: 40px;
    }
    .right {
      justify-content: center;
      row-gap: 20px;
    }
    section:nth-child(2) {
      p {
        flex-basis: 100px !important;
      }
    }
  }
}
a.pre-element {
  padding: 5px 10px;
}
</style>
