<template>
  <Layout>
    <div>MAIN PAGE</div>
    <TransitionSlide>
      <el-button icon="el-icon-paperclip" @click="onClick">Toast!</el-button>
    </TransitionSlide>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '@components/molecules/Layout.vue';
import { namespace } from 'vuex-class';
import TransitionSlide from '@components/molecules/TransitionSlide.vue';

const storage = namespace('storage');

@Component({
  components: {
    Layout,
    TransitionSlide,
  },
})
export default class Main extends Vue {
  @storage.Action updateTreeNodeChildren;

  @storage.Mutation resetTree;

  onClick(): void {
    this.$toast.success('SUCCESS!');
  }
}
</script>

<style scoped lang="sass">
.ic-filter-wrapper
  width: 100%
  background-color: #{$secondary-light}
</style>
