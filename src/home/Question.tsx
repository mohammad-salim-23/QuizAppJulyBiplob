import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription,  CardHeader, CardTitle } from "@/components/ui/card";
import { setAnswer } from "@/Redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import QuizControls from "./QuizControl";

export function Question(){
    const dispatch = useAppDispatch();
    const {questions, currentQuestionIndex, userAnswers} = useAppSelector((state)=>state.quiz);
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];
    const handleAnswerChange = (answer: string)=>{
         dispatch(setAnswer({questionIndex: currentQuestionIndex, answer}));
    }
    return(
        <div>
               <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{currentQuestion.question}</CardTitle>
        <CardDescription>Question {currentQuestionIndex+1} of  {questions.length}</CardDescription>
      </CardHeader>
      <CardContent>
        {currentQuestion.options.map((option,index)=>(
            <Button onClick={()=> handleAnswerChange(option)}
            variant={option === currentAnswer ? "default":"outline"}
            key={index} size={"lg"} className="w-full mt-3">
                {option}
            </Button>
        ))}
      </CardContent>
      <QuizControls></QuizControls>
      
    </Card>
        </div>
    )
}
