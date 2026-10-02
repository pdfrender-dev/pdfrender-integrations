# pdfrender

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

pdfrender turns HTML and CSS into PDF over a REST API and an MCP server. WeasyPrint 70 lays out the pages, with paper size, margins, headers, footers and page numbers set in CSS. It runs no JavaScript and fetches no URLs, so images and fonts go in as data: URIs. Limits are 2 MB of HTML and 50 pages per render. The servers are in Germany. The free plan has 100 credits a month and needs no card.

A Dify tool plugin for the [pdfrender API](https://pdfrender.dev).

## Setup

1. Install **pdfrender** from the Dify Marketplace (Plugins → Marketplace).
2. [Create an API key](https://pdfrender.dev/go/dify?to=/app/api-keys).
3. Open the plugin's tool settings, choose **Authorize** and paste the key as the pdfrender API key credential.

## Usage

Add the tools to a workflow, chatflow or agent. File inputs take a Dify file; JSON object and array inputs take JSON text. JSON answers come back as JSON, text and XML as text, documents as files. A tool that queues a job returns its id: poll it with the job tool, then fetch its result with the matching result tool.

| Tool | Endpoint | What it does |
|---|---|---|
| Get me | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| Render HTML to PDF | `POST /v1/render` | Render an HTML document to a PDF |

## Connection

The plugin connects to `https://api.pdfrender.dev` over HTTPS and sends the API key in the `X-API-Key` header; the Dify instance needs outbound network access to that endpoint. API reference: https://pdfrender.dev/docs

## Source and support

Source repository: https://github.com/pdfrender-dev/pdfrender-integrations/tree/main/dify

Support: https://pdfrender.dev/support
