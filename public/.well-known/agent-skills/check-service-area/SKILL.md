---
name: check-service-area
description: Check whether J&L Security covers a given UK town or postcode for security and fire-alarm work across Essex and Greater London.
---

# Check J&L Security coverage

J&L Security covers Essex and Greater London, including Brentwood, Chelmsford,
Basildon, Romford, Ilford, Hornchurch, Upminster, Barking, Dagenham, Redbridge,
Harlow, Epping and many Greater London areas (postcode areas including CM, RM,
IG, SS, EN, E, N, NW, SE, SW, W, WC and EC).

## How to use

Call the MCP server at `https://jandlsecurity.co.uk/mcp` with tool
`check_service_area` and `{ "location": "<town or postcode>" }`. It returns whether
the area is covered, the confidence level, and what it matched on.

Examples:

- `{ "location": "Brentwood" }` -> covered (Essex).
- `{ "location": "CM13" }` -> likely covered (CM postcode area).
- `{ "location": "Manchester" }` -> not confirmed; advise calling 0204 538 5925.

If coverage is uncertain, ask the user to confirm with J&L on 0204 538 5925
or 0208 220 4770.
