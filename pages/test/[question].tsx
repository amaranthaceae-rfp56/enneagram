import React, { ReactChild, ReactInstance } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button'

type QuestionProps = {
  Question: any;
  question: number;
};

const Question = () => {
  const router = useRouter()

  const { question } = router.query

  return (
    <>
    <h1>
      Question: { question }
    </h1>
      <Link href="/test" passHref>
        <Button
          variant="contained">Start Over
        </Button>
    </Link>
  </>

  )

}

export default Question