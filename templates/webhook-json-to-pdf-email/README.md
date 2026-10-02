# Webhook JSON to PDF, sent by email

An [n8n](https://n8n.io) workflow: a webhook receives a JSON payload, a Code
node turns the fields you choose into an HTML document, the pdfrender node
renders it to a PDF, and Gmail sends the PDF as an attachment.

```
Webhook (POST) -> Code: build HTML -> pdfrender: Render HTML to PDF -> Gmail: send with attachment
```

## What you need

- n8n with the pdfrender community node `@pdfrender-dev/n8n-nodes-pdfrender`
  (self-hosted: **Settings > Community Nodes > Install**).
- A pdfrender API key: https://pdfrender.dev/go/tpl-webhook-json-to-pdf-email?to=/app/api-keys
- A Gmail credential in n8n (or swap the last node for **Send Email** over SMTP).

## Set it up

1. In n8n, **Import from File** and pick `workflow.json`.
2. **Receive order JSON**: copy the production URL. The node answers the
   caller at once and makes the PDF afterwards.
3. **Build HTML**: change the field names and the HTML to match your payload.
   Only the fields named there reach the PDF, so a new or renamed key in the
   payload cannot break the layout, and every value is HTML-escaped.
4. **Render PDF**: add a **pdfrender API** credential with your key.
5. **Email the PDF**: add a Gmail credential. The recipient comes from
   `customer.email` in the payload.
6. Activate the workflow and send a test call:

```bash
curl -X POST https://<your-n8n>/webhook/order-to-pdf \
  -H 'Content-Type: application/json' \
  -d '{"order_id": "2026-0412", "customer": {"name": "Northwind Studio", "email": "billing@example.com"},
       "items": [{"name": "Design retainer", "qty": 1, "unit_price": 1800}]}'
```

The Webhook node carries pinned sample data, so **Execute workflow** runs end
to end before any real call arrives. Unpin it to receive live requests.

## n8n Cloud

n8n Cloud installs only verified community nodes. Until the pdfrender node is
verified, replace **Render PDF** with an **HTTP Request** node:
`POST https://api.pdfrender.dev/v1/render` with the header
`X-API-Key: <your key>`, **Send Body** on, **Body Content Type** JSON,
**Specify Body** "Using Fields Below" with `html` = `{{ $json.html }}` and
`filename` = `{{ $json.filename }}`, and **Options > Response > Response
Format** set to **File**. The PDF then lands in the binary field `data`, like
the pdfrender node's.

## Limits

pdfrender renders HTML and CSS with WeasyPrint: no JavaScript, and images and
fonts go into the HTML as `data:` URIs (remote URLs are rejected). Up to 2 MB
of HTML and 50 pages per call.
