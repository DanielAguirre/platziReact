import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Pages from './pages/containers/Pages';
import Layout from './pages/components/Layout';


function requestHandler(req, res) {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Pages />
    </StaticRouter>);

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(
    renderToStaticMarkup(
      <Layout
        title="Application"
        content={html}
      />));
  res.end();
}


const server = http.createServer(requestHandler);

server.listen(3000);
