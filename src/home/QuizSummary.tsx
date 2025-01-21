import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAppSelector } from "@/Redux/hooks"
import { Progress } from "@radix-ui/react-progress";
const getPerfomance = (percentage: number)=>{
    if(percentage>=90){
        return {rating:"Tumi Bangladesh", color:"bg-green-800"};
    }else if(percentage>=50){
        return {rating:"tumi  somonnoyok", color:"bg-yellow-500"};
    }else if(percentage>=30){
        return {rating:"tumi Qader",color:"bg-orange-500"}
    }else{
        return {rating:"tumi AwamiLeague", color:"bg-red-500"}
    }
};
export function QuizSummary(){
    const {questions, userAnswers} = useAppSelector((state)=>state.quiz);
    //calculate correct and incorrect answers
    const correctAnswersCount = questions.reduce((count, question, index)=>{
        return question.correctAnswer === userAnswers[index]? count+1:count;
    },0);
    const incorrectAnswerCount = questions.length -correctAnswersCount;
  const correctPercentage = parseFloat(((correctAnswersCount/questions.length)*100).toFixed(2));
  const {rating, color} = getPerfomance(correctPercentage);
  return (
    <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-xl">
  <CardHeader>
    <h2 className="text-2xl font-bold">Quiz Summary</h2>

   
  </CardHeader>
  <CardContent>
    <h3 className="text-xl font-medium mb-4"> 
        You got {correctAnswersCount} out of {questions.length} correct!
    </h3>
    {/* progress bar */}
    <div className="mb-4">
    <Progress value={correctPercentage} className={`h-4 rounded-full ${color}`} />
    <div className="flex justify-between mt-2">
        <span className="text-sm">{correctPercentage}</span>
        <span className="text-sm">Perfomance: {rating}</span>
    </div>
    </div>
    {/* statistics */}
    <div className="mb-4">
         <p className="text-sm">
            <strong>Incorrect Answers</strong>
            {incorrectAnswerCount}
         </p>
    </div>
    <div className="mt-4">
          <p className="text-sm">Great job! Keep practicing to improve your performance.</p>
        </div>
  </CardContent>
  
</Card>
  )

}