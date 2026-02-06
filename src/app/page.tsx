'use client'

import { useState, type FormEvent } from 'react'

const preparednessOptions = [
  { value: '', label: 'Select an option' },
  { value: 'yes', label: 'Yes, I prepared' },
  { value: 'partly', label: 'Partially prepared' },
  { value: 'no', label: 'No, I did not prepare' },
]

const workingMethodOptions = [
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'needs-work', label: 'Needs improvement' },
  { value: 'poor', label: 'Unsatisfactory' },
]

export default function Home() {
  const [courseName, setCourseName] = useState('')
  const [sessionDate, setSessionDate] = useState('')
  const [workingMethod, setWorkingMethod] = useState('')
  const [prepared, setPrepared] = useState('')
  const [preparationEase, setPreparationEase] = useState('')
  const [partialPreparationReason, setPartialPreparationReason] = useState('')
  const [preparationReason, setPreparationReason] = useState('')
  const [sessionFeedback, setSessionFeedback] = useState('')
  const [improvements, setImprovements] = useState('')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmissionMessage(
      'Thank you! Your evaluation has been saved and helps improve the course.'
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            University of Applied Sciences
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            International Business Course Evaluation
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Share how you experienced the way of working in class and what
            influenced whether you prepared. Your feedback helps lecturers make
            each session better.
          </p>
        </header>

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <section className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="courseName">
                  Course or module
                </label>
                <select
                  id="courseName"
                  value={courseName}
                  onChange={(event) => setCourseName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  <option value="M&O">M&amp;O</option>
                  <option value="OSCM">OSCM</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="sessionDate">
                  Session date
                </label>
                <input
                  id="sessionDate"
                  type="date"
                  value={sessionDate}
                  onChange={(event) => setSessionDate(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                />
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">Experience with the way of working</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {workingMethodOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                      workingMethod === option.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="workingMethod"
                      value={option.value}
                      checked={workingMethod === option.value}
                      onChange={(event) => setWorkingMethod(event.target.value)}
                      className="mt-1 h-4 w-4 text-purple-600"
                      required
                    />
                    <span className="text-slate-700">{option.label}</span>
                  </label>
                ))}
              </div>
              <textarea
                value={sessionFeedback}
                onChange={(event) => setSessionFeedback(event.target.value)}
                placeholder="What worked well? What challenges did you face?"
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">Preparation for the session</h2>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700" htmlFor="prepared">
                  Did you prepare?
                </label>
                <select
                  id="prepared"
                  value={prepared}
                  onChange={(event) => {
                    setPrepared(event.target.value)
                    setPreparationEase('')
                    setPartialPreparationReason('')
                    setPreparationReason('')
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  required
                >
                  {preparednessOptions.map((option) => (
                    <option key={option.value || 'placeholder'} value={option.value} disabled={!option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {prepared === 'yes' ? (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-700">
                    How easy was it to prepare?
                  </p>
                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      { value: 'easy', label: 'It was very easy to do my preparations.' },
                      { value: 'neutral', label: 'It was neither hard nor easy to prepare.' },
                      { value: 'hard', label: 'It was hard to prepare.' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                          preparationEase === option.value
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preparationEase"
                          value={option.value}
                          checked={preparationEase === option.value}
                          onChange={(event) => setPreparationEase(event.target.value)}
                          className="mt-1 h-4 w-4 text-purple-600"
                          required
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {preparationEase ? (
                    <textarea
                      value={preparationReason}
                      onChange={(event) => setPreparationReason(event.target.value)}
                      placeholder="What was the reason for your experience?"
                      className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                      required
                    />
                  ) : null}
                </div>
              ) : null}
              {prepared === 'partly' ? (
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-700">
                    What kept you from preparing fully?
                  </p>
                  <div className="grid gap-3">
                    {[
                      {
                        value: 'time',
                        label:
                          "I didn't schedule enough time, because the amount of work was more than expected.",
                      },
                      { value: 'motivation', label: 'I had no motivation to really prepare it all.' },
                      { value: 'unknown', label: "I don't really know" },
                      { value: 'other', label: 'Another reason.' },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                          partialPreparationReason === option.value
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="partialPreparationReason"
                          value={option.value}
                          checked={partialPreparationReason === option.value}
                          onChange={(event) => setPartialPreparationReason(event.target.value)}
                          className="mt-1 h-4 w-4 text-purple-600"
                          required
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-800">Ideas for improvement</h2>
              <textarea
                value={improvements}
                onChange={(event) => setImprovements(event.target.value)}
                placeholder="What changes could make the sessions even better?"
                className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </section>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-500">
                Your response will be shared anonymously with the teaching team.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
              >
                Submit evaluation
              </button>
            </div>

            {submissionMessage ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
                {submissionMessage}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  )
}
