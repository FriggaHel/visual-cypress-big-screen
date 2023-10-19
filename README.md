# Sauce Visual + Cypress with big screens

This projects intends to show how to generate big screenshots, without scrolling (using `capture: "viewport"`).

## Run

In order to run that example, you need to set your Sauce Labs credentials in the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

## Details

It relies on `before:browser:launch` that permits to set the viewport. In this example, we will simulate a 3000x13000 screen, that would fit the long home page of github.

With that resolution, screenshots dimensions would be:
- Chrome: 3000x12871
- Firefox: 3000x12999
- Electron: 6000x26000

Note: Timeout had to be increased, because Electron was really slow to take screenshots that big.