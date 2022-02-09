import React, { ReactChild, ReactInstance, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { SessionQuestions } from '../../contexts/QuestionsContext'
import axios from 'axios'

type QuestionProps = {
  Question: any;
  question: number;
};

const Question = () => {
  const router = useRouter()

  const { testId } = router.query
  const { questionSet, questionIndex, updateQuestionSet, updateQuestionIndex } = SessionQuestions()

  console.log('currentQuestion', questionIndex)

  const [questionNumber, setQuestionNumber] = useState<number>(questionSet[questionIndex])
  const [questionText, setQuestionText] = useState<string>('')

  const getQuestionNumber = async () => {
    setQuestionNumber(questionSet[questionIndex])
  }

  const getQuestionText = async () => {
    const question = await axios.get((`http://localhost:3002/question/${ questionNumber }`))
    setQuestionText(question.data.english)
  }

  useEffect(() => {
    getQuestionNumber()
    getQuestionText()
  },[questionIndex])

  return (
    <>
    <h1>
      Test ID: { testId }
    </h1>
    <h1>
      Question No: { questionNumber }
    </h1>
    <h1>
      Question Text: { questionText }
    </h1>
    <Button
        onClick={ updateQuestionIndex }
        variant="contained">No
      </Button>
      <Button
        onClick={ updateQuestionIndex }
        variant="contained">Yes
      </Button>
  </>

  )

}

export default Question