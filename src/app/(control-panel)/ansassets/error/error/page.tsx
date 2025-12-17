
// "use client";
// import React from 'react'
// // import ErrorPage from './error'
// import Error404 from './error2'
// import Error500 from './error3';
// import ErrorPage from './error4';
// import OopsErrorPage from './error5';

// export default function App ()  {
//   return (
//     <div className="w-full h-screen flex items-center justify-center">

//         <ErrorPage
//       code="404"
//       emoji="🤖"
//       title="Page Not Found"
//       message="The page you are trying to access does not exist."
//       buttonText="Back to Home"
//       redirectTo="/"
//       videoSrc="/data/Robot run.webm"
//     />

//  {/* <ErrorPage
//       code="500"
//       emoji="⚠️"
//       title="Internal Server Error"
//       message="Something went wrong on our server. We are working to fix it."
//       buttonText="Reload Page"
//       redirectTo="/"
//       videoSrc="/data/Robot error.webm"
//       gradient="linear-gradient(135deg, #2d0a0a 0%, #7f1d1d 100%)"
//     /> */}


// <Error404/>
// <Error500/>
// <ErrorPage/>

// <OopsErrorPage/>
//     </div>
//   )
// }


"use client";
import React from "react";
import ErrorPage from "./error";
import Error404 from "./error2";
import Error500 from "./error3";
import ErrorPages from "./error4";
import OopsErrorPage from "./error5";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-400 px-6 py-16">
      
      {/* ---------- MAIN HEADING ---------- */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Application Error Pages
        </h1>

        <p className="text- text-lg max-w-3xl mx-auto">
          Below are different error page UI states used across the application.
          Each error page is reusable, responsive, and designed to handle
          different failure scenarios.
        </p>
      </div>

      {/* ---------- ERROR PAGES GRID ---------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* 404 Reusable Error */}
        <div className="rounded-2xl overflow-hidden">
          <ErrorPage
            code="404"
            emoji="🤖"
            title="Page Not Found"
            message="The page you are trying to access does not exist."
            buttonText="Back to Home"
            redirectTo="/"
            videoSrc="/data/Robot run.webm"
          />
        </div>

        {/* 404 Custom UI */}
        <div className="rounded-2xl overflow-hidden">
          <Error404 />
        </div>

        {/* 500 Error */}
        <div className="rounded-2xl overflow-hidden">
          <Error500 />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <ErrorPages />
        </div>

        {/* Oops Error */}
        <div className="rounded-2xl overflow-hidden">
          <OopsErrorPage />
        </div>

      </div>
    </div>
  );
}
