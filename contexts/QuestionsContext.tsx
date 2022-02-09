import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'

type QuestionsContextType = {
  questionSet: Array<number>
  currentQuestion: number
  updateQuestionSet: (questionSet: Array<number>) => void
  updateCurrentQuestion: () => void
}

const defaultState: QuestionsContextType = {
  questionSet: [],
  currentQuestion: 0,
  updateQuestionSet: () => {},
  updateCurrentQuestion: () => {},
}

const QuestionsContext = createContext<QuestionsContextType>(defaultState)

export function sessionQuestions() {
  return useContext(QuestionsContext)
}

type Props = {
  children: ReactNode
}

export function QuestionsProvider({ children }: Props) {
  const [questionSet, setQuestionSet] = useState<Array<number>>([])

  const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const updateQuestionSet = (newQuestionSet: Array<number>) => {
    setQuestionSet(newQuestionSet)
  }

  const updateCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const value = {
    questionSet,
    currentQuestion,
    updateQuestionSet,
    updateCurrentQuestion,
  }

  return (
    <>
      <QuestionsContext.Provider value={value}>
        {children}
      </QuestionsContext.Provider>
    </>
  )
}
