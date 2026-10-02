# Scheduled report as a PDF, sent by email

An [n8n](https://n8n.io) workflow: every morning at 7:00 it fetches records
from an API, builds one color-coded HTML report, renders it to a PDF with the
pdfrender node and emails it.

```
Schedule Trigger (daily 7:00) -> HTTP Request: fetch records -> Code: build report HTML -> pdfrender: Render HTML to PDF -> Gmail: send with attachment
```

The sample report lists items with an expiry date (insurance, inspections,
permits) grouped by urgency: expired (red), due within 7 days (orange) and due
within 30 days (yellow). The same shape serves a weekly or monthly client
report: change the schedule, the data source and the HTML.

## What you need

- n8n with the pdfrender community node `@pdfrender-dev/n8n-nodes-pdfrender`
  (self-hosted: **Settings > Community Nodes > Install**).
- A pdfrender API key: https://pdfrender.dev/go/tpl-scheduled-report-pdf-email?to=/app/api-keys
- A Gmail credential in n8n.
- An API that returns the records as a JSON array of objects with `name`,
  `type` and an ISO date `expires`, or any n8n node that outputs such items
  (a database query, Google Sheets, Airtable).

## Set it up

1. In n8n, **Import from File** and pick `workflow.json`.
2. **Every day at 7:00**: change the hour, or the interval to weeks or months.
   The time zone is the workflow's (**Settings > Timezone**).
3. **Fetch records**: set the URL and authentication of your API.
4. **Build report HTML**: rename the keys, change the thresholds and the
   layout. Every value is HTML-escaped. The page is A4 landscape with the
   date in the header and page numbers in the footer.
5. **Render PDF**: add a **pdfrender API** credential with your key.
6. **Email the PDF**: add a Gmail credential and set the recipients.

**Fetch records** carries pinned sample records, so **Execute workflow** runs
end to end before you point it at your API.

## n8n Cloud

n8n Cloud installs only verified community nodes. Until the pdfrender node is
verified, replace **Render PDF** with an **HTTP Request** node:
`POST https://api.pdfrender.dev/v1/render` with the header
`X-API-Key: <your key>`, **Send Body** on, **Body Content Type** JSON,
**Specify Body** "Using Fields Below" with `html` = `{{ $json.html }}` and
`filename` = `{{ $json.filename }}`, and **Options > Response > Response
Format** set to **File**. The PDF then lands in the binary field `data`, like
the pdfrender node's.
