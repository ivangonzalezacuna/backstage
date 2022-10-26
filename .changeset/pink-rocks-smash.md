---
'@backstage/plugin-tech-insights': patch
---

Set `Content-Type` header to `application/json`. Otherwise, the `text/plain` is added automatically
and the `runBulkChecks` call from the client is returning a 500 error.
