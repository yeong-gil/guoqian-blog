<template>
  <header :class="$style.header">
    <div :class="$style.headerLogo">Portfolio</div>
    <nav>
      <ul :class="$style.headerMenu">
        <li :class="$style.headerMenuItem">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li :class="$style.headerMenuItem">
          <router-link to="/About">
            About
          </router-link>
        </li>
        <li :class="$style.headerMenuItem">
          <router-link to="/Portfolio">
            Portfolio
          </router-link>
        </li>
        <li :class="$style.headerMenuItem">
          <router-link to="/Practice">
            Practice
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" module>
.header {
  position: relative;
  text-align: center;
  @include responsive ('tablet') {
    color: blue;
  }
  @include responsive ('mobile') {
    color: green;
  }
  @include responsive ('desktop') {
    padding: 40px 0px;
  }
  &Logo {
    color: #2c2f83;
    font-size: 40px;
  }
  &Menu {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    &Item {
      padding: 5px;
      color: #2c2f83;
      &.active {
        color: #4145ac; 
      }
    }
  }
}
</style>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {
  
}
</script>