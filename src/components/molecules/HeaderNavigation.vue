<template>
  <div
    class="header-navigation-wrapper"
    v-loading="loading"
    element-loading-custom-class="none-loading"
  >
    <div class="nav menu-zone">
      <template v-if="!isSearchRow">
        <router-link
          v-for="path in paths"
          :key="path.path"
          v-can="path.permission"
          :to="path.path"
          class="nav-item"
        >
          {{ path.name }}
          <span v-if="path.name === 'Main' && notificationsCount" class="notification">{{
            formattedNotificationCount
          }}</span>
        </router-link>
      </template>
      <a @click="clickSearch">
        <v-icon class="header-navigation__search-icon">{{
          isSearchRow ? 'mdi-close' : 'mdi-magnify'
        }}</v-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { NavItem } from '@models/common';

const main = namespace('main');
const auth = namespace('auth');

@Component
export default class HeaderNavigation extends Vue {
  @main.State((state) => state.navmenu) paths: Array<NavItem>;

  @auth.Getter('authenticated') userAuthenticated: boolean;

  @Watch('$route') fetchRoute(): void {
    console.log('on change route');
  }

  isSearchRow = false;

  notificationsCount = 2;

  get loading(): boolean {
    return !this.userAuthenticated;
  }

  get formattedNotificationCount(): string {
    return this.notificationsCount > 9 ? '9+' : this.notificationsCount.toString();
  }

  clickSearch(): void {
    this.$toast.success('Need search page!');
  }
}
</script>

<style scoped lang="sass">
.header-navigation-wrapper
  z-index: 700
  box-shadow: 0 7px 6px -4px $secondary
  position: relative
  height: 40px
  min-height: 40px
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
.nav a, .nav .header-navigation__search-icon-wrapper
  height: 40px
  line-height: 40px
  white-space: nowrap
  font-size: #{$h5}
  padding: 0 10px
  border-right: 1px solid $divider
  font-weight: bold
  text-decoration: none
  color: $secondary
  text-align: center
  transition: background-color .2s ease-in-out
  .header-navigation__search-icon
    color: $secondary
  &:hover
    background-color: $action-hover
  &:first-child
    border-left: 1px solid $divider
  &.router-link-exact-active
    color: $primary
  &.router-link-active
    color: $primary
.menu-zone
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
.search-row-wrapper
  height: 40px
  line-height: 40px
  border-right: 1px solid $divider
  padding: 0 15px
  .header-navigation__search-icon
    color: $secondary
    margin-top: 4px
.search-row__input
  height: 40px
  margin: 0 5px 0 15px
  width: 650px
.header-navigation__search-icon
  color: $secondary
  margin-bottom: 2px
.header-navigation__search-button
  margin-top: 2px
.nav-item
  position: relative
.notification
  position: relative
  right: -2px
  top: -5px
  font-size: #{$p2}
  color: #{$primary}
</style>
