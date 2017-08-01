import React from 'react';

const Layout = props => (
  <html lang="es">
    <head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="http://localhost:3001/styles.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
    </head>
    <body>
      <div
        id="render-target"
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
      <script src="http://localhost:3001/app.js" />
    </body>
  </html>
);


export default Layout;
