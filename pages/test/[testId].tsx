import React, { ReactChild, ReactInstance, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Button, Box, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import logo from '../../assets/eneagrama.png'
import { SessionQuestions } from '../../contexts/QuestionsContext'
import axios from 'axios'

type QuestionProps = {
  Question: any;
  question: number;
};

const Question = () => {
  const router = useRouter()

  const { testId, uid } = router.query
  const { questionSet, questionIndex, updateQuestionIndex } = SessionQuestions()

  console.log('currentQuestion', questionIndex)

  const [questionNumber, setQuestionNumber] = useState<number>(questionSet[questionIndex])
  const [questionText, setQuestionText] = useState<string>('')
  const [questionEtype, setQuestionEtype] = useState<number>(0)
  const [results, setResults] = useState<Array<number>>([])

  const registerUserResponse = async (answer: boolean) => {
    if (answer) {
      let newResults = await axios.put((`/test/answer/yes/${testId}/${questionEtype}`))
      let resultsArray: Array<any> = Object.values(newResults.data).slice(0, 9)
      setResults(resultsArray)
      console.log(newResults);
    } else {
      await axios.put((`/test/answer/no/${testId}`))
    }

    if (questionIndex < questionSet.length - 1) {
      updateQuestionIndex()
    } else {
      // currently not taking into account scores that have multiple maxValues
      await axios.put((`/user/${uid}/status`))
      let maxValue = Math.max(...results)
      let maxType = results.indexOf(maxValue) + 1
      router.push({
        pathname: '/test/results',
        query: {
          etype: maxType,
          escore: maxValue,
        }
      })
    }

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
    console.log(results);
  },[questionNumber, questionIndex])

  return (

    <Container maxWidth='xl'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 4
        }}
      >
        <Typography
          color='primary'
          variant='h5'>
          The Enneagram Survey
        </Typography>
        <Button
          color='secondary'
          onClick={() => router.push(`/user/registration`)}
          variant='contained'>
          Finish Later
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          mt: 1,
          ml: 14
        }}
      >
        <Image
          className="enneagram-logo"
          src={logo}
          width={40}
          height={40}
          alt="logo" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 6,
          px: 14,
          height: 200
        }}
      >
        <Typography
          color='#494f5b'
          align='center'
          variant='h4'>
          {questionText}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          m: 2,
        }}
      >
        <Box sx={{ display: 'flex', width: 250, mt: 8 }}>
          <Button
            onClick={() => registerUserResponse(false)}
            variant="contained"
            style={{ minHeight: 50, width: '80%' }}>
            No
          </Button>
        </Box>
        <Box sx={{ display: 'flex', width: 250, mt: 8 }}>
          <Button
            onClick={() => registerUserResponse(true)}
            variant="contained"
            style={{ minHeight: 50, width: '80%' }}>
            Yes
          </Button>
        </Box>
      </Box>
      <h4>
        Temporary control data:
      </h4>
      <h5>Test ID: { testId } | Question Index: { questionIndex } | Question No: { questionNumber } | Question EType: { questionEtype }</h5>
    </Container>
  )
}

export default Question