<template>
  <div class="header-wrapper">
    <Logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { namespace } from 'vuex-class';
import Logo from './Logo.vue';

const auth = namespace('auth');

@Component({ components: { Logo } })
export default class Header extends Vue {
  @auth.Getter('authenticated') userAuthenticated: boolean;
}
</script>

<style scoped lang="sass">
.header-wrapper
  height: 84px
  width: 100%
  padding: 1em 2.2em
  color: #fff
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  align-items: center
  background: $primary-color
  background: $primary-gradient
  flex: none
  &:after
    content: ''
    position: absolute
    top: -118px
    left: -270px
    height: 500px
    width: 700px
    background-repeat: no-repeat
    background-position: 50%
    background-size: contain
</style>
