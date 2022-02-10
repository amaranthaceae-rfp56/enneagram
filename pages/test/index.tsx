import React, { useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import logo from '../../assets/eneagrama.png'
import axios from 'axios'
import { SessionQuestions } from '../../contexts/QuestionsContext'

import { imageConfigDefault } from 'next/dist/server/image-config';
import { filterProps } from 'framer-motion/types/render/dom/utils/filter-props'

type StartProps = {
};

const Start = () => {

  const router = useRouter()

  const { questionSet, questionIndex, updateQuestionSet, updateQuestionIndex } = SessionQuestions()

  const [username, setUsername] = useState<string>('')
  const [userId, setUserId] = useState<number>(0)
  // const [testId, setTestId] = useState<number>(0)
  const [testInProgress, setTestInProgress] = useState<boolean>(false)
  // const [questionSet, setQuestionSet] = useState<Array<number>>([])
  // const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  console.log('THis is the router:', router.query.uid)

  let userData = async () => {

    let currentUser = await axios.get(`/user/${ router.query.uid }`)
    console.log('the current user in the test page is: ', currentUser)
    setUsername(currentUser.data.first_name)
    setUserId(currentUser.data.id)
    setTestInProgress(currentUser.data.testing)
    console.log(testInProgress)
  };

  useEffect(() => {
    userData()
  });

  let createNewTest = async () => {

    let newTest = await axios.post('/test/create', { userId: userId })
    let test = await axios.get(`/test/${ newTest.data.testId }`)

    console.log('newTest', newTest);

    console.log('thisis the test:', test.data.id)

    // setQuestionSet(test.data.questions)
    // setCurrentQuestion(test.data.current_question)
    // setTestId(newTest.data.testId)
    updateQuestionSet(test.data.questions)
    // testId = test.data.id
    router.push(`/test/${ newTest.data.testId }`)
    // console.log('questions inside get request: ', questionSet)
    // console.log('currentQuestion', currentQuestion)
    // let result = await axios.get('http://localhost:3002/question/4')
    // console.log(result);
  }

  return (
    <>
      <header className="enneagram-main">
        {/* <div className="title">E9 ENNEAGRAM TEST</div> */}
        <div className="title">E9 ENNEAGRAM TEST for { username }</div>
        <div> { questionSet } </div>
          <Image className="enneagram-logo" src={ logo } alt="logo"/>
            </header>
              <div className="login-buttons-container">
              <Link href="/test/[question]" as={ `/test/10` } passHref>
                  <Button
                    // onClick={testGetRequest}
                    disabled={!testInProgress}
                    variant="contained">Resume Test
                  </Button>
                </Link>
                  <Button
                    onClick={createNewTest}
                    disabled={testInProgress}
                    variant="contained">Begin New Test
                  </Button>
          </div>
       </>
   );
};

export default Start;
