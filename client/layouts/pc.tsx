
import { Vue, Component } from 'nuxt-property-decorator'
import Bar from '~/components/pc/Bar'
import Footer from '~/components/pc/Footer'

@Component
export default class LayoutPC extends Vue {
  render() {
    return (
      <main>
        <Bar />
        <nuxt />
        <Footer />
      </main>
    )
  }
}
