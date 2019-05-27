# zonkytest
Test app for Zonky

## Task
- Sample app in any framework
- no UI/UX requirments specified
- load loans
- filter by %
- calculate average amount

## Example request
https://app.zonky.cz/api/loans/marketplace?rating__in=%5B%22B%22%2C%22C%22%5D.
See percent encoding  http://en.wikipedia.org/wiki/Percent-encoding
The `rating_in` is URL encododed, so the value is this rating__in=%5B"B"%2C"C"%5D
Which can in human language is this: `?rating_in=["B", "C"]`
But beware that square brackets are reserved for IPv6, so they can't be used in url directly. They need to be encoded.

## Deployment
1. Githup repo is link with Github pages
1. Github pages are configured to display branch `master` and folder `/docs`
1. To build use this command `ng build --prod --output-path docs --base-href https://davidvotrubec.github.io/zonkytest/`

The `--base-href` is critical and has to contain full url to the github pages, ending with trailing slash. I've seen examples using just the repo name, but that generated wrong values. The urls actually pointed to localhost.
