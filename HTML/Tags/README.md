Sure, here is the provided text formatted in the same style as the example:

## HTML Elements Overview

### Main Root:

1. **`<html>`**: Represents the root (top-level element) of an HTML document, serving as the parent element for all other elements in the document.
   - **Attributes**:
     - `manifest` [Deprecated]: Specifies the URI of a resource manifest indicating resources that should be cached locally.
     - `version` [deprecated]: Specifies the version of the HTML Document Type Definition governing the current document. Redundant with the version information in the document type declaration.
     - `xmlns`: Specifies the XML Namespace of the document. Required in documents parsed with XML parsers, optional in text/html documents.

### Document Metadata:

Metadata contains information about the page, including styles, scripts, and data to aid software (search engines, browsers, etc.) in using and rendering the page.

2. **`<base>`**: Specifies the base URL for all relative URLs in a document. Only one such element is allowed per document.
   - **Attributes**:
     - `href`: The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed. data: and javascript: URLs are not allowed.
     - `target`: Specifies the default browsing context for navigation results from `<a>`, `<area>`, or `<form>` elements without explicit target attributes. 

3. **`<head>`**: Contains machine-readable information (metadata) about the document, such as its title, scripts, and style sheets.
   - **Attributes**:
     - `profile` [Deprecated]: The URIs of one or more metadata profiles, separated by white space.

4. **`<link>`**: Specifies relationships between the current document and an external resource, commonly used for linking to CSS.
   - **[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)**.

5. **`<meta>`**: Represents metadata that cannot be represented by other HTML meta-related elements.
   - **Attributes**:
     - `charset`: Declares the document's character encoding.
     - `content`: Contains the value for the http-equiv or name attribute, depending on which is used.
     - `http-equiv`: Defines a pragma directive.
     - `name`: Used with `content` to provide document metadata in name-value pairs.

6. **`<style>`**: Contains style information for a document or part of a document.
   - **Attributes**:
     - `blocking` Experimental.
     - `media`.
     - `nonce`.
     - `title`.
     - `type` [Deprecated].

7. **`<title>`**: Defines the document's title shown in a browser's title bar or a page's tab.

### Sectioning Root:

1. **`<body>`**: Represents the content of an HTML document.
   - **Attributes**: 
     - Deprecated attributes like `alink`, `background`, `bgcolor`, etc.
     - Event attributes like `onload`, `onresize`, etc.

### Content Sectioning:

Content sectioning elements organize document content into logical pieces.
Global attributes applied

1. **`<address>`**: Provides contact information for a person, people, or organization.

2. **`<article>`**: Represents a self-contained composition intended to be independently distributable or reusable.

3. **`<aside>`**: Represents a portion of a document indirectly related to the main content.

4. **`<footer>`**: Represents a footer for its nearest ancestor sectioning content or sectioning root element.

5. **`<header>`**: Represents introductory content, often containing heading elements, a logo, and other elements.

6. **`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`**: Represent six levels of section headings.

7. **`<hgroup>`**: Represents a heading grouped with secondary content.

8. **`<main>`**: Represents the dominant content of a document's body.

9. **`<nav>`**: Represents a section of a page providing navigation links.

10. **`<section>`**: Represents a standalone section of a document without a more specific semantic element.

11. **`<search>`**: Represents a part containing form controls or content related to performing a search operation.

11. **`<em>`**: Description: Marks text with stress emphasis.

12. **`<i>`**: Description: Represents text set off from the normal content for various reasons.

13. **`<kbd>`**: Description: Represents user input from a keyboard or similar device.

14. **`<mark>`**: Description: Represents text highlighted for reference or notation purposes.

15. **`<q>`**: Description: Indicates a short inline quotation.

16. **`<rp>`**: Description: Provides fall-back parentheses for browsers not supporting ruby annotations.

17. **`<rt>`**: Description: Specifies the ruby text component of a ruby annotation.

18. **`<ruby>`**: Description: Represents small annotations for East Asian typography.

19. **`<s>`**: Description: Renders text with a strikethrough.

20. **`<samp>`**: Description: Represents sample or quoted output from a computer program.

21. **`<small>`**: Description: Represents side-comments and small print.

22. **`<span>`**: Description: A generic inline container for phrasing content.

23. **`<strong>`**: Description: Indicates content with strong importance.

24. **`<sub>`**: Description: Specifies text to be displayed as subscript.

25. **`<sup>`**: Description: Specifies text to be displayed as superscript.

26. **`<time>`**: Description: Represents a specific period in time.

27. **`<u>`**: Description: Represents text with a non-textual annotation, typically rendered with a solid underline.

28. **`<var>`**: Description: Represents the name of a variable in a mathematical expression or programming context.

29. **`<wbr>`**: Description: Represents a word break opportunity within text.


### Image and Multimedia:
1. **`<area>`**:
    - Description: Defines clickable areas inside an image map.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area).

2. **`<audio>`**:
    - Description: Used to embed sound content in documents.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

3. **`<img>`**:
    - Description: Embeds an image into the document.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

4. **`<map>`**:
    - Description: Used with `<area>` elements to define an image map.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map).

5. **`<track>`**:
    - Description: Specifies timed text tracks for audio and video elements.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track).

6. **`<video>`**:
    - Description: Embeds a media player for video playback into the document.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

### Embedded Content:
1. **`<embed>`**:
    - Description: Embeds external content into the document.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed).

2. **`<iframe>`**:
    - Description: Represents a nested browsing context, embedding another HTML page.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe).

3. **`<object>`**:
    - Description: Represents an external resource, such as an image or plugin content.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object).

4. **`<picture>`**:
    - Description: Offers alternative versions of an image for different display scenarios.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture).

5. **`<portal>`**:
    - Description: Embeds another HTML page into the current one for smoother navigation.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal).

6. **`<source>`**:
    - Description: Specifies media resources for the `<picture>`, `<audio>`, or `<video>` elements.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source).

### SVG and MathML:
1. **`<svg>`**:
    - Description: Defines a new coordinate system and viewport for SVG content.
    - Attributes: baseProfile, height, preserveAspectRatio, version, viewBox, width, x, y.

2. **`<math>`**:
    - Description: Represents the top-level element in MathML.
    - Attributes: display.

### Scripting:
1. **`<canvas>`**:
    - Description: Container for drawing graphics and animations using scripting APIs.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas).

2. **`<noscript>`**:
    - Description: Defines HTML to be inserted if scripting is unsupported or turned off.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript).

