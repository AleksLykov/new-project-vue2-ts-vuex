<template>
  <Layout>
    <div>ABOUT</div>
  </Layout>
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Layout from '@components/molecules/Layout.vue';
import { AnyObject } from '@models/common';

const main = namespace('main');

@Component({
  components: {
    Layout,
  },
})
export default class About extends Vue {
  @main.State lastFilter: Record<string, AnyObject> | null;

  @main.Mutation setFilter;

  @Ref('results') resultsRef;

  @Watch('query') onQueryChange(): void {
    console.log('query');
  }

  pageNumber = 1;

  /**
   * Getter
   */
  get isName(): boolean {
    return true;
  }

  /**
   * Method
   * @param id - current id
   */
  // async loadData(id: number) {
  //   const data = await getData(id);
  // }

  /**
   * Method
   * @param num - current number
   */
  onChange(num: number): void {
    this.pageNumber = num;
  }

  mounted(): void {
    // this.loadData(2);
  }
}
</script>

<style scoped lang="sass"></style>

<style lang="sass"></style>
