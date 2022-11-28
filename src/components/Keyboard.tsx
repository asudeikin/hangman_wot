import { useState, useEffect } from 'react';
import useGameModel from '../hooks/useMainReducer';
import { GameReducerActionTypeEnum } from '../state/mainReducer';

export type KeyboardProps = {
    pickedLetters: string[],
    rightWord: string[]
}


export const keyboardKeys = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]]



const Keyboard = ({pickedLetters, rightWord} : KeyboardProps) => {
    const { gameModel: state, dispatch } = useGameModel();
    console.log(state)
    return ( 
        <div className='flex justify-center items-center flex-col'>
            {   
                keyboardKeys.map((line) => {

                    return (
                        <div className='flex justify-center items-center'>
                            {
                                line.map((letter) => {
                                    if(pickedLetters.includes(letter)){
                                        if(!rightWord.includes(letter)){
                                            return (
                                                <div className='cursor-pointer m-1 font-roboto text-[36px] text-grayBtn flex justify-center items-center w-[62px] h-[69px] bg-btnBackgroundColor border-4 border-grayBtn'>
                                                    {letter}
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className='cursor-pointer m-1 font-roboto text-[36px] text-btnBackgroundColor flex justify-center items-center w-[62px] h-[69px] bg-greenRightLetter border-4 border-greenRightLetter'>
                                                    {letter}
                                                </div>
                                            )
                                        }
                                    }

                                    return (
                                        <div
                                            onClick={() => {dispatch({type: GameReducerActionTypeEnum.PickLetter, letter: letter})}}
                                            className='cursor-pointer m-1 font-roboto text-[36px] text-btnColor flex justify-center items-center w-[62px] h-[69px] bg-btnBackgroundColor border-4 border-btnColor'>
                                            {letter}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
  }
  
export default Keyboard;
  