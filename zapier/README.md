# pdfrender for Zapier

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

pdfrender turns HTML and CSS into PDF over a REST API and an MCP server. WeasyPrint 70 lays out the pages, with paper size, margins, headers, footers and page numbers set in CSS. It runs no JavaScript and fetches no URLs, so images and fonts go in as data: URIs. Limits are 2 MB of HTML and 50 pages per render. The servers are in Germany. The free plan has 100 credits a month and needs no card.

The [pdfrender](https://pdfrender.dev) integration for Zapier, version 1.0.2,
generated from the API's [OpenAPI document](../openapi.json). Connect it with
an API key: [create one](https://pdfrender.dev/go/zapier?to=/app/api-keys).

| Action | What it does |
|---|---|
| `get_me` | Your plan, remaining requests, and remaining credits |
| `render_html_to_pdf` | Render an HTML document to a PDF |

## Develop

```sh
npm install
npx zapier-platform validate --without-style
API_KEY=... npm test   # live calls; without a key only the definitions are checked
```

Linked to Zapier integration `247124` (`.zapierapprc`). Releases of this repository push the version to Zapier
(`.github/workflows/publish.yml`).

Support: https://pdfrender.dev/support
