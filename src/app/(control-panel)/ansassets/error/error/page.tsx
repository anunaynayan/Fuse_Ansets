

import React from 'react'
import ErrorPage from './error'

export default function App ()  {
  return (
    <div className="w-full h-screen flex items-center justify-center">

        <ErrorPage
      code="404"
      emoji="🤖"
      title="Page Not Found"
      message="The page you are trying to access does not exist."
      buttonText="Back to Home"
      redirectTo="/"
      videoSrc="/data/Robot run.webm"
    />

 {/* <ErrorPage
      code="500"
      emoji="⚠️"
      title="Internal Server Error"
      message="Something went wrong on our server. We are working to fix it."
      buttonText="Reload Page"
      redirectTo="/"
      videoSrc="/data/Robot error.webm"
      gradient="linear-gradient(135deg, #2d0a0a 0%, #7f1d1d 100%)"
    /> */}





    </div>
  )
}
