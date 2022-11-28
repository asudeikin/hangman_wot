import { GameModelType } from '../Model';

export enum GameStatesEnum {
    Game = "Game",
    Start = "Start",
    End = "End",
}

export enum GameReducerActionTypeEnum {
    StartGame = "StartGame",
    PickLetter = "PickLetter"
}

function shuffle<T>(arr: T[]) {
    const i = arr.length;
    const randIndex = Math.floor(Math.random() * (i + 1));

    return arr[randIndex];
}


const wotMaps = ["Abbey", "Airfield", "Berlin", "Cliff", "Crater", "Dragon Ridge", "El Halluf", "Empires Border", "Erlenberg", "Fiery Salient", "Fishermans Bay", "Fjords", "Ghost Town", "Glacier", "Hidden Village", "Highway", "Himmelsdorf", "Hinterland", "Icebound", "Karelia", "Kharkov", "Klondike", "Komarin", "Kraftwerk", "Lakeville", "Lev Yashin Stadium", "Live Oaks", "Lost Stadium", "Malinovka", "Mannerheim Line", "Mines", "Minsk", "Mittengard", "Mountain Pass", "Murovanka", "Nebelburg", "Normandy", "Northwest", "Overlord", "Paris", "Pearl River", "Pilsen", "Prokhorovka", "Province", "Redshire", "Ruinberg", "Sacred Valley", "Sand River", "Serene Coast", "Severogorsk", "Siegfried Line", "South Coast", "Stalingrad", "Steppes", "Studzianki", "Swamp", "Tundra", "Westfield", "Widepark", "Windstorm", "Winterberg"]

export const getInitialState = (): GameModelType => {
    // console.log(shuffle(wotMaps))
    const rightWord = shuffle(wotMaps).split("");
    // console.log(rightWord)

    return {
        rightWord: rightWord.map((letter) => letter.toUpperCase()),
        gameState: GameStatesEnum.Start,
        currWord: rightWord.map((letter) => letter === " " ? " ": "_"),
        guessesLeft: 10,
        pickedLetters: []
    }
}

export type GameReducerActionType = {
    type: GameReducerActionTypeEnum.StartGame
} | {
    type: GameReducerActionTypeEnum.PickLetter,
    letter: string
}

export const reducer = (state: GameModelType, action: GameReducerActionType): GameModelType => {
    if (action.type === GameReducerActionTypeEnum.PickLetter) {
        // const currPickedLetters = [...state.pickedLetters] 
        // const newPickedLetters = [...currPickedLetters, action.letter]
        const guessedState = state.rightWord.includes(action.letter)
        const guessesLeft = !guessedState ? state.guessesLeft - 1 : state.guessesLeft
        
        let newCurrWord = [...state.currWord];
        
        state.rightWord.forEach((el, index, arr) => {
            if(action.letter === el){
                newCurrWord[index] = el;         
            }
        })
        
        
        const includesAll = newCurrWord.toString() === state.rightWord.toString();
        
        console.log(includesAll)
        console.log(state.rightWord.toString(), "RIGHT WORD")
        console.log(newCurrWord.toString())
        
        return {
            ...state,
            // pickedLetters: newPickedLetters,
            pickedLetters: [...state.pickedLetters, action.letter],
            guessesLeft: guessesLeft,
            currWord: newCurrWord,
            gameState: guessesLeft === 0 || includesAll ? GameStatesEnum.End : state.gameState
        };
    }

    if (action.type === GameReducerActionTypeEnum.StartGame) {
        return {...getInitialState(), gameState: GameStatesEnum.Game};
    }


    return state;
}

export const initialGameState = getInitialState();