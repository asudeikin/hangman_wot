import React from 'react';
import styles from "./EndScreen.module.css"
import { GameReducerActionTypeEnum } from '../../state/mainReducer';
import useGameModel from '../../hooks/useMainReducer';
import ReversedTank from '../../assets/reversedTank.png'
import Tank from '../../assets/tank.png'
import GuessedLetters from '../../components/GuessedLetters';
import ProgressBar from '../../components/ProgressBar';
import Keyboard from '../../components/Keyboard';

const EndScreen = () => {
    const { gameModel: state, dispatch } = useGameModel();

    const onStartNewGame = () => {
        dispatch({type: GameReducerActionTypeEnum.StartGame})
    }

    const win = state.guessesLeft !== 0;

    return (
        <div className="flex justify-center items-center flex-col w-screen h-screen  bg-gradient-to-b from-backgroundYelowOne to-backgroundYelowTwo font-roboto">
            <img src={win ? Tank : ReversedTank} alt="reversed tank"/>
            <ProgressBar guessesLeft={state.guessesLeft}/>
            <GuessedLetters end={true}/>
            <Keyboard pickedLetters={state.pickedLetters} rightWord={state.rightWord}/>
            <button
                onClick={onStartNewGame}
                className='text-[36px] uppercase bg-btnBackgroundColor  text-btnColor border-[4px] border-btnColor py-[3.5px] px-[18px] my-[20px]'
            >
                Start a new game
            </button>
        </div>
    );
}

export default EndScreen;
