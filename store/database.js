// 对应 content 中的 database
// 这只是一个桥梁

export const state = () => ({
  homepage: {}
})

export const mutations = {
  homepage (state, data) {
    state.homepage = data
  }
}
