import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'

type QuestionsContextType = {
  questionSet: Array<number>
  questionIndex: number
  updateQuestionSet: (questionSet: Array<number>) => void
  updateQuestionIndex: (questionIndex?: number) => void
}

const defaultState: QuestionsContextType = {
  questionSet: [],
  questionIndex: 0,
  updateQuestionSet: () => {},
  updateQuestionIndex: () => {},
}

const QuestionsContext = createContext<QuestionsContextType>(defaultState)

export function SessionQuestions() {
  return useContext(QuestionsContext)
}

type Props = {
  children: ReactNode
}

export function QuestionsProvider({ children }: Props) {
  const [questionSet, setQuestionSet] = useState<Array<number>>([])

  const [questionIndex, setQuestionIndex] = useState<number>(0)

  const updateQuestionSet = (newQuestionSet: Array<number>) => {
    setQuestionSet(newQuestionSet)
  }

  const updateQuestionIndex = (currentIndex?: number) => {
    if (currentIndex) {
      setQuestionIndex(currentIndex)
    } else {
      setQuestionIndex(questionIndex + 1)
    }
  }

  const value = {
    questionSet,
    questionIndex,
    updateQuestionSet,
    updateQuestionIndex,
  }

  useEffect(() => {
    console.log('questions: ', questionSet)
    // console.log('currentQuestion', currentQuestion)
  }, [questionSet])

  return (
    <>
      <QuestionsContext.Provider value={value}>
        {children}
      </QuestionsContext.Provider>
    </>
  )
}
