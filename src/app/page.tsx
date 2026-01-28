import TestChatBot from '@/components/TestChatBot'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            International Business Practice Exams
          </h1>

          <p className="text-lg md:text-xl text-purple-700 font-medium mb-6">
            Upload the theory PDF and automatically generate a multiple-choice exam for University of Applied Sciences students.
          </p>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src="/images/ai-voor-docenten-logo.png"
                alt="AI voor Docenten Logo"
                width={192}
                height={96}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: '1. Upload the theory',
                description: 'Drag the theory PDF into the upload area or click to choose the file.'
              },
              {
                title: '2. Build the exam',
                description: 'Choose the number of questions and generate a prompt for a multiple-choice exam.'
              },
              {
                title: '3. Time to practise',
                description: 'The AI creates a practice exam with answers and a short explanation per question.'
              }
            ].map((step) => (
              <div key={step.title} className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100">
                <h2 className="text-lg font-semibold text-purple-800 mb-2">{step.title}</h2>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📘</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Create a practice exam instantly</h2>
                <p className="text-sm text-gray-600">
                  Use AI to turn theory from your PDF into exam questions at International Business curriculum level.
                </p>
              </div>
            </div>
            <TestChatBot />
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="bg-purple-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-2">High-quality questions</h3>
              <p className="text-sm text-purple-100">
                The AI varies between concepts, applied cases, and critical-thinking questions so students build real understanding.
              </p>
            </div>
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Ideal for self-study</h3>
              <p className="text-sm text-gray-600">
                Share the generated exam with your class or use it for personal preparation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
