<template>
  <main>
    <bar />
    <banner />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Bar from '~/components/pc/Bar'
import Banner from '~/components/pc/Banner'

export default Vue.extend({
  components: {
    Bar,
    Banner
  },
  async asyncData ({ $content, store: { commit } }) {
    const homepageData: ContentJson = await $content('database/homepage').fetch()
    commit('database/homepage', homepageData.data)
  }
})
</script>

<style lang="scss">
// reset
a {
  color: inherit;
  text-decoration: none;
}
</style>

// asyncData 方法在 .tsx 中没有执行

// import { Vue, Component } from 'vue-property-decorator'
// import Bar from '~/components/pc/Bar'
// import Banner from '~/components/pc/Banner'

// @Component
// export default class PageIndex extends Vue {
//   async asyncData({ $content, store: { commit } }) {
//     console.log(123123123123)
//     const homepageData: ContentJson = await $content('database/homepage').fetch()
//     commit('database/homepage', homepageData.data)
//   }

//   render() {
//     return (
//       <main>
//         <Bar />
//         <Banner />
//       </main>
//     )
//   }
// }
