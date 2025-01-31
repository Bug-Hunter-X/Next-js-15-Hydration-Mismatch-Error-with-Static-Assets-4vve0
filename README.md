# Next.js 15 Hydration Mismatch Error with Static Assets

This repository demonstrates a common hydration mismatch error in Next.js 15 applications, specifically related to handling static assets.  The error arises from inconsistencies between client-side and server-side rendering of component paths to static files.

## Problem

The `pages/index.js` file contains minimal code to illustrate the issue, but the core problem is in how static files are referenced within the component, which can cause discrepancies leading to a hydration mismatch.  Next.js will report the error when rendering the page.