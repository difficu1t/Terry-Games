import { ITableGames } from "./types/tableGames"
import { IUsers } from "./types/users"

export const gamesbd : ITableGames[] = [
    {title: "Root", minPlayers: 2, maxPlayers: 6, tier: "E", dls: true, winners: [], description: "Root – это настольная игра о приключениях и войне, в которой от двух до четырёх игроков сражаются за контроль над обширным лесом.\nХитрая Маркиса де Коте захватила большую часть леса, намереваясь украсть все его богатства. Из-за её правления многие существа объединились в Лесной союз ради борьбы против кошек, чтобы подорвать их власть в лесу. В этом начинании они могут заручиться поддержкой странствующих Бродяг, которые могут пройти по самым опасным лесным тропам и оказать незаменимую поддержку. Но некоторые Бродяги достаточно взрослые, чтобы помнить, как некогда лесом управляли хищные птицы, и выражают сочувствие их идеалам. В это время на краю леса гордая Крылатая династия нашла нового лидера, который, как они надеются, приведёт свою фракцию к победе и возрождению древних традиций."} , 
    {title: "Сумерки Империи", description: "", minPlayers: 3, maxPlayers: 8, tier: "S", dls: true, winners: []},
    {title: "CodeNames", description: "", minPlayers: 4, maxPlayers: 16, tier: "A", dls: true, winners: []},
    {title: "Дубль", description: "", minPlayers: 4, maxPlayers: 12, tier: "A", dls: true, winners: []},
    {title: "Catan", description: "", minPlayers: 2, maxPlayers: 5, tier: "S", dls: true, winners: []}
]

export const usersbd : IUsers[] = [
    {name: "Misha", numOfWins: 100, skill: "God of table games!"},
    {name: "Rogich", numOfWins: 0, skill: "Pussy!"} 
]

export const sortOption = [
    {value: "По названию", element: "title"},
    {value: "По уровню", element: "tier"}
]

export const bonusSortOption = [
    {value: "По убыванию"},
    {value: "По возрастанию"}
]