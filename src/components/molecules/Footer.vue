<template>
  <div class="footer-wrapper">FOOTER</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="sass">
.footer-wrapper
  font-size: $p4
  height: 55px
  width: 100%
  padding: 1.2em 4vw
  background: $primary-color
  background: $primary-gradient
  display: flex
  flex-flow: row nowrap
  flex-shrink: 0
  color: $backgroundW
  text-align: left
  justify-content: space-between
</style>
