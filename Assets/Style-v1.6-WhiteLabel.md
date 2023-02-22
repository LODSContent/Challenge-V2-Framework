<style>
/* Resets */
code:not(.nocopy) {
    margin: 0;
}

.instructions .page {
    padding: 1em 1.4em;
}

.instructions .page img {
    max-width: 75%;
    display: block;
}

/* Page 0 */

.instructions #instructionschallenge-title {
    border-bottom: solid 1px #eee;
    border-top: solid 1px;
    font-size: 2em;
    font-weight: normal;
    padding: .75em;
    margin: 20 auto;
}

.instructions #instructionschallenge-title>div>p {
    margin: .5em 0 .5em 0;
}

.instructions ol,
.instructions ul {
    padding: 0 1em;
    margin: 1.5em auto;
}

.instructions ul ul {
    padding-left: 3em;
}

.instructions ul li {
    margin-left: 1.8em;
}

.instructionsblock>ul {
    margin-inline-start: 1.9em;
}

.instructions #page0 h2 {
    margin-top: 1.5em;
}

h1#instructionschallenge-title {
    text-align: center;
}

.instructions .labhelp ul,
.instructions .labhelp li {
    list-style: none;
    padding: 3px;
    margin-left: 1.25em;
}

.instructions #page0 details span[class$="-icon"] {
    margin: 0.5em 0 0.1em 5em
}

/* Other pages*/
.instructions h1[id$="-title"] div p {
    margin: 0;
}

h1:first-child {
    margin: 0;
    padding-bottom: 5px;
}

/* Logos */

.instructions div[class*="logo-"] {
    margin: 0 auto;
    max-height: 15em;
    height: 40vw;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}


/* Tables */

.instructions .page table td {
    padding: 0.4em;
    max-width: 18em;
    overflow-wrap: break-word;
}

.instructions details table {
<<<<<<< HEAD
    margin: 1.5em 0 2em 0;
=======
    margin: 1.5em 0 2em 0
>>>>>>> d746a37387f6d2ed26a9c5ce9319e040ed085ecd
}

/* Icons */

.instructions .typeIcon::before {
    border: solid 1px;
    content: "T";
    font-family: "font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;";
    font-weight: bold;
    color: green;
    vertical-align: middle;
    width: 5px;
    height: 13px;
    padding: .2em .7em .3em .45em;
    margin: auto 1.75em auto 0;
}

.instructions .labhelp .copyIcon::before {
    content: "\e8c8";
    font-family: "labclient";
    font-size: 1.7em;
    margin: auto 1em auto 0;
    color: green;
}

.instructions .labhelp .copyIcon {
    display: flex;
    margin: 1.1em 0 0 5em;
}

.instructions .labhelp .typeIcon {
    display: flex;
    margin: 0.7em 0 0.2em 5em;
}

.instructions #page0 .labhelp span.hint-icon {
    padding: .4em 1em .4em 5em;
}

/* manually style hints as nested list */

.instructions details ul li {
    margin-left: 4.6em;
    list-style: circle;
}


.instructions details img {
    margin-left: 5.65em;
}

.instructions details pre {
    margin-left: 5.75em;
}

.instructions details>p>code {
    margin-left: 5.75em;
}

.instructions details>p>code {
    margin-left: 5.75em;
}

.instructions ::marker {
    display: none;
}

.instructions summary {
    list-style: none;
    margin: 0;
}

.instructions details summary::after {
    display: inline-block;
    content: " ";
    background-image: url("https://lodmanuals.blob.core.windows.net/lms/2020%20Challenge%20Labs%20Graphics/arrow.svg");
    /* Height/width needs to match image bg */
    height: 13.5px;
    width: 7.5px;
    margin-left: 1em;
    transition: transform 250ms ease-in-out 25ms;
    transform: rotate(270deg);
    vertical-align: middle;
}

.instructions details[open] summary::after {
    transform: rotate(90deg);
}

.instructions details[class$="-icon"] summary,
.instructions span[class$="-icon"] {
    margin-left: 2.6em;
    padding: .4em 1em .4em 3.3em;
    display: block;
    vertical-align: middle;
}

.instructions details.hint-icon summary,
.instructions span.hint-icon {
    background-size: 23px !important;
    background: url(https://labondemand.blob.core.windows.net/content/lab104545/hint-icon.png) no-repeat left center;
}

.instructions .info-icon summary,
.instructions span.info-icon {
    background-size: 23px !important;
    background: url(https://labondemand.blob.core.windows.net/content/lab104545/info-icon.png) no-repeat left center;
}

.instructions .know-icon summary,
.instructions span.know-icon {
    background-size: 23px !important;
    background: url(https://labondemand.blob.core.windows.net/content/lab104545/know-icon.png) no-repeat left center;
}

.instructions .help-icon summary,
.instructions span.help-icon {
    padding: 0.4em 1em 0.4em 3em;
    background-size: 23px !important;
    background: url(https://labondemand.blob.core.windows.net/content/lab104545/help-icon.png) no-repeat left center;
}

.instructions .warn-icon summary,
.instructions span.warn-icon {
    background-size: 23px !important;
    background: url(https://labondemand.blob.core.windows.net/content/lab104545/warn-icon.png) no-repeat left center;
    color: red;
}

.instructions #instructionsNavigation {
    display: flex;
    align-content: center;
    align-items: center;
}

.instructions #instructionsNavigation #previous,
.instructions #instructionsNavigation #next {
    float: unset;
    padding: 0 5%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
}

.instructions #instructionsNavigation #previous {
    text-align: left;
}

.instructions #instructionsNavigation #next {
    text-align: right;
}

.instructions #instructionsNavigation #previous::before {
    position: relative;
    top: 3px;
    right: 2px;
    margin: 0;
}

.instructions #instructionsNavigation #next::after {
    position: relative;
    top: 3px;
    left: 4px;
    margin: 0;
}

/* Lists */

.instructions details ol {
    padding-left: 65px;
}

.instructions .page ol li ol {
    list-style-type: decimal;
}

.instructions .page ol li ol.linenums {
    list-style-type: none
}

div[ref=challenge-title],
div[ref=challenge-title] p {
    display: inline;
}

#page0 {
    text-align: left;
    padding: 15px 20px;
}
</style>
