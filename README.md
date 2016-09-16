# Webhopper

A CSS library and HTML implementation reference for representing [Grasshopper 3D](http://grasshopper3d.com) UI elements in a browser.

See [examples here](jekyll github page).

# Installation

Simply reference the `dist/webhopper.css` file into your app or import the `sass/webhopper` module.

Proper support for the hover tooltips requires some simple javascript — see `library/app/webhopper.js`

Proper support for drawing node connections is on the TODO list.

# Development (Styles/Markup Documentation)

This uses [Astrum](https://github.com/NoDivide/astrum) to document and display the components. To build a copy of this site locally, first install project dependencies:

    npm install

Then build the templates using Astrum:

    npm run astrum init library

Then run the gulp task to start the local server:

    npm run gulp

# Development (Components Documentation)

This uses Metahopper and a Grasshopper definition to extract an XML file of all installed components. A script then translates it into the styles and markup needed for Astrum.

0. Ensure the metahopper plugin is installed
1. Open grasshopper and `extractor.gh`
2. Run, save output XML as `extraction.xml`
3. Open terminal, run `translator.py`

# Acknowledgements

All design elements adapted from the user interface of Grasshopper 3D. Grasshopper 3D was developed by David Rutten at [Robert McNeel & Associates](http://www.en.na.mcneel.com).

Major thanks to Andrew Heumann and Harsh Gupta for their work on [rhino.github.io](http://rhino.github.io) which has been used here directly in many cases.

# License

This code is available under the MIT license.