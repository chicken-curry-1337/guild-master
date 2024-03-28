type MissionType = "ANGEL" | "DEMON" | "NEUTRAL";

export type Mission = {
  title: string;
  id: number;
  type: MissionType;
  requestedParams?: {
    strength: number;
    agility: number;
  };
  ticks: number;
  reward?: MissionReward;
};

// todo: add consumable items to reward
type MissionReward = {
  gold?: number;
};
