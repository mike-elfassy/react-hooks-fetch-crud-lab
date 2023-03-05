import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const API_URL = 'http://localhost:4000/questions'
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET'
    })
      .then(r => r.json())
      .then(questions => setQuestions(questions))
  }, [])

  const handleDeleteQuestion = function(questionToDelete) {
    const newQuestions = questions.filter(question => question.id !== questionToDelete.id)
    setQuestions(newQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(questionItem => (
          <QuestionItem
            key={questionItem.id}
            question={questionItem}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
