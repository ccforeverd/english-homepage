
import { Vue, Component } from 'nuxt-property-decorator'
import Banner from '~/components/pc/Banner'

import './style.scss'

@Component
export default class PageIndex extends Vue {
  async asyncData({ store: { dispatch } }) {
    await Promise.all([
      dispatch('database/bar:get'),
      dispatch('database/homepage:get')
    ])
  }

  layout (context) {
    // TODO 检测移动端时使用 h5
    // const ua: string = context.req.headers['user-agent']
    // const isMobile: boolean = !!ua.toLowerCase().match(/(iphone|ipod|ipad|android)/)
    // 可以尝试通过服务端中间件加入到上下文中
    return 'pc'
  }

  render() {
    return (
      <main>
        <Banner />
      </main>
    )
  }
}
