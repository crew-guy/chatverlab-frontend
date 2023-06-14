import React from 'react'
import Head from 'next/head';

const Meta = () => {
  const title = "Guvnor";
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Guvnor</title>
      <meta name="title" content="cloudpilot" />
      <meta name="description" content="Education on a map" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://map.coursepanel.in/" />
      <meta property="og:title" content="Guvnor" />
      <meta property="og:description" content="Education on a map" />
      <meta property="og:image" content="https://s3.ap-south-1.amazonaws.com/plan.coursepanel.in/meta/cloudpilot-meta.png" />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://map.coursepanel.in/" />
      <meta property="twitter:title" content="Guvnor" />
      <meta property="twitter:description" content="Education on a map" />
      <meta property="twitter:image" content="https://s3.ap-south-1.amazonaws.com/plan.coursepanel.in/meta/cloudpilot-meta.png" />
      <title>{title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      {/* <script src="https://clueso-dist.s3.us-west-1.amazonaws.com/clueso.js" defer onload="window.clueso.initialize('c66280b1-5423-4edf-a258-38e0d4043f6a', {createHelpButton: true})"></script> */}
    </Head>
  )
}

export default Meta
