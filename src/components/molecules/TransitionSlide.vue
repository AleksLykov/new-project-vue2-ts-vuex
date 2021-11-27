<template>
  <transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
/* eslint-disable no-param-reassign */

import { Component, Vue } from 'vue-property-decorator';
import { AnyObject } from '@models/common';

@Component
export default class TransitionSlide extends Vue {
  beforeEnter(element: AnyObject): void {
    requestAnimationFrame(() => {
      if (!element.style.height) {
        element.style.height = '0px';
      }

      element.style.display = null;
    });
  }

  enter(element: AnyObject): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.style.height = `${element.scrollHeight}px`;
      });
    });
  }

  afterEnter(element: AnyObject): void {
    element.style.height = null;
  }

  beforeLeave(element: AnyObject): void {
    requestAnimationFrame(() => {
      if (!element.style.height) {
        element.style.height = `${element.offsetHeight}px`;
      }
    });
  }

  leave(element: AnyObject): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.style.height = '0px';
      });
    });
  }

  afterLeave(element: AnyObject): void {
    element.style.height = null;
  }
}
</script>

<style scoped lang="sass">
.enter-active, .leave-active
  overflow: hidden
  transition: height .5s ease-in-out
</style>
