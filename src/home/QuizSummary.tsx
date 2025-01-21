import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/Redux/hooks"
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
export const QuizSummary(){
    const {questions, userAnswers} = useAppSelector((state)=>state.quiz);
    //calculate correct and incorrect answers
    const correctAnswersCount = questions.reduce((count, question, index)=>{
        return question.correctAnswer === userAnswers[index]? count+1:count;
    },0);
    const incorrectAnswerCount = questions.length -correctAnswersCount;
  const correctPercentage = parseFloat(((correctAnswersCount/questions.length)*100).toFixed(2));
  const {rating, color} = getPerfomance(correctPercentage);
  return (
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )

}