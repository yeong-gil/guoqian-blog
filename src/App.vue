<template>
  <div id="app">
    <Header></Header>
    <!-- <transition > -->
      <router-view />
    <!-- </transition> -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue  } from 'vue-class-component';
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

@Options({
  components: {
    Header,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scope>
#app {
  background-color: #FDEEE2;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
