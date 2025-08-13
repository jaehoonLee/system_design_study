'use client'

import Link from 'next/link'
import { BookOpen, Trophy, Calendar, Target, TrendingUp, Award } from 'lucide-react'

export default function ProgressPage() {
  // 실제 구현에서는 이 데이터를 로컬 스토리지나 데이터베이스에서 가져올 것입니다
  const progressData = {
    overallProgress: 35,
    totalTopics: 6,
    completedTopics: 1,
    totalLessons: 42,
    completedLessons: 5,
    totalQuizzes: 6,
    completedQuizzes: 2,
    streak: 7,
    totalStudyTime: 180, // 분 단위
    achievements: [
      { id: 1, name: '첫 번째 레슨 완료', description: '첫 번째 레슨을 완료했습니다', icon: '🎯', unlocked: true },
      { id: 2, name: '일주일 연속 학습', description: '7일 연속으로 학습했습니다', icon: '🔥', unlocked: true },
      { id: 3, name: '퀴즈 마스터', description: '첫 번째 퀴즈를 완료했습니다', icon: '🏆', unlocked: true },
      { id: 4, name: '토픽 완료', description: '첫 번째 토픽을 완료했습니다', icon: '📚', unlocked: true },
      { id: 5, name: '한 달 학습', description: '30일 연속으로 학습했습니다', icon: '📅', unlocked: false },
      { id: 6, name: '모든 토픽 완료', description: '모든 토픽을 완료했습니다', icon: '🎓', unlocked: false }
    ],
    topics: [
      { id: 'basics', title: '기본 개념', progress: 100, lessons: 5, completed: 5, color: 'bg-blue-500' },
      { id: 'scalability', title: '확장성', progress: 0, lessons: 7, completed: 0, color: 'bg-green-500' },
      { id: 'availability', title: '가용성', progress: 0, lessons: 6, completed: 0, color: 'bg-purple-500' },
      { id: 'performance', title: '성능', progress: 0, lessons: 8, completed: 0, color: 'bg-orange-500' },
      { id: 'security', title: '보안', progress: 0, lessons: 6, completed: 0, color: 'bg-red-500' },
      { id: 'case-studies', title: '실제 사례', progress: 0, lessons: 10, completed: 0, color: 'bg-indigo-500' }
    ],
    recentActivity: [
      { type: 'lesson', title: '기본 개념 - 시스템 디자인이란?', date: '2024-01-15', time: '14:30' },
      { type: 'quiz', title: '기본 개념 퀴즈 완료', date: '2024-01-15', time: '15:45', score: '80%' },
      { type: 'lesson', title: '기본 개념 - 시스템 디자인 인터뷰 과정', date: '2024-01-14', time: '16:20' },
      { type: 'lesson', title: '기본 개념 - 기본 용어와 개념', date: '2024-01-13', time: '10:15' },
      { type: 'lesson', title: '기본 개념 - 시스템 아키텍처 패턴', date: '2024-01-12', time: '19:30' }
    ]
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    if (hours > 0) {
      return `${hours}시간 ${mins}분`
    }
    return `${mins}분`
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-600'
    if (progress >= 60) return 'text-blue-600'
    if (progress >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

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
              <Link href="/quiz" className="text-gray-600 hover:text-blue-600 transition-colors">
                퀴즈
              </Link>
              <Link href="/progress" className="text-blue-600 font-semibold">
                진행도
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Progress */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">전체 진행도</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">전체 진행도</p>
                  <p className="text-2xl font-bold text-gray-900">{progressData.overallProgress}%</p>
                </div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressData.overallProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">완료된 레슨</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {progressData.completedLessons}/{progressData.totalLessons}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">완료된 퀴즈</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {progressData.completedQuizzes}/{progressData.totalQuizzes}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">연속 학습</p>
                  <p className="text-2xl font-bold text-gray-900">{progressData.streak}일</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topics Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">토픽별 진행도</h3>
              <div className="space-y-4">
                {progressData.topics.map((topic) => (
                  <div key={topic.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 ${topic.color} rounded-lg flex items-center justify-center text-white text-sm font-semibold mr-3`}>
                          {topic.title.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{topic.title}</h4>
                          <p className="text-sm text-gray-600">
                            {topic.completed}/{topic.lessons} 레슨 완료
                          </p>
                        </div>
                      </div>
                      <span className={`font-semibold ${getProgressColor(topic.progress)}`}>
                        {topic.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${topic.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${topic.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">업적</h3>
              <div className="space-y-4">
                {progressData.achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border ${
                      achievement.unlocked 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200 opacity-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{achievement.icon}</span>
                      <div>
                        <h4 className={`font-semibold ${
                          achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.name}
                        </h4>
                        <p className={`text-sm ${
                          achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">최근 활동</h3>
            <div className="space-y-4">
              {progressData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                      activity.type === 'lesson' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {activity.type === 'lesson' ? (
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Trophy className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">
                        {activity.date} {activity.time}
                        {activity.score && (
                          <span className="ml-2 text-green-600 font-semibold">
                            점수: {activity.score}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Study Statistics */}
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">학습 통계</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">총 학습 시간</h4>
                <p className="text-2xl font-bold text-blue-600">{formatTime(progressData.totalStudyTime)}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">연속 학습</h4>
                <p className="text-2xl font-bold text-green-600">{progressData.streak}일</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">완료한 토픽</h4>
                <p className="text-2xl font-bold text-purple-600">{progressData.completedTopics}/{progressData.totalTopics}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
