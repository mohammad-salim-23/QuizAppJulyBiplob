import { Question } from "./home/Question"
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./Redux/hooks"
function App() {
  const {quizComplete} = useAppSelector((state)=>state.quiz);
  return (
    <>
      <div className="">
        <h1 className="text-center text-4xl my-12 font-semibold">July Biplob App</h1>
        <div className="flex justify-center">
        {!quizComplete ? <Question></Question>: <QuizSummary/>}
        </div>
      </div>
    </>
  )
}

export default App
