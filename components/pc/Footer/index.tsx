
import { Component, Vue } from 'nuxt-property-decorator'
import style from './style.scss'

@Component
export default class Footer extends Vue {
  protected render() {
    const {
      info,
      footer: { logo, navs, friend, qrcode }
    } = this.$store.state.database.global

    return (
      <footer class={style.wrapper}>
        <ul class={style.main}>
          <li class={style.left}>
            <img src={logo.src} alt='' width={logo.width} />
            <p>预约试听课</p>
            <a href={`tel:${info.tel}`}>{info.tel}</a>
          </li>
          <li class={style.middle}>
            <dl>
              <dt>公司信息</dt>
              {
                navs.list.map(item => (
                  <dd>
                    <a href={item.link}>{item.label}</a>
                  </dd>
                ))
              }
            </dl>
          </li>
          <li class={style.right}>
            <dl>
              <dt>关注我们</dt>
              {
                qrcode.list.map(item => (
                  <dd>
                    <img src={item.img} alt='' width='65' />
                    <p>{item.label}</p>
                  </dd>
                ))
              }
            </dl>
          </li>
        </ul>
        <ul class={style.links}>
          {
            friend.list.map(item => (
              <li>
                <a href={item.link}>{item.label}</a>
              </li>
            ))
          }
        </ul>
        <ul class={style.bottom}>
          <li>
            {info.title}
            投诉电话 ：
            {info.tel}
          </li>
          <li>
            地址：
            {info.address}
          </li>
          <li>
            该网站所有图片均属广告图，非本机构受益人形象
          </li>
        </ul>
      </footer>
    )
  }
}
