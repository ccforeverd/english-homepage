
import { Vue, Component } from 'vue-property-decorator'

import style from './style.scss'

@Component
export default class Banner extends Vue {
  protected render () {
    const { width, height, images } = this.$store.state.database.homepage.banner

    return (
      <div class={style.wrap}>
        <div class={style.main}>
          {
            images.map(item => (
              <div class={style.item} style={{ height: height + 'px' }}>
                <div class={style.left} style={{ background: item.left }} />
                <img style={{
                  display: 'block',
                  maxWidth: width + 'px',
                  height: height + 'px',
                  width: '100%'
                }} src={item.src} alt='banner' />
                <div class={style.right} style={{ background: item.right }} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
