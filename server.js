'use strict';

import http from 'http'
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/containers/Pages';


function requestHandler(req, res) {
  const context = {};
  let html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Pages />
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
}


const server = http.createServer(requestHandler);

server.listen(3000);
