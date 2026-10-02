# pdfrender — TypeScript SDK

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

```sh
npm install @pdfrender-dev/sdk
```

[Get an API key](https://pdfrender.dev/go/npm-sdk?to=/app/api-keys) and set it once:

```ts
import { client, getMe } from '@pdfrender-dev/sdk';

client.setConfig({ auth: process.env.PDFRENDER_API_KEY });
const { data, error } = await getMe();
```

Every operation is a function taking `{ path, query, body }`; file fields take a `Blob` or `File`. Requests go to `https://api.pdfrender.dev` (`client.setConfig({ baseUrl })` to change it).

## Operations

| Function | Endpoint | What it does |
|---|---|---|
| `getMe` | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| `renderHtmlToPdf` | `POST /v1/render` | Render an HTML document to a PDF |

Generated with @hey-api/openapi-ts from [`openapi.sdk.json`](../openapi.sdk.json). API reference: https://pdfrender.dev/docs · Support: https://pdfrender.dev/support
