import React, { useState } from 'react'
import './Quizscene.css'
export default function QuizScene() {

    const questions = [
        {
            questionsText: 'What is the capital of India?',
            answerOption: [
                { answerText: 'Mumbai', isCorrect: false },
                { answerText: 'Kolkata', isCorrect: false },
                { answerText: 'New Delhi', isCorrect: true },
                { answerText: 'Rajasthan', isCorrect: false }
            ]
        },
        {
            questionsText: 'Who is the CEO of Microsoft in 2021?',
            answerOption: [
                { answerText: 'Elon Musk', isCorrect: false },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Melinda Gates', isCorrect: false },
                { answerText: 'Satya Nadella', isCorrect: true },
            ]
        },
        {
            questionsText: 'In which state of India is the Statue of Unity situated?',
            answerOption: [
                { answerText: 'Madhya Pradesh', isCorrect: false },
                { answerText: 'Gujarat', isCorrect: true },
                { answerText: 'Maharastra', isCorrect: false },
                { answerText: 'New delhi', isCorrect: false },
            ]
        },
        {
            questionsText: 'the iPhone was created by which company?',
            answerOption: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
                { answerText: 'Google', isCorrect: false },
            ]
        },

        {
            questionsText: 'Who is the CEO of Tesla motor\'s?',
            answerOption: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Steve Jobs', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Mark Zuckerburg', isCorrect: false },
            ]
        },
        {
            questionsText: 'Which is one is heavier between 1 kg cotton & 1 kg iron?',
            answerOption: [
                {answerText: 'Iron', isCorrect:false},
                {answerText: 'Cotton', isCorrect:false},
                {answerText: 'Both Equal', isCorrect:true},
                {answerText: 'None of them', isCorrect:false},
            ]
        },
        {
            questionsText: 'Find the sum of 11000 + 1100 + 11 ?',
            answerOption: [
                {answerText: '11,111', isCorrect:false},
                {answerText: '12,111', isCorrect:true},
                {answerText: '11,110', isCorrect:false},
                {answerText: '12,110', isCorrect:false},
            ]
        },
        {
            questionsText: 'Where is the silicon valley located in india?',
            answerOption: [
                { answerText: 'Mangalore', isCorrect: false },
                { answerText: 'Bangalore', isCorrect: true },
                { answerText: 'Mumbai', isCorrect: false },
                { answerText: 'Indore', isCorrect: false },
            ]
        },
        {
            questionsText: 'How many colours are in a rainbow?',
            answerOption: [
                {answerText: 'Nine', isCorrect:false},
                {answerText: 'Seven', isCorrect:true},
                {answerText: 'Eight', isCorrect:false},
                {answerText: 'Three', isCorrect:false},
            ]
        },
        {
            questionsText: 'Largest species in the world?',
            answerOption: [
                {answerText: 'Dinosaur', isCorrect:false},
                {answerText: 'Elephant', isCorrect:false},
                {answerText: 'Giraffe', isCorrect:false},
                {answerText: 'Blue Whale', isCorrect:true},
            ]
        }
    ]
    const [currentQuestion, setcurrentQuestion] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1)
        }
        
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
            setcurrentQuestion(nextQuestion);
        } else {
            setShowScore(true)
        }
    }
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    return (
        <div className="QuizBox">

            <div className="QuizScene" >
                {
                    showScore ? (
                        <div className="score">You scored {score} out of {questions.length}</div>
                    ) : (
                        <>
                            <div className="questionSection">
                                <div className="questionCount"><span>Question {currentQuestion+1}</span>/{questions.length}</div>
                                <div className="mainQuestions">{questions[currentQuestion].questionsText}</div>
                            </div>

                            <div className="answerSection">
                                {questions[currentQuestion].answerOption.map((answerOption) =>
                                (
                                    <button className="buttonAll" onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}
                                    >
                                    {answerOption.answerText}</button>
                                )
                                )}
                            </div>
                        </>
                    )
                }
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>

        </div>
    )
}

