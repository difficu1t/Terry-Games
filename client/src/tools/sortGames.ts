import { ITableGames } from "../types/tableGames";

export const sortGames = (selectedSort: string, sortedGames: ITableGames[], setSortedGames: React.Dispatch<React.SetStateAction<ITableGames[]>>, games: ITableGames[]) => {
    switch(selectedSort){
        case 'title': 
            setSortedGames(games);
            setSortedGames([...sortedGames].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])));
            break;
        case 'tier' : 
            setSortedGames(games);
            setSortedGames(tierSort([...sortedGames]));
            break;
        default:
            setSortedGames(games);
            break;
    }
}

export const reverseSortGames = (bonusSelectedSort: string, sortedGames: ITableGames[], setSortedGames: React.Dispatch<React.SetStateAction<ITableGames[]>>, games: ITableGames[]) => {
    switch(bonusSelectedSort){
        case 'По убыванию':  setSortedGames(games);
            setSortedGames([...sortedGames].reverse());
            break;
        case 'По возрастанию': setSortedGames(games);
            setSortedGames([...sortedGames].reverse());
            break;
    }
}

function tierSort (games: ITableGames[]) {
    let timeArray = [];
    let secondArray = []
    for (let game of games){
        if(game.tier === "S")
            timeArray.push(game);
        else {
            secondArray.push(game);
        }
    }
    return [...timeArray, ...secondArray.sort((a, b) => a.tier.localeCompare(b.tier))]
}

