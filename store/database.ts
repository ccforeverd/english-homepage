// 对应 content 中的 database
// 这只是一个桥梁

import { ActionTree, MutationTree } from 'vuex'
import { contentFunc } from '@nuxt/content/types/content'
import { ContentData } from '~/types'

export const state = () => ({
  global: {},
  homepage: {}
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  'global:set' (state, data) {
    state.global = data
  },
  'homepage:set' (state, data) {
    state.homepage = data
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async 'global:get' ({ commit }) {
    const $content: contentFunc = this.$content as unknown as contentFunc
    const globalData: ContentData = await $content('database/global').fetch() as ContentData
    commit('global:set', globalData.data)
  },
  async 'homepage:get' ({ commit }) {
    const $content: contentFunc = this.$content as unknown as contentFunc
    const homepageData: ContentData = await $content('database/homepage').fetch() as ContentData
    commit('homepage:set', homepageData.data)
  }
}
