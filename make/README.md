# pdfrender for Make

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

The [pdfrender](https://pdfrender.dev) custom app for Make, version 1.0.2,
generated from the API's [OpenAPI document](../openapi.json). Connect it with
an API key: [create one](https://pdfrender.dev/go/make?to=/app/api-keys).

| Module | What it does |
|---|---|
| `getMe` | Your plan, remaining requests, and remaining credits |
| `renderHtmlToPdf` | Render an HTML document to a PDF |

## Layout

- `app.json`: the app, its connection and modules (`deploy.sh` reads it);
- `base.imljson`, `groups.json`, `help.md`: the app's base, module groups and help;
- `connection/`: the API-key connection's `parameters` and `api`;
- `modules/<name>/`: each module's `api`, `expect` (mappable parameters),
  `interface` and `samples`.

## Publish

Linked to the Make app `pdfrender-qu7fsy`. Releases of this repository run `deploy.sh`
(`.github/workflows/publish.yml`), which needs
[make-cli](https://www.npmjs.com/package/@makehq/cli) 1.4.0, `jq`,
`MAKE_API_KEY` and `MAKE_ZONE`. The app logo (a 512 px PNG) is set by hand in
Make's app settings.

Support: https://pdfrender.dev/support
