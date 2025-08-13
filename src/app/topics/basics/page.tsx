'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Circle, BookOpen, Target, Users, Zap } from 'lucide-react'

export default function BasicsPage() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      id: 1,
      title: '시스템 디자인이란?',
      content: `
        <h3>시스템 디자인의 정의</h3>
        <p>시스템 디자인은 대규모 분산 시스템을 설계하는 과정입니다. 이는 다음과 같은 요소들을 포함합니다:</p>
        <ul>
          <li><strong>확장성 (Scalability):</strong> 시스템이 증가하는 부하를 처리할 수 있는 능력</li>
          <li><strong>가용성 (Availability):</strong> 시스템이 정상적으로 작동하는 시간의 비율</li>
          <li><strong>성능 (Performance):</strong> 시스템의 응답 시간과 처리량</li>
          <li><strong>안정성 (Reliability):</strong> 시스템이 오류 없이 작동하는 능력</li>
          <li><strong>보안 (Security):</strong> 시스템의 데이터와 리소스를 보호하는 능력</li>
        </ul>

        <h3>시스템 디자인의 중요성</h3>
        <p>현대의 소프트웨어 시스템은 다음과 같은 특징을 가집니다:</p>
        <ul>
          <li>수백만 명의 사용자 지원</li>
          <li>실시간 데이터 처리</li>
          <li>24/7 가용성 요구</li>
          <li>복잡한 비즈니스 로직</li>
        </ul>
      `,
      duration: '5분'
    },
    {
      id: 2,
      title: '시스템 디자인 인터뷰 과정',
      content: `
        <h3>인터뷰 단계</h3>
        <ol>
          <li><strong>요구사항 분석 (Requirements Gathering)</strong>
            <ul>
              <li>기능적 요구사항 (Functional Requirements)</li>
              <li>비기능적 요구사항 (Non-functional Requirements)</li>
              <li>제약사항 (Constraints)</li>
            </ul>
          </li>
          <li><strong>고수준 설계 (High-level Design)</strong>
            <ul>
              <li>시스템 아키텍처</li>
              <li>주요 컴포넌트</li>
              <li>데이터 흐름</li>
            </ul>
          </li>
          <li><strong>상세 설계 (Detailed Design)</strong>
            <ul>
              <li>데이터베이스 스키마</li>
              <li>API 설계</li>
              <li>알고리즘 선택</li>
            </ul>
          </li>
          <li><strong>최적화 (Optimization)</strong>
            <ul>
              <li>성능 최적화</li>
              <li>확장성 개선</li>
              <li>장애 처리</li>
            </ul>
          </li>
        </ol>
      `,
      duration: '8분'
    },
    {
      id: 3,
      title: '기본 용어와 개념',
      content: `
        <h3>핵심 용어</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4>확장성 관련</h4>
            <ul>
              <li><strong>수평 확장 (Horizontal Scaling):</strong> 더 많은 서버 추가</li>
              <li><strong>수직 확장 (Vertical Scaling):</strong> 기존 서버의 성능 향상</li>
              <li><strong>로드 밸런싱 (Load Balancing):</strong> 트래픽 분산</li>
            </ul>
          </div>
          <div>
            <h4>가용성 관련</h4>
            <ul>
              <li><strong>99.9% (Three Nines):</strong> 8.76시간/년 다운타임</li>
              <li><strong>99.99% (Four Nines):</strong> 52.56분/년 다운타임</li>
              <li><strong>장애 복구 (Failover):</strong> 백업 시스템으로 전환</li>
            </ul>
          </div>
        </div>

        <h3>성능 지표</h3>
        <ul>
          <li><strong>응답 시간 (Response Time):</strong> 요청 처리에 걸리는 시간</li>
          <li><strong>처리량 (Throughput):</strong> 단위 시간당 처리할 수 있는 요청 수</li>
          <li><strong>지연 시간 (Latency):</strong> 데이터 전송에 걸리는 시간</li>
          <li><strong>대역폭 (Bandwidth):</strong> 데이터 전송 속도</li>
        </ul>
      `,
      duration: '10분'
    },
    {
      id: 4,
      title: '시스템 아키텍처 패턴',
      content: `
        <h3>주요 아키텍처 패턴</h3>
        
        <h4>1. 모놀리식 아키텍처 (Monolithic)</h4>
        <p>모든 기능이 하나의 애플리케이션에 포함된 구조</p>
        <ul>
          <li><strong>장점:</strong> 개발 및 배포가 간단, 성능이 좋음</li>
          <li><strong>단점:</strong> 확장성 제한, 기술 스택 변경 어려움</li>
        </ul>

        <h4>2. 마이크로서비스 아키텍처 (Microservices)</h4>
        <p>기능별로 독립적인 서비스로 분리한 구조</p>
        <ul>
          <li><strong>장점:</strong> 독립적 배포, 기술 다양성, 확장성</li>
          <li><strong>단점:</strong>복잡성 증가, 네트워크 오버헤드</li>
        </ul>

        <h4>3. 이벤트 기반 아키텍처 (Event-Driven)</h4>
        <p>이벤트를 통해 서비스 간 통신하는 구조</p>
        <ul>
          <li><strong>장점:</strong> 느슨한 결합, 확장성</li>
          <li><strong>단점:</strong> 복잡한 디버깅, 이벤트 순서 보장 어려움</li>
        </ul>
      `,
      duration: '12분'
    },
    {
      id: 5,
      title: '데이터 저장소 선택',
      content: `
        <h3>데이터베이스 유형</h3>
        
        <h4>관계형 데이터베이스 (RDBMS)</h4>
        <p>MySQL, PostgreSQL, Oracle</p>
        <ul>
          <li><strong>장점:</strong> ACID 트랜잭션, 복잡한 쿼리</li>
          <li><strong>단점:</strong> 수평 확장 어려움, 스키마 변경 복잡</li>
        </ul>

        <h4>NoSQL 데이터베이스</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5>문서형 (Document)</h5>
            <p>MongoDB, CouchDB</p>
            <ul>
              <li>JSON 형태 데이터</li>
              <li>스키마 유연성</li>
            </ul>
          </div>
          <div>
            <h5>키-값 (Key-Value)</h5>
            <p>Redis, DynamoDB</p>
            <ul>
              <li>빠른 읽기/쓰기</li>
              <li>캐싱에 적합</li>
            </ul>
          </div>
          <div>
            <h5>컬럼형 (Column)</h5>
            <p>Cassandra, HBase</p>
            <ul>
              <li>대용량 데이터</li>
              <li>수평 확장</li>
            </ul>
          </div>
        </div>
      `,
      duration: '15분'
    }
  ]

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(currentLesson)) {
      setCompletedLessons([...completedLessons, currentLesson])
    }
  }

  const handleNextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
    }
  }

  const handlePrevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
    }
  }

  const progressPercentage = (completedLessons.length / lessons.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/topics" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>토픽 목록으로</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">진행도</p>
                <p className="text-lg font-semibold text-gray-900">{Math.round(progressPercentage)}%</p>
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">레슨 목록</h3>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentLesson === index
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {completedLessons.includes(index) ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-400 mr-2" />
                        )}
                        <span className="font-medium">{lesson.title}</span>
                      </div>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Lesson Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {lessons[currentLesson].title}
                  </h2>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {lessons[currentLesson].duration}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span>레슨 {currentLesson + 1} / {lessons.length}</span>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="p-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: lessons[currentLesson].content }}
                />
              </div>

              {/* Navigation */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handlePrevLesson}
                    disabled={currentLesson === 0}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    이전 레슨
                  </button>

                  <div className="flex items-center space-x-4">
                    {!completedLessons.includes(currentLesson) && (
                      <button
                        onClick={handleCompleteLesson}
                        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        완료 표시
                      </button>
                    )}
                    
                    {currentLesson < lessons.length - 1 ? (
                      <button
                        onClick={handleNextLesson}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        다음 레슨
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    ) : (
                      <Link
                        href="/topics"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        토픽 완료
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
