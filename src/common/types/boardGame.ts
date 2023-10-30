import { IUser } from "./user";

export type IBoardGame = {
  id: string;
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  dls: boolean;
  avgRating: number;
  numberOfVoters: number;
  playedTimes: number;
  ratingValues: number[];
  winners: IUser[];
}

export type BoardGameWithRating = {
  title: string | undefined;
  newRating: number;
  lastRating: number | undefined;
  isRated: boolean;
}