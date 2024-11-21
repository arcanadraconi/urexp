import React from 'react';
import './globals.css'

// Add Montserrat font via Google Fonts CDN
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional medical chart analysis tool for healthcare providers. Automated patient chart review, status recommendations, and InterQual assessments." />
        <meta name="keywords" content="medical chart review, patient assessment, healthcare AI, InterQual, clinical documentation, medical analysis, healthcare automation, patient status determination, medical decision support, healthcare technology" />
        <meta name="author" content="URExpert" />
        <title>URExpert - Medical Chart Analysis & Review</title>
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="URExpert - Medical Chart Analysis & Review" />
        <meta property="og:description" content="Professional medical chart analysis tool for healthcare providers." />
        <meta property="og:url" content="https://urexpert.ai" />
        <meta property="og:site_name" content="URExpert" />
        <meta property="og:image" content="/urexpertlogo.png" />
        
        <style>{fontStyles}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
