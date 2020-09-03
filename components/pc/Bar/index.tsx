
import { Component, Vue } from 'vue-property-decorator'
import style from './style.scss'

console.log(style)

@Component
export default class Bar extends Vue {
  // computed: {
  //   database (): any {
  //     return this.$store.state.database.homepage.bar ?? {}
  //   }
  // },

  protected render () {
    const database = this.$store.state.database.homepage.bar ?? {}

    return (
      <div class={style.wrap}>
        <div class={style.main}>
          <a href="/" class={style.left}>
            <img src={database.logo} alt="logo-bar"/>
          </a>
          <div class={style.middle}>
            123123
          </div>
          <a href="/" class={style.right}>电话</a>
        </div>
      </div>
    )
  }
}
