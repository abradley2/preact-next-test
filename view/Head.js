import Head from 'next/head'

export default () => (<Head>
  <meta charset='utf-8' key='charset' />
  <meta name='viewport' content='width=device-width, initial-scale=1' key='viewport' />
  <title key='title'>Wall of Scrubbery</title>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Mono' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet' />
  <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
  <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css' rel='stylesheet' />
  <link rel='stylesheet' href='https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css' />
  <style>
    {`body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
      }`}
  </style>
</Head>)
