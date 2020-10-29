import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function GoogEyes() {
  return (
    <div className="container">
      <Head>
        <title>Google Analytics End to End setup, from site build to business owner.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Alex follows instructions and reads documentation." />
        <p className="description">
          First edits made to <code>Index</code>
        </p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
