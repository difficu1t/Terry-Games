export type IUser = {
  username: string | null;
  email: string | null;
  wins: number | null;
  reviews: Review[];
}

export type Review = {
  title: string | undefined,
  rating: number
}

export type ReviewWithUser = {
  currentUser: IUser,
  title: string | undefined,
  rating: number
}