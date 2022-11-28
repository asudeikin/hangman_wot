import React from 'react';
import styles from "./StartScreen.module.css"
import { GameReducerActionTypeEnum } from '../../state/mainReducer';
import useGameModel from '../../hooks/useMainReducer';
import ReversedTank from '../../assets/reversedTank.png'

const StartScreen = () => {
    const { gameModel: state, dispatch } = useGameModel();

    const onStartNewGame = () => {
        dispatch({type: GameReducerActionTypeEnum.StartGame})
    }


    return (
        <div className="flex justify-center items-center flex-col w-screen h-screen  bg-gradient-to-b from-backgroundYelowOne to-backgroundYelowTwo font-roboto">
            <img src={ReversedTank} alt="reversed tank"/>
            <p className='text-center text-[64px] text-titleColor leading-[70px] mb-[16px] mt-[20px]'>GUESS THE NAME OF<br/>A WORLD OF TANKS MAP</p>
            <button
                onClick={onStartNewGame}
                className='text-[36px] uppercase bg-btnBackgroundColor  text-btnColor border-[4px] border-btnColor py-[3.5px]  px-[18px]'
            >
                Start a new game
            </button>
        </div>
    );
}

export default StartScreen;
