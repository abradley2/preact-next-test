import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Wall of Scrubbery</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css' rel='stylesheet' />
          <style>
            {`body {
              font-family: 'Roboto', sans-serif;
              font-size: 14px;
            }`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
