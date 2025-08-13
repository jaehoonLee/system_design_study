'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-react'

export default function QuizPage() {
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const quizzes = [
    {
      id: 'basics',
      title: '기본 개념 퀴즈',
      description: '시스템 디자인의 기본 개념에 대한 퀴즈입니다.',
      questions: [
        {
          question: '시스템 디자인에서 "확장성(Scalability)"이란 무엇인가요?',
          options: [
            '시스템이 증가하는 부하를 처리할 수 있는 능력',
            '시스템의 보안 수준',
            '시스템의 개발 비용',
            '시스템의 사용자 인터페이스'
          ],
          correct: 0,
          explanation: '확장성은 시스템이 증가하는 부하나 사용자 수를 처리할 수 있는 능력을 의미합니다.'
        },
        {
          question: '수평 확장(Horizontal Scaling)과 수직 확장(Vertical Scaling)의 차이점은?',
          options: [
            '수평 확장은 더 많은 서버를 추가하고, 수직 확장은 기존 서버의 성능을 향상시킵니다',
            '수평 확장은 서버 크기를 키우고, 수직 확장은 서버 수를 늘립니다',
            '두 방법 모두 동일한 효과를 가집니다',
            '수평 확장은 비용이 더 많이 듭니다'
          ],
          correct: 0,
          explanation: '수평 확장은 더 많은 서버를 추가하는 것이고, 수직 확장은 기존 서버의 CPU, 메모리 등을 향상시키는 것입니다.'
        },
        {
          question: '99.9% 가용성은 연간 몇 시간의 다운타임을 의미하나요?',
          options: [
            '8.76시간',
            '52.56분',
            '24시간',
            '1시간'
          ],
          correct: 0,
          explanation: '99.9% 가용성은 연간 8.76시간(365일 × 24시간 × 0.001)의 다운타임을 의미합니다.'
        },
        {
          question: '로드 밸런서의 주요 목적은 무엇인가요?',
          options: [
            '트래픽을 여러 서버에 분산시켜 부하를 줄이는 것',
            '데이터를 암호화하는 것',
            '백업을 자동화하는 것',
            '사용자 인증을 처리하는 것'
          ],
          correct: 0,
          explanation: '로드 밸런서는 들어오는 트래픽을 여러 서버에 분산시켜 각 서버의 부하를 줄이고 전체 시스템의 성능을 향상시킵니다.'
        },
        {
          question: '마이크로서비스 아키텍처의 주요 장점은?',
          options: [
            '독립적 배포와 확장이 가능하고, 기술 다양성을 허용합니다',
            '개발 비용이 절약됩니다',
            '모든 서비스가 동일한 기술 스택을 사용합니다',
            '단일 데이터베이스를 사용합니다'
          ],
          correct: 0,
          explanation: '마이크로서비스는 각 서비스를 독립적으로 배포하고 확장할 수 있으며, 각 서비스마다 다른 기술 스택을 사용할 수 있습니다.'
        }
      ]
    },
    {
      id: 'scalability',
      title: '확장성 퀴즈',
      description: '시스템 확장성에 대한 퀴즈입니다.',
      questions: [
        {
          question: '데이터베이스 샤딩(Sharding)의 목적은?',
          options: [
            '대용량 데이터를 여러 데이터베이스에 분산하여 성능을 향상시키는 것',
            '데이터를 백업하는 것',
            '데이터를 암호화하는 것',
            '데이터를 압축하는 것'
          ],
          correct: 0,
          explanation: '샤딩은 대용량 데이터를 여러 데이터베이스 인스턴스에 분산시켜 쿼리 성능을 향상시키는 기술입니다.'
        },
        {
          question: 'CDN(Content Delivery Network)의 주요 기능은?',
          options: [
            '전 세계에 콘텐츠를 분산하여 사용자에게 빠른 접근을 제공하는 것',
            '데이터를 암호화하는 것',
            '사용자를 인증하는 것',
            '트래픽을 모니터링하는 것'
          ],
          correct: 0,
          explanation: 'CDN은 전 세계 여러 지역에 콘텐츠를 분산 저장하여 사용자가 가장 가까운 서버에서 콘텐츠를 받을 수 있게 합니다.'
        },
        {
          question: '캐싱의 주요 목적은?',
          options: [
            '자주 사용되는 데이터를 빠른 저장소에 저장하여 응답 시간을 단축하는 것',
            '데이터를 영구적으로 저장하는 것',
            '데이터를 백업하는 것',
            '데이터를 압축하는 것'
          ],
          correct: 0,
          explanation: '캐싱은 자주 사용되는 데이터를 메모리나 빠른 저장소에 저장하여 데이터베이스 조회 없이 빠르게 응답할 수 있게 합니다.'
        }
      ]
    }
  ]

  const currentQuizData = quizzes[currentQuiz]
  const currentQuestion = currentQuizData.questions[selectedAnswers.length]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return
    
    const newSelectedAnswers = [...selectedAnswers, answerIndex]
    setSelectedAnswers(newSelectedAnswers)
    
    if (newSelectedAnswers.length === currentQuizData.questions.length) {
      calculateScore(newSelectedAnswers)
      setShowResults(true)
    }
  }

  const calculateScore = (answers: number[]) => {
    let correctCount = 0
    answers.forEach((answer, index) => {
      if (answer === currentQuizData.questions[index].correct) {
        correctCount++
      }
    })
    setScore(correctCount)
  }

  const handleRetakeQuiz = () => {
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  const handleNextQuiz = () => {
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
      setSelectedAnswers([])
      setShowResults(false)
      setScore(0)
    }
  }

  const getScoreMessage = () => {
    const percentage = (score / currentQuizData.questions.length) * 100
    if (percentage >= 80) return { message: '훌륭합니다!', color: 'text-green-600' }
    if (percentage >= 60) return { message: '좋습니다!', color: 'text-blue-600' }
    return { message: '더 공부해보세요!', color: 'text-orange-600' }
  }

  const scoreInfo = getScoreMessage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="ml-3 text-2xl font-bold text-gray-900">시스템 디자인 스터디</h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/topics" className="text-gray-600 hover:text-blue-600 transition-colors">
                토픽
              </Link>
              <Link href="/quiz" className="text-blue-600 font-semibold">
                퀴즈
              </Link>
              <Link href="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">
                진행도
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quiz Selection */}
        {!showResults && selectedAnswers.length === 0 && (
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                홈으로
              </Link>
              <h2 className="text-3xl font-bold text-gray-900">퀴즈 선택</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz, index) => (
                <div key={quiz.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
                  <p className="text-gray-600 mb-4">{quiz.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{quiz.questions.length}개 문제</span>
                    <button
                      onClick={() => setCurrentQuiz(index)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      시작하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quiz Content */}
        {(!showResults || selectedAnswers.length > 0) && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Quiz Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{currentQuizData.title}</h2>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {selectedAnswers.length + 1} / {currentQuizData.questions.length}
                </span>
              </div>
              <p className="text-gray-600">{currentQuizData.description}</p>
            </div>

            {/* Question */}
            {!showResults && currentQuestion && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  {currentQuestion.question}
                </h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="p-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">퀴즈 결과</h3>
                  <div className="text-6xl font-bold text-blue-600 mb-4">
                    {score}/{currentQuizData.questions.length}
                  </div>
                  <p className={`text-xl font-semibold ${scoreInfo.color}`}>
                    {scoreInfo.message}
                  </p>
                  <p className="text-gray-600 mt-2">
                    정답률: {((score / currentQuizData.questions.length) * 100).toFixed(1)}%
                  </p>
                </div>

                {/* Question Review */}
                <div className="space-y-6">
                  {currentQuizData.questions.map((question, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">
                          문제 {index + 1}: {question.question}
                        </h4>
                        {selectedAnswers[index] === question.correct ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg ${
                              optionIndex === question.correct
                                ? 'bg-green-100 border border-green-300'
                                : optionIndex === selectedAnswers[index] && optionIndex !== question.correct
                                ? 'bg-red-100 border border-red-300'
                                : 'bg-gray-50 border border-gray-200'
                            }`}
                          >
                            {option}
                            {optionIndex === question.correct && (
                              <span className="ml-2 text-green-700 font-semibold">✓ 정답</span>
                            )}
                            {optionIndex === selectedAnswers[index] && optionIndex !== question.correct && (
                              <span className="ml-2 text-red-700 font-semibold">✗ 오답</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm text-blue-800">
                          <strong>설명:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={handleRetakeQuiz}
                    className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    다시 풀기
                  </button>
                  {currentQuiz < quizzes.length - 1 && (
                    <button
                      onClick={handleNextQuiz}
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      다음 퀴즈
                    </button>
                  )}
                  <Link
                    href="/quiz"
                    className="flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    퀴즈 목록으로
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
