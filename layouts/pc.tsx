
import { Vue, Component } from 'nuxt-property-decorator'
import Bar from '~/components/pc/Bar'

@Component
export default class LayoutPC extends Vue {
  render() {
    return (
      <main>
        <Bar />
        <nuxt />
      </main>
    )
  }
}