3. **`<script>`**:
    - Description: Used to embed executable code, typically JavaScript.
    - Attributes: [Personal attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

### Demarcating Edits:
1. **`<del>`**:
    - Description: Represents deleted text from a document.
    - Attributes: display.

2. **`<ins>`**:
    - Description: Represents added text to a document.
    - Attributes: display.

### Table Content:
1. **`<caption>`**:
    - Description: Specifies the caption (or title) of a table.

2. **`<col>`**:
    - Description: Defines one or more columns in a column group represented by its implicit or explicit parent `<colgroup>` element. The `<col>` element is only valid as a child of a `<colgroup>` element that has no span attribute defined.

3. **`<colgroup>`**:
    - Description: Defines a group of columns within a table.

4. **`<table>`**:
    - Description: Represents tabular data—that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

5. **`<tbody>`**:
    - Description: Encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the body of a table's (main) data.

6. **`<td>`**:
    - Description: A child of the `<tr>` element, it defines a cell of a table that contains data.
    - Attributes: colspan, headers, rowspan.

7. **`<tfoot>`**:
    - Description: Encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column.

8. **`<th>`**:
    - Description: A child of the `<tr>` element, it defines a cell as the header of a group of table cells. The nature of this group can be explicitly defined by the scope and headers attributes.
    - Attributes: abbr, colspan, headers, rowspan, scope.

9. **`<thead>`**:
    - Description: Encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers (`<th>` elements).

10. **`<tr>`**:
    - Description: Defines a row of cells in a table.

### Forms:
1. **`<button>`**:
    - Description: An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it performs an action, such as submitting a form or opening a dialog.

2. **`<datalist>`**:
    - Description: Contains a set of `<option>` elements that represent the permissible or recommended options available to choose from within other controls.

3. **`<fieldset>`**:
    - Description: Used to group several controls as well as labels (`<label>`) within a web form.

4. **`<form>`**:
    - Description: Represents a document section containing interactive controls for submitting information.

5. **`<input>`**:
    - Description: Used to create interactive controls for web-based forms to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The `<input>` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
    - **Types**: 
        - **button**: A push button with no default behavior displaying the value of the value attribute, empty by default.
        - **checkbox**: A check box allowing single values to be selected/deselected.
        - **color**: A control for specifying a color; opening a color picker when active in supporting browsers.
        - **date**: A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
        - **datetime-local**: A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
        - **email**: A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
        - **file**: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
        - **hidden**: A control that is not displayed but whose value is submitted to the server.
        - **image**: A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
        - **month**: A control for entering a month and year, with no time zone.
        - **number**: A control for entering a number. Displays a spinner and adds default validation. Displays a numeric keypad in some devices with dynamic keypads.
        - **password**: A single-line text field whose value is obscured. Will alert user if the site is not secure.
        - **radio**: A radio button, allowing a single value to be selected out of multiple choices with the same name value.
        - **range**: A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
        - **reset**: A button that resets the contents of the form to default values. Not recommended.
        - **search**: A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
        - **submit**: A button that submits the form.
        - **tel**: A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
        - **text**: The default value. A single-line text field. Line-breaks are automatically removed from the input value.
        - **time**: A control for entering a time value with no time zone.
        - **url**: A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
        - **week**: A control for entering a date consisting of a week-year number and a week number with no time zone.

6. **`<label>`**:
    - Description: Represents a caption for an item in a user interface.

7. **`<legend>`**:
    - Description: Represents a caption for the content of its parent `<fieldset>`.

8. **`<meter>`**:
    - Description: Represents either a scalar value within a known range or a fractional value.

9. **`<optgroup>`**:
    - Description: Creates a grouping of options within a `<select>` element.

10. **`<option>`**:
    - Description: Used to define an item contained in a `<select>`, an `<optgroup>`, or a `<datalist>` element. As such, `<option>` can represent menu items in popups and other lists of items in an HTML document.

11. **`<output>`**:
    - Description: Container element into which a site or app can inject the results of a calculation or the outcome of a user action.

12. **`<progress>`**:
    - Description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

13. **`<select>`**:
    - Description: Represents a control that provides a menu of options.

14. **`<textarea>`**:
    - Description: Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.


**Interactive elements:**
1. `<details>`: Creates a disclosure widget where information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the `<summary>` element.
2. `<dialog>`: Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
3. `<summary>`: Specifies a summary, caption, or legend for a details element's disclosure box. Clicking the `<summary>` element toggles the state of the parent `<details>` element open and closed.

**Web Components:**
1. `<slot>`: Part of the Web Components technology suite, this element is a placeholder inside a web component that you can fill with your own markup, allowing you to create separate DOM trees and present them together.
2. `<template>`: A mechanism for holding HTML that is not rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

**Obsolete and deprecated elements:**
Warning: These elements are old HTML elements that are deprecated and should not be used. They are listed here for completeness only.

1. `<acronym>`: Allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.
2. `<big>`: Renders the enclosed text at a font size one level larger than the surrounding text.
3. `<center>`: Displays its block-level or inline contents centered horizontally within its containing element.
4. `<content>`: An obsolete part of the Web Components suite, replaced by the `<slot>` element, which creates a point in the DOM at which a shadow DOM can be inserted.
5. `<dir>`: Container for a directory of files and/or folders, potentially with styles and icons applied by the user agent. Use `<ul>` element for lists instead.
6. `<font>`: Defines the font size, color, and face for its content.
7. `<frame>`: Defines a particular area in which another HTML document can be displayed. Use within a `<frameset>`.
8. `<frameset>`: Used to contain `<frame>` elements.
9. `<image>`: An ancient and poorly supported precursor to the `<img>` element.
10. `<marquee>`: Used to insert a scrolling area of text.
11. `<menuitem>`: Represents a command that a user is able to invoke through a popup menu.
12. `<nobr>`: Prevents the text it contains from automatically wrapping across multiple lines.
13. `<noembed>`: An obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the embed element.
14. `<noframes>`: Provides content to be presented in browsers that don't support the `<frame>` element.
15. `<param>`: Defines parameters for an `<object>` element.
16. `<plaintext>`: Renders everything following the start tag as raw text.
17. `<rb>`: Used to delimit the base text component of a ruby annotation.
18. `<rtc>`: Embraces semantic annotations of characters presented in a ruby of `<rb>` elements.
19. `<shadow>`: An obsolete part of the Web Components technology suite.
20. `<strike>`: Places a strikethrough (horizontal line) over text.
21. `<tt>`: Creates inline text which is presented using the user agent default monospace font face.
22. `<xmp>`: Renders text between the start and end tags without interpreting the HTML in between, using a monospaced font.

