# pdfrender — Python SDK

HTML and CSS to PDF API and MCP server. WeasyPrint with page headers, footers and page numbers, no headless browser. Hosted in Germany.

```sh
pip install pdfrender
```

[Get an API key](https://pdfrender.dev/go/pypi-sdk?to=/app/api-keys) and pass it to the client:

```python
import os

from pdfrender import AuthenticatedClient
from pdfrender.api.account import get_me

client = AuthenticatedClient(
    base_url="https://api.pdfrender.dev",
    token=os.environ["PDFRENDER_API_KEY"],
    auth_header_name="X-API-Key",
    prefix="",
)
print(get_me.sync(client=client))
```

Every operation is a module with `sync`, `sync_detailed`, `asyncio` and `asyncio_detailed`; file fields take a `pdfrender.types.File(payload=..., file_name=..., mime_type=...)`.

## Operations

| Operation | Module | What it does |
|---|---|---|
| `GET /v1/me` | `pdfrender.api.account.get_me` | Your plan, remaining requests, and remaining credits |
| `POST /v1/render` | `pdfrender.api.render.render_html_to_pdf` | Render an HTML document to a PDF |

Generated with openapi-python-client from [`openapi.sdk.json`](../openapi.sdk.json). API reference: https://pdfrender.dev/docs · Support: https://pdfrender.dev/support
