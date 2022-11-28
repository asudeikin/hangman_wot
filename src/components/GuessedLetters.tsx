import useGameModel from '../hooks/useMainReducer';

export type GuessedLettersProps = {
    end?: boolean,
}

export type LetterType = {
    letter: string,
    end?: boolean,
    index: number,
    rightWord: string[]
}

export const keyboardKeys = [["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]]

const Letter = ({letter, index, rightWord, end} : LetterType) => {
    if(end &&  letter === "_") return <div className='flex justify-center items-center flex-row mx-2 text-[64px] text-wrongColor'>{rightWord[index]}</div>
    if(letter === " ") return <div className='w-10'></div>
    
    return ( 
        <div key={index} className='flex justify-center items-center flex-row mx-2 text-[64px] text-titleColor'>
           {letter}
        </div>
    );
}

const GuessedLetters = ({end}: GuessedLettersProps) => {
    const { gameModel: state, dispatch } = useGameModel();

    return ( 
        <div className='flex justify-center items-center flex-row'>
            {state.currWord.map((letter, index) => {
                return <Letter key={index} letter={letter} end={end} index={index} rightWord={state.rightWord}/> ;
            })}
        </div>
    );
}
  


export default GuessedLetters;
  