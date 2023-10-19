# Sauce Visual + Cypress with big screens

This projects intends to show how to generate big screenshots, without scrolling.

It relies on `before:browser:launch` that permits to set the viewport. In this example, we will simulate a 3000x13000 screen, that would fit the long home page of github.

With that resolution, screenshots dimensions would be for
- Chrome: 
- Firefox:
- Electron: 

Note: Timeout had to be increased, because Electron was really slow to take screenshots that big.