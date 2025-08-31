import React from 'react'
import Navbar from '../Pages/Navbar'
import QuizStructure from './QuizStructure'
import Footer from '../Pages/Footer'
import Questions from './javaQues'

export default function JavaQuiz() {
    let route = "/courses/quiz-week-1"
    return (
        <>
            <Navbar/>
            <QuizStructure Questions={Questions} path={route}/>
            <Footer/>
        </>
    )
}
