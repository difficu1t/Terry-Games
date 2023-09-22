import { Fields } from "../types/tableGames"

export const convertToGame = (fields: Fields) => {
    return {title: fields.title.value,
        description: fields.description.value,
        maxPlayers: Number(fields.maxPlayers.value),
        minPlayers: Number(fields.minPlayers.value),
        dls: fields.dls.checked,
        tier: fields.tier.options[fields.tier.selectedIndex].value,
        winners: []
    }
}