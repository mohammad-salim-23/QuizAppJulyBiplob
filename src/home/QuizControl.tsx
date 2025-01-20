import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/Redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks"

const QuizControls = ()=>{
    const dispatch = useAppDispatch();
    const {currentQuestionIndex, questions,  quizComplete, userAnswers} = useAppSelector((state)=>state.quiz);
     // Check if the current question has an answer selected
     const isAnswerSelected = userAnswers[currentQuestionIndex] !== null;
     //Handle the next button click
     const handleNextQuestion = ()=>{
        if(isAnswerSelected){
            dispatch(nextQuestion());
        }
     };
     //Handle previous button
     const handlePreviousQuestion = () =>{
        dispatch(previousQuestion());
     }
     //Handle the complete quiz button
     const handleCompleteQuiz = ()=>{
        dispatch(completeQuiz());
     }
       // Check if all answers are selected for the last question
       const isCompleteEnabled = isAnswerSelected || currentQuestionIndex !== questions.length-1;

       return(
        <div className="flex justify-between mt-4 space-x-4">
            {/* previous button */}
            <Button onClick={handlePreviousQuestion}
            disabled = {currentQuestionIndex === 0 || quizComplete}
            >
                Previous
            </Button>
            {/* Next button */}
            { 
                currentQuestionIndex <questions.length-1 && !quizComplete && (
                    <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
                Next
            </Button>
                )
            }
            {/* complete Quiz Button */}
            {
                currentQuestionIndex === questions.length - 1 && !quizComplete && (
                    <Button onClick={handleCompleteQuiz}
                    disabled={!isCompleteEnabled}
                    >
                        Complete Quiz
                    </Button>
                )
            }
        </div>
       )
}
export default QuizControls;