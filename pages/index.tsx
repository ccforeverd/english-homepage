
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '~/components/pc/Banner'
import { BlockStyle1 } from '~/components/pc/HomepageBlock'

import '~/assets/style/reset.scss'

@Component
export default class PageIndex extends Vue {
  protected showContent = false

  protected async asyncData ({ store: { dispatch } }) {
    await Promise.all([
      dispatch('database/global:get'),
      dispatch('database/homepage:get')
    ])
    return {
      showContent: true
    }
  }

  protected layout (context) {
    // TODO 检测移动端时使用 h5
    // const ua: string = context.req.headers['user-agent']
    // const isMobile: boolean = !!ua.toLowerCase().match(/(iphone|ipod|ipad|android)/)
    // 可以尝试通过服务端中间件加入到上下文中
    return 'pc'
  }

  protected render() {
    return this.showContent && (
      <main>
        <Banner />
        <BlockStyle1 />
      </main>
    )
  }
}
