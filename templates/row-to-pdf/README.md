# New sheet row to PDF

An [n8n](https://n8n.io) workflow: each new row in a Google Sheet becomes a PDF
document (here an invoice), and Gmail sends it to the address in the row.

```
Google Sheets Trigger (row added) -> Code: build HTML -> pdfrender: Render HTML to PDF -> Gmail: send with attachment
```

## What you need

- n8n with the pdfrender community node `@pdfrender-dev/n8n-nodes-pdfrender`
  (self-hosted: **Settings > Community Nodes > Install**).
- A pdfrender API key: https://pdfrender.dev/go/tpl-row-to-pdf?to=/app/api-keys
- Google Sheets Trigger and Gmail credentials in n8n.
- A sheet whose first row holds the headers `Invoice`, `Client`, `Email`,
  `Description`, `Quantity`, `Unit price`, `Due date`.

## Set it up

1. In n8n, **Import from File** and pick `workflow.json`.
2. **New row in sheet**: add the credential, then pick the document and the
   sheet. It checks for new rows every minute.
3. **Build HTML**: rename the columns if your headers differ, and edit the
   layout. Every value is HTML-escaped.
4. **Render PDF**: add a **pdfrender API** credential with your key.
5. **Email the PDF**: add a Gmail credential.

The trigger carries a pinned sample row, so **Execute workflow** runs end to
end before you connect a sheet.

## Other row sources

- **Airtable**: replace the trigger with an **Airtable Trigger** and keep the
  field names in **Build HTML** in step with your table.
- **monday.com**: n8n has no monday.com trigger node. Add a **Webhook** node,
  point a monday.com webhook integration ("when an item is created") at it,
  and read the item's column values with the **monday.com** node
  (**Board Item > Get**) before **Build HTML**.
- To file the PDF instead of emailing it, replace **Email the PDF** with a
  Google Drive **Upload** step; the PDF is in the binary field `data`.

## n8n Cloud

n8n Cloud installs only verified community nodes. Until the pdfrender node is
verified, replace **Render PDF** with an **HTTP Request** node:
`POST https://api.pdfrender.dev/v1/render` with the header
`X-API-Key: <your key>`, **Send Body** on, **Body Content Type** JSON,
**Specify Body** "Using Fields Below" with `html` = `{{ $json.html }}` and
`filename` = `{{ $json.filename }}`, and **Options > Response > Response
Format** set to **File**. The PDF then lands in the binary field `data`, like
the pdfrender node's.
