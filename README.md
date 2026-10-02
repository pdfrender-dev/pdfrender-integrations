# pdfrender integrations

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

pdfrender turns HTML and CSS into PDF over a REST API and an MCP server. WeasyPrint 70 lays out the pages, with paper size, margins, headers, footers and page numbers set in CSS. It runs no JavaScript and fetches no URLs, so images and fonts go in as data: URIs. Limits are 2 MB of HTML and 50 pages per render. The servers are in Germany. The free plan has 100 credits a month and needs no card.

Official integrations for the [pdfrender API](https://pdfrender.dev), generated from its [OpenAPI document](openapi.json) and published from this repository.

## Get an API key

[Create a key](https://pdfrender.dev/go/connectors?to=/app/api-keys) and send it in the `X-API-Key` header.

## Integrations

The first packages are on their way.

## Operations

| Operation | Endpoint | What it does |
|---|---|---|
| `get_me` | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| `render_html_to_pdf` | `POST /v1/render` | Render an HTML document to a PDF |

API reference: https://pdfrender.dev/docs · Base URL: `https://api.pdfrender.dev`

## Support

https://pdfrender.dev/support

Every file listed in `.generated` is rebuilt from the live API; changes to them are overwritten.
