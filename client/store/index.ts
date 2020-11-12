import { getAccessorType } from 'typed-vuex'

// Import all your submodules
import * as database from '~/store/database'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  // state,
  // getters,
  // mutations,
  // actions,
  modules: {
    // The key (submodule) needs to match the Nuxt namespace (e.g. ~/store/submodule.ts)
    database
  }
})
