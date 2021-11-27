<template>
  <div class="main-wrapper">
    <Header />
    <HeaderNavigation />
    <vue-progress-bar style="margin-top: 124px"></vue-progress-bar>
    <div class="layout">
      <div id="slot-wrapper" class="slot-wrapper">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Header from '@components/molecules/Header.vue';
import HeaderNavigation from '@components/molecules/HeaderNavigation.vue';
import Footer from '@components/molecules/Footer.vue';
import { namespace } from 'vuex-class';

const lk = namespace('lk');

@Component({
  components: {
    Header,
    HeaderNavigation,
    Footer,
  },
})
export default class Layout extends Vue {
  @lk.Action updateNotificationsCount;

  @Prop(Boolean) readonly leftPane: boolean;

  updateNotificationsInterval: number | null = null;

  mounted(): void {
    console.log('on mounted');
  }
}
</script>

<style scoped lang="sass">
.main-wrapper
  min-width: 1180px
  height: 100vh
  display: flex
  flex-flow: column nowrap
  justify-content: stretch
.layout
  position: relative
  display: flex
  flex-flow: row nowrap
  flex: 1 0 auto
.slot-wrapper
  min-height: 100%
  min-width: 920px !important
  width: 100%
  display: flex
  justify-content: flex-start
  flex-flow: column nowrap
  background-color: $backgroundG
</style>
