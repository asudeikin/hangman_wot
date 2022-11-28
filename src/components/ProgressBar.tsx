export type ProgressBarProps = {
    guessesLeft: number
}

const ProgressBar = ({guessesLeft} : ProgressBarProps) => {
    const widthProgress = guessesLeft === 0 ? "4px" : `${250*guessesLeft/10}px`
    

    return ( 
        <div 
            className={`relative flex justify-start items-center w-[254px] h-[34px] bg-progressBarBackgroundColor my-[20px] `}
        >   
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${guessesLeft > 0 ? "text-white" : "text-wrongColor"}`}>
                {guessesLeft}/10
            </div>
            <div 
                style={{width: widthProgress}} 
                className={`flex justify-center items-center mx-[2px] h-[30px] ${guessesLeft !== 10 ? "bg-btnColor" : "bg-greenRightLetter"} ${guessesLeft === 0 && "bg-wrongColor"}`} 
            />
        </div>
    );
  }
  
export default ProgressBar;
  