# talavarp — Privacy Policy

*Last updated: 2026-06-10*

talavarp is a browser extension that overlays translated subtitles on programmes
at ruv.is. It is built to handle as little data as possible.

## What talavarp does NOT do

- No analytics, telemetry, tracking, or advertising of any kind.
- No personal data is collected, stored, or transmitted to the developer.
- No browsing history is read; the extension only runs on `https://www.ruv.is/sjonvarp/spila/*` pages, and only acts when you switch it on for a tab.
- Nothing is sold or shared with third parties beyond the translation requests described below.

## Data that leaves your browser

When subtitles are enabled for a tab, the Icelandic subtitle text of the
programme you are watching is sent to a translation service:

- **Free mode (default):** subtitle text is sent to Google's public translation
  endpoint (`translate.googleapis.com`).
- **Gemini mode (optional):** subtitle text is sent to the Google Gemini API
  (`generativelanguage.googleapis.com`) using an API key that you provide.
  Your key is sent only to that Google endpoint, never anywhere else.

In both cases the only content transmitted is the programme's subtitle text
(which RÚV publishes publicly) and your chosen target language. Google's
handling of that text is governed by Google's own privacy policies.

## Data stored locally on your device

- Your settings (target language, display options, translation provider, and
  your Gemini API key if you entered one) in the browser's extension storage.
- A local cache of translated subtitles, so episodes you re-watch don't need
  re-translating. At most the ~30 most recent episodes are kept.
- A per-tab on/off flag, which is cleared automatically when the tab or
  browser closes.

All of this stays in your browser. Removing the extension deletes it.

## Permissions

- `storage` — save your settings and the local translation cache.
- `activeTab` — let the popup act on the tab you opened it from.
- Content script on `https://www.ruv.is/sjonvarp/spila/*` — render the
  subtitle overlay on RÚV player pages only.

## Contact

Questions or concerns: https://github.com/afhverjuekki/talavarp/issues
