import Link from 'next/link'
import { BookOpen, Target, Users, Zap, TrendingUp, Award } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "체계적인 학습",
      description: "시스템 디자인의 핵심 개념들을 단계별로 학습할 수 있습니다."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "인터뷰 준비",
      description: "실제 인터뷰에서 나올 수 있는 질문들과 모범 답변을 제공합니다."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "실무 적용",
      description: "실제 프로덕션 환경에서 사용되는 시스템 설계 패턴들을 다룹니다."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "빠른 학습",
      description: "핵심 내용만을 간결하게 정리하여 효율적으로 학습할 수 있습니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "진행도 추적",
      description: "학습 진행 상황을 추적하고 관리할 수 있습니다."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "인증 시스템",
      description: "학습 완료 시 인증서를 발급받을 수 있습니다."
    }
  ]

  const topics = [
    {
      title: "기본 개념",
      description: "시스템 디자인의 기본 원리와 용어",
      href: "/topics/basics",
      color: "bg-blue-500"
    },
    {
      title: "확장성",
      description: "수평/수직 확장, 로드 밸런싱",
      href: "/topics/scalability",
      color: "bg-green-500"
    },
    {
      title: "가용성",
      description: "고가용성, 장애 복구, 백업",
      href: "/topics/availability",
      color: "bg-purple-500"
    },
    {
      title: "성능",
      description: "캐싱, CDN, 데이터베이스 최적화",
      href: "/topics/performance",
      color: "bg-orange-500"
    },
    {
      title: "보안",
      description: "인증, 인가, 암호화, 보안 모범 사례",
      href: "/topics/security",
      color: "bg-red-500"
    },
    {
      title: "실제 사례",
      description: "Netflix, Twitter, Uber 등 실제 시스템 분석",
      href: "/topics/case-studies",
      color: "bg-indigo-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">시스템 디자인 스터디</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/topics" className="text-gray-600 hover:text-blue-600 transition-colors">
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            시스템 디자인 인터뷰를 위한
            <span className="text-blue-600"> 완벽한 가이드</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            체계적인 학습으로 시스템 디자인 인터뷰를 완벽하게 준비하세요. 
            실제 인터뷰 질문부터 실무 적용까지 모든 것을 다룹니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/topics"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              학습 시작하기
            </Link>
            <Link 
              href="/quiz"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              퀴즈 풀기
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            왜 이 웹사이트를 선택해야 할까요?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            학습할 토픽들
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link 
                key={index} 
                href={topic.href}
                className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className={`w-12 h-12 ${topic.color} rounded-lg flex items-center justify-center mb-4`}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h4>
                <p className="text-gray-600">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            지금 바로 시작하세요!
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            시스템 디자인 인터뷰 준비를 위한 완벽한 학습 경험을 제공합니다.
          </p>
          <Link 
            href="/topics"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            무료로 시작하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 시스템 디자인 스터디. 모든 권리 보유.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
