// 对应 content 中的 database
// 这只是一个桥梁

import { ActionTree, MutationTree } from 'vuex'
import { contentFunc } from '@nuxt/content/types/content'
import { ContentData } from '~/types'

export const state = () => ({
  bar: {},
  homepage: {}
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  'bar:set' (state, data) {
    state.bar = data
  },
  'homepage:set' (state, data) {
    state.homepage = data
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async 'bar:get' ({ commit }) {
    const $content = this.$content as unknown as contentFunc
    const barData = await $content('database/bar').fetch() as ContentData
    commit('bar:set', barData.data)
  },
  async 'homepage:get' ({ commit }) {
    const $content = this.$content as unknown as contentFunc
    const homepageData = await $content('database/homepage').fetch() as ContentData
    commit('homepage:set', homepageData.data)
  }
}
