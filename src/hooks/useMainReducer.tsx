import React, { createContext, useContext, useReducer } from "react";
import { reducer, GameReducerActionType, getInitialState, initialGameState } from "../state/mainReducer";
import { GameModelType } from "../Model"

const gameModelContext = createContext<{ gameModel: GameModelType, dispatch: React.Dispatch<GameReducerActionType> }>({
    gameModel: getInitialState(),
    dispatch: () => { }
});

export const GameModelProvider = ({ children }: React.PropsWithChildren) => {
    const [gameModel, dispatch] = useReducer(reducer, initialGameState)
    return <gameModelContext.Provider value={{ gameModel, dispatch }}>{children}</gameModelContext.Provider>;
}

export default function useGameModel() {
    return useContext(gameModelContext);
} 