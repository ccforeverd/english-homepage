
import { Component, Vue } from 'nuxt-property-decorator'
import style from './style.scss'

@Component
export default class Bar extends Vue {
  protected render () {
    return (
      <div class={style.holder}>
        123 style1
      </div>
    )
  }
}
