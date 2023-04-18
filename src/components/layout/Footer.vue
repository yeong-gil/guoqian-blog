<template>
  <footer :class="$style.footer">
    <section :class="$style.footerItem">
      <h2 :class="$style.footerTitle">지연이의 성장기</h2>
    </section>
    <section :class="$style.footerItem">
      <p :class="$style.footerContent">info@mysite.com</p>
    </section>
    <section :class="$style.footerItem">
      <p :class="$style.footerCopy">©2023 지연이의 성장기</p>
    </section>
  </footer>
</template>
<style lang="scss" module>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  @include responsive ('tablet') {
    /* color: blue; */
  }
  @include responsive ('mobile') {
    /* color: green; */
  }
  @include responsive ('desktop') {
    padding: 40px 0px 0px;
  }
  &Item {
    color: #2c2f83;
    margin-bottom: 30px;
  }
}
</style>
<script lang="ts">

import { Vue } from 'vue-class-component'

export default class Footer extends Vue {
  
}
</script>