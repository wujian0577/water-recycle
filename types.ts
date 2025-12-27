
export enum WaterCycleStage {
  NONE = 'NONE',
  EVAPORATION = 'EVAPORATION', // 蒸发
  CONDENSATION = 'CONDENSATION', // 凝结
  PRECIPITATION = 'PRECIPITATION', // 降水
  COLLECTION = 'COLLECTION' // 径流/收集
}

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

export interface StageInfo {
  title: string;
  description: string;
  funFact: string;
}
