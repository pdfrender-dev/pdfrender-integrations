# @pdfrender-dev/n8n-nodes-pdfrender

An [n8n](https://n8n.io) community node for the [pdfrender API](https://pdfrender.dev).

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

pdfrender turns HTML and CSS into PDF over a REST API and an MCP server. WeasyPrint 70 lays out the pages, with paper size, margins, headers, footers and page numbers set in CSS. It runs no JavaScript and fetches no URLs, so images and fonts go in as data: URIs. Limits are 2 MB of HTML and 50 pages per render. The servers are in Germany. The free plan has 100 credits a month and needs no card.

## Installation

In n8n, open **Settings > Community Nodes**, choose **Install** and enter `@pdfrender-dev/n8n-nodes-pdfrender`.

## Credentials

[Create an API key](https://pdfrender.dev/go/n8n?to=/app/api-keys), then add an **pdfrender API** credential in n8n and paste the key.

## Operations

| Resource | Operation | What it does |
|---|---|---|
| Account | Get Me | Your plan, remaining requests, and remaining credits |
| Pdfrender | Render HTML To PDF | Render an HTML document to a PDF |

File inputs read an input binary field (default `data`). JSON answers become the item; text and XML answers come back as `data`; files as the binary field `data`. Queued jobs are polled until they finish.

## Support

https://pdfrender.dev/support
