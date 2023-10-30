import { IUser } from "./user";

export type IBoardGame = {
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  dls: boolean;
  rating: number;
  playedTimes: number;
  winners: IUser[];
}