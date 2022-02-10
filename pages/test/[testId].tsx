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
  const { questionSet, questionIndex, updateQuestionIndex } = SessionQuestions()

  console.log('currentQuestion', questionIndex)

  const [questionNumber, setQuestionNumber] = useState<number>(questionSet[questionIndex])
  const [questionText, setQuestionText] = useState<string>('')
  const [questionEtype, setQuestionEtype] = useState<number>(0)

  const registerUserResponse = async (answer: boolean) => {
    if (answer) {
      let results = await axios.put((`/test/answer/yes/${testId}/${questionEtype}`))
      console.log(results);
    }
    updateQuestionIndex()
  }

  const getQuestionNumber = async () => {
    setQuestionNumber(questionSet[questionIndex])
  }

  const getQuestionData = async () => {
    const question = await axios.get((`/question/${ questionNumber }`))
    setQuestionText(question.data.english)
    setQuestionEtype(question.data.enneatypeId)
  }

  useEffect(() => {
    getQuestionNumber()
    getQuestionData()
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
      Question EType: { questionEtype }
    </h1>
    <h1>
      Question Text: { questionText }
    </h1>
    <Button
      onClick={ () => registerUserResponse(false) }
      variant="contained">No
    </Button>
    <Button
      onClick={ () => registerUserResponse(true) }
      variant="contained">Yes
    </Button>
  </>
  )
}

export default Question