
import { Vue, Component } from 'nuxt-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import style from './style.scss'
import 'swiper/swiper-bundle.css'

@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class Banner extends Vue {
  protected render () {
    const { width, height, images } = this.$store.state.database.homepage.banner

    return (
      <div class={style.wrap} key='banner'>
        <swiper class={style.main} aaa='123'>
          {
            images.map(item => (
              <swiper-slide class={style.item} style={{ height: height + 'px' }}>
                <div class={style.left} style={{ background: item.left }} />
                <img style={{
                  display: 'block',
                  maxWidth: width + 'px',
                  height: height + 'px',
                  width: '100%'
                }} src={item.src} alt='banner' />
                <div class={style.right} style={{ background: item.right }} />
              </swiper-slide>
            ))
          }
        </swiper>
      </div>
    )
  }
}
