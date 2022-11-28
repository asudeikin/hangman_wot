import React from 'react';
import Tank from '../../assets/tank.png'
import GuessedLetters from '../../components/GuessedLetters';
import Keyboard from '../../components/Keyboard';
import ProgressBar from '../../components/ProgressBar';
import useGameModel from '../../hooks/useMainReducer';

const GameScreen = () => {
  const { gameModel: state, dispatch } = useGameModel();

  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen  bg-gradient-to-b from-backgroundYelowOne to-backgroundYelowTwo font-roboto">
      <img src={Tank} alt="tank"/>
      <ProgressBar guessesLeft={state.guessesLeft}/>
      <GuessedLetters/>
      <Keyboard pickedLetters={state.pickedLetters} rightWord={state.rightWord}/>
    </div>
  );
}

export default GameScreen;
