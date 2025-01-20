import { quizData } from '@/home/quizData';
import { createSlice } from '@reduxjs/toolkit';

interface QuizState{
    questions: typeof quizData;
    currentQuestionIndex:number;
    userAnswers:(string | null)[];//track user answers (null means no answer selected)
    quizComplete:boolean
}
const initialState: QuizState = {
    questions:quizData,
    currentQuestionIndex:0,
    userAnswers:Array(quizData.length).fill(null),
    quizComplete:false
}
export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswer:(state,action)=>{
           const {questionIndex, answer} = action.payload
           state.userAnswers[questionIndex] = answer
           console.log(answer)
        },
        nextQuestion:(state)=>{
            if(state.currentQuestionIndex< state.questions.length-1){
                state.currentQuestionIndex+=1;
            }
        },
        previousQuestion:(state)=>{
            if(state.currentQuestionIndex>0){
                state.currentQuestionIndex +=1;
            }
        },
        completeQuiz:(state)=>{
            state.quizComplete = true;
        }
    }
});
export const {setAnswer,nextQuestion,previousQuestion,completeQuiz} = quizSlice.actions
export default quizSlice.reducer
