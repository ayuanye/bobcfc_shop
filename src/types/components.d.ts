import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuess
  }
}

// 组件实例类型   InstanceType<typeof 某一个组件名>就代表获取某一组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
