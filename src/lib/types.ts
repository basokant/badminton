type Nullable<T> = T | null;

type Player = {
  id: number;
  name: string;
};

type Group = {
  players: Player[];
  numSkips: number;
};

type Game = {
  players: Player[];
  startTime: Date;
};

export { type Game, type Group, type Nullable, type Player };
