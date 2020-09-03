<template>
  <main>
    <bar />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Bar from '~/components/pc/Bar'

export default Vue.extend({
  components: {
    Bar
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
