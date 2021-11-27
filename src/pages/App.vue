<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {
}
</script>

<style lang="sass">
@import '@styles/uikit.sass'
*
  padding: 0
  margin: 0
  box-sizing: border-box
html
  overflow-y: auto !important
#app
  height: 100%
  font-family: 'PT Sans', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #{$text-primary}
.v-application a
  text-decoration: none
.brbt
  border-bottom: 1px solid #{$divider}
</style>
