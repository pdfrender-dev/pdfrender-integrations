# New sheet row to PDF

An [n8n](https://n8n.io) workflow: each new row in a Google Sheet becomes a PDF
document (here an invoice), and Gmail sends it to the address in the row.

```
Google Sheets Trigger (row added) -> Code: build HTML -> HTTP Request: POST /v1/render -> Gmail: send with attachment
```

## What you need

- n8n Cloud, or a self-hosted n8n 2.33 or later. Every node in the workflow
  ships with n8n, so there is nothing to install.
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
4. **Render PDF**: create a **Header Auth** credential with the name
   `X-API-Key` and your API key as the value.
5. **Email the PDF**: add a Gmail credential.

The trigger carries a pinned sample row, so **Execute workflow** runs end to
end before you connect a sheet.

## The HTTP Request node

**Render PDF** comes set up like this:

- **Method** `POST`, **URL** `https://api.pdfrender.dev/v1/render`.
- **Authentication** Generic Credential Type, **Generic Auth Type** Header Auth.
- **Send Body** on, **Body Content Type** JSON, **Specify Body** "Using Fields
  Below": `html` = `{{ $json.html }}` and `filename` = `{{ $json.filename }}`.
- **Options > Response > Response Format** File, **Put Output in Field**
  `data`. Gmail attaches that field.

Each render costs 1 credit, whatever its page count, and a failed render costs
nothing.

## Other row sources

- **Airtable**: replace the trigger with an **Airtable Trigger** and keep the
  field names in **Build HTML** in step with your table.
- **monday.com**: n8n has no monday.com trigger node. Add a **Webhook** node,
  point a monday.com webhook integration ("when an item is created") at it,
  and read the item's column values with the **monday.com** node
  (**Board Item > Get**) before **Build HTML**.
- To file the PDF instead of emailing it, replace **Email the PDF** with a
  Google Drive **Upload** step; the PDF is in the binary field `data`.
