// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import Vue, { VNode } from 'vue'
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
// import { Swiper } from 'swiper'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper/dist'

// interface Swiper2 extends Swiper {}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
      // swiper: Swiper
      // swiper: {
      //   aaa?: string
      // }
    }
  }

  export interface ContentJson {
    data: {}
    dir: string
    path: string
    slug: string
    extension: string
    createdAt: string
    updatedAt: string
  }
}
