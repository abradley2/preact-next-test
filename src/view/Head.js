import Head from "next/head"

export default function HeadView () {
  return (<Head>
    <meta key="charset" charset="utf-8"  />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1"  />
    <title key="title">Wall of Scrubbery</title>
    <link key="roboto" href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
    <link key="fontweights" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    <link key="materialicons" href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link key="normalizecss" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" rel="stylesheet" />
    <link key="tachyons" rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    <style key="basestyles">
      {`body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.90)
      }
      button {
        transform: translateY(0px);
        transition: .20s;
      }
      button:active {
        transform: translateY(4px);
      }
      `}
    </style>
  </Head>)
}
