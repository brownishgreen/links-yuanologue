'use client'

import './lightbulb.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import Iridescence from './components/Iridescence'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        className="fixed inset-0"
        style={{ zIndex: 0 }}
      />
      <main className={`relative min-h-screen flex items-center justify-center px-4 transition-colors ${isDark ? 'bg-gray-800/70' : 'bg-gray-50/70'
        }`} style={{ zIndex: 1 }}>
        <div className="relative w-full max-w-md space-y-6">
          {/* Theme Toggle*/}
          <div className="flex justify-end">
            <button
              className="theme-toggle"
              type="button"
              title="Toggle theme"
              aria-label="Toggle theme"
              aria-pressed={isDark}
              onClick={() => setIsDark(!isDark)}
            >
              <span className="theme-toggle-sr">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="1em"
                height="1em"
                className="theme-toggle__lightbulb"
                strokeWidth="0.7"
                stroke="currentColor"
                fill="currentColor"
                strokeLinecap="round"
                viewBox="0 0 32 32"
              >
                <path
                  strokeWidth="0"
                  d="M9.4 9.9c1.8-1.8 4.1-2.7 6.6-2.7 5.1 0 9.3 4.2 9.3 9.3 0 2.3-.8 4.4-2.3 6.1-.7.8-2 2.8-2.5 4.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5v-.1c.5-1.8 2-3.9 2.7-4.8 1.4-1.5 2.1-3.5 2.1-5.6 0-4.7-3.7-8.5-8.4-8.5-2.3 0-4.4.9-5.9 2.5-1.6 1.6-2.5 3.7-2.5 6 0 2.1.7 4 2.1 5.6.8.9 2.2 2.9 2.7 4.9 0 .2-.1.5-.4.5h-.1c-.2 0-.4-.1-.4-.4-.5-1.7-1.8-3.7-2.5-4.5-1.5-1.7-2.3-3.9-2.3-6.1 0-2.3 1-4.7 2.7-6.5z"
                />
                <path d="M19.8 28.3h-7.6" />
                <path d="M19.8 29.5h-7.6" />
                <path d="M19.8 30.7h-7.6" />
                <path
                  pathLength="1"
                  className="theme-toggle__lightbulb__coil"
                  fill="none"
                  d="M14.6 27.1c0-3.4 0-6.8-.1-10.2-.2-1-1.1-1.7-2-1.7-1.2-.1-2.3 1-2.2 2.3.1 1 .9 1.9 2.1 2h7.2c1.1-.1 2-1 2.1-2 .1-1.2-1-2.3-2.2-2.3-.9 0-1.7.7-2 1.7 0 3.4 0 6.8-.1 10.2"
                />
                <g className="theme-toggle__lightbulb__rays">
                  <path pathLength="1" d="M16 6.4V1.3" />
                  <path pathLength="1" d="M26.3 15.8h5.1" />
                  <path pathLength="1" d="m22.6 9 3.7-3.6" />
                  <path pathLength="1" d="M9.4 9 5.7 5.4" />
                  <path pathLength="1" d="M5.7 15.8H.6" />
                </g>
              </svg>
            </button>
          </div>

          {/* Profile Section */}
          <div className="text-center space-y-2">
            <div className={`w-24 h-24 rounded-full mx-auto mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'
              }`}><img src="/girnch-xmas.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" /></div>
            <h1 className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-gray-900'
              }`}>Yuan</h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>

            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            {/* <a
              href="https://blog.yuanologue.com"
              className={`block w-full p-4 text-center rounded-full transition-colors shadow-xl ${isDark
                ? 'border border-stone-600 text-white hover:bg-gradient-to-br from-stone-800 to-stone-900'
                : 'border border-stone-200 text-stone-900 hover:bg-gradient-to-br from-stone-50 to-stone-200'
                }`}
            >
              <FontAwesomeIcon icon={faNewspaper} style={{ width: '1em', height: '1em', display: 'inline-block' }} />
              <span className="ml-2">Blog</span>
            </a> */}

            <a
              href="https://github.com/brownishgreen"
              className={`block w-full p-4 text-center rounded-full transition-colors shadow-xl ${isDark
                ? 'border border-stone-600 text-white hover:bg-gradient-to-br from-stone-800 to-stone-900'
                : 'border border-stone-200 text-stone-900 hover:bg-gradient-to-br from-stone-50 to-stone-200'
                }`}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" style={{ width: '1.33em', height: '1.33em', display: 'inline-block' }} />
              <span className="ml-2">GitHub</span>
            </a>

            <a
              href="https://x.com/coconutbearrrr"
              className={`flex items-center justify-center w-full p-4 rounded-full transition-colors shadow-xl ${isDark
                ? 'border border-stone-600 text-white hover:bg-gradient-to-br from-stone-800 to-stone-900'
                : 'border border-stone-200 text-stone-900 hover:bg-gradient-to-br from-stone-50 to-stone-200'
                }`}
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" style={{ width: '1.33em', height: '1.33em', display: 'inline-block' }} />
              <span className="ml-2">Twitter</span>
            </a>


          </div>

          {/* Footer */}
          <div className={`text-center text-sm pt-8 ${isDark ? 'text-stone-200' : 'text-stone-600'
            }`}>
            Made with 🥨 & ☕️
          </div>
        </div>
      </main>
    </>
  )
}