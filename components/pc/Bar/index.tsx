
import { Component, Vue } from 'vue-property-decorator'
import style from './style.scss'

@Component
export default class Bar extends Vue {
  protected render () {
    const { path } = this.$route
    const { logo, navs, tel } = this.$store.state.database.homepage.bar

    return (
      <div class={style.holder}>
        <div class={style.wrap}>
          <div class={style.main}>
            <a href="/" class={style.left}>
              <img src={logo.src} style={{
                display: 'block',
                width: logo.width + 'px'
              }} alt="logo-bar"/>
            </a>
            <div class={style.middle}>
              {
                navs.list.map(item => (
                  <div class={{
                    [style.item]: true,
                    [style.active]: item.link === path
                  }}>
                    <nuxt-link to={item.link}>
                      {item.label}
                    </nuxt-link>
                  </div>
                ))
              }
            </div>
            <div class={style.right}>
              <img src={tel.icon} alt="tel"/>
              <a href={'tel:' + tel.number} class={style.tel}>
                {tel.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
