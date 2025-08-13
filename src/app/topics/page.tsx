import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react'

export default function TopicsPage() {
  const topics = [
    {
      id: 'basics',
      title: '기본 개념',
      description: '시스템 디자인의 기본 원리와 용어를 학습합니다.',
      duration: '30분',
      lessons: 5,
      completed: 0,
      color: 'bg-blue-500',
      icon: '🔧'
    },
    {
      id: 'scalability',
      title: '확장성',
      description: '수평/수직 확장, 로드 밸런싱, 분산 시스템을 다룹니다.',
      duration: '45분',
      lessons: 7,
      completed: 0,
      color: 'bg-green-500',
      icon: '📈'
    },
    {
      id: 'availability',
      title: '가용성',
      description: '고가용성, 장애 복구, 백업 전략을 학습합니다.',
      duration: '40분',
      lessons: 6,
      completed: 0,
      color: 'bg-purple-500',
      icon: '🛡️'
    },
    {
      id: 'performance',
      title: '성능',
      description: '캐싱, CDN, 데이터베이스 최적화를 다룹니다.',
      duration: '50분',
      lessons: 8,
      completed: 0,
      color: 'bg-orange-500',
      icon: '⚡'
    },
    {
      id: 'security',
      title: '보안',
      description: '인증, 인가, 암호화, 보안 모범 사례를 학습합니다.',
      duration: '35분',
      lessons: 6,
      completed: 0,
      color: 'bg-red-500',
      icon: '🔒'
    },
    {
      id: 'case-studies',
      title: '실제 사례',
      description: 'Netflix, Twitter, Uber 등 실제 시스템 분석을 다룹니다.',
      duration: '60분',
      lessons: 10,
      completed: 0,
      color: 'bg-indigo-500',
      icon: '🏢'
    }
  ]

  const totalLessons = topics.reduce((sum, topic) => sum + topic.lessons, 0)
  const totalCompleted = topics.reduce((sum, topic) => sum + topic.completed, 0)
  const progressPercentage = totalLessons > 0 ? (totalCompleted / totalLessons) * 100 : 0

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
              <Link href="/topics" className="text-blue-600 font-semibold">
                토픽
              </Link>
              <Link href="/quiz" className="text-gray-600 hover:text-blue-600 transition-colors">
                퀴즈
              </Link>
              <Link href="/progress" className="text-gray-600 hover:text-blue-600 transition-colors">
                진행도
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Progress Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">전체 진행도</h2>
            <span className="text-sm text-gray-600">
              {totalCompleted} / {totalLessons} 레슨 완료
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {progressPercentage.toFixed(1)}% 완료
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">학습 토픽</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {topic.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {topic.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {topic.completed}/{topic.lessons}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h4>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div 
                        className={`${topic.color.replace('bg-', 'bg-')} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${topic.lessons > 0 ? (topic.completed / topic.lessons) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <Link 
                      href={`/topics/${topic.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      시작하기
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">학습 팁</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">순서대로 학습</h4>
              <p className="text-gray-600">
                기본 개념부터 시작하여 단계별로 학습하세요. 각 토픽은 이전 토픽의 지식을 기반으로 합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">실습과 퀴즈</h4>
              <p className="text-gray-600">
                각 토픽을 완료한 후 퀴즈를 풀어보세요. 실습을 통해 개념을 더 깊이 이해할 수 있습니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">꾸준한 복습</h4>
              <p className="text-gray-600">
                정기적으로 이전 토픽들을 복습하세요. 시스템 디자인은 반복 학습이 중요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
