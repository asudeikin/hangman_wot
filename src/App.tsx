import React from 'react';
import './App.css';

import GameScreen from './screeens/gameScreen/GameScreen';
import StartScreen from './screeens/startScreen/StartScreen';
import EndScreen from './screeens/endScreen/EndScreen';
import useGameModel from './hooks/useMainReducer';
import { GameStatesEnum } from './state/mainReducer';

function App() {
  const { gameModel: state, dispatch } = useGameModel();
  console.log(state)
  const isGameScreen = state.gameState === GameStatesEnum.Game
  const isStartScreen = state.gameState === GameStatesEnum.Start
  const isEndScreen = state.gameState === GameStatesEnum.End

  return (
    <div>
      {isGameScreen && <GameScreen/>}
      {isStartScreen && <StartScreen/>}
      {isEndScreen && <EndScreen/>}
    </div>
  );
}

export default App;
