<template>
  <router-link :to="disableLink ? '#' : '/'" class="logo-wrapper">
    <div class="logo-label">
      <h3>LOGO label</h3>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
  @Prop(Boolean) disableLink: boolean;
}
</script>

<style scoped lang="sass">
.logo-wrapper
  color: #fff
  user-select: none
  display: flex
  flex-flow: row nowrap
  text-align: left
  margin-right: auto
h3
  font-size: #{$h3}
.logo-label
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: flex-start
  margin: 0 0 0 10px
</style>
