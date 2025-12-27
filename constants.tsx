
import { WaterCycleStage, StageInfo } from './types';

export const STAGE_DATA: Record<WaterCycleStage, StageInfo> = {
  [WaterCycleStage.NONE]: {
    title: '点击下方的图标开始探索吧！',
    description: '水在地球上不停地旅行，这个过程就叫“水循环”。',
    funFact: '你知道吗？你今天喝的水，可能曾经被恐龙喝过哦！'
  },
  [WaterCycleStage.EVAPORATION]: {
    title: '蒸发 (Evaporation)',
    description: '太阳公公发出热量，把海洋和湖泊里的水变成了看不见的气体——水蒸气。',
    funFact: '就像你洗完澡，身上的水慢慢干了一样！'
  },
  [WaterCycleStage.CONDENSATION]: {
    title: '凝结 (Condensation)',
    description: '水蒸气飞到了高空，遇到冷空气，又变回了小水滴，聚在一起变成了白云。',
    funFact: '就像冬天你对着镜子哈气，镜子上会出现小水珠。'
  },
  [WaterCycleStage.PRECIPITATION]: {
    title: '降水 (Precipitation)',
    description: '云朵里的水滴越来越多、越来越重，最后就变成了雨、雪或者冰雹落下来。',
    funFact: '雨滴其实不是心形的，它们在空中的时候更像汉堡包！'
  },
  [WaterCycleStage.COLLECTION]: {
    title: '收集与径流 (Collection)',
    description: '落下的雨水流进小溪、河流，最后回到了大海，等待着下一次循环。',
    funFact: '有些水会钻进地底下，变成我们要喝的井水。'
  }
};
