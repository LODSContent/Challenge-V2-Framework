<style>
.instructions .page {
    /* padding: 15px 20px; */
    padding: 1em 1.4em;
}

.instructions .page>p:nth-child(3) {
    padding: 0 0 .75em .5em;
}

.instructions .page img {
    max-width: 75%;
    display: block;
}

/* Page 0 */

.instructions #instructionschallenge-name {
    font-weight: normal;
    border-bottom: solid 1px #eee;
    border-top: none;
    font-size: 1.75em;
    padding: 0 1.25em .5em .75em;
    margin: 0 auto;
}

.instructions #instructionschallenge-name>div>p {
    margin: .5em 0 .5em 0;
}

.instructions ol,
.instructions ul {
    padding: 0 1em;
}

.instructions ul ul {
    padding-left: 3em;
}

.instructionsblock ul {
    margin-top: 0;
}

#page0 {
    text-align: left;
}

h1#instructionschallenge-title {
    text-align: center;
}

.instructions #page0 h2 {
    margin-top: 1.5em;
}

.instructions .labhelp ul,
.instructions .labhelp li {
    list-style: none;
    padding: 3px;
    margin-left: 1.25em;
}

.instructions #page0 details span[class$="-icon"] {
    margin: 0.5em 0 0.1em 3em
}

.help ul li{
    list-style: none;
}

/* Other pages*/
.instructions h1[id$="-title"] div p {
    margin: 0;
}

h1:first-child{
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

/*
.instructions .logo-guided {
    background-image: url(https://lodmanuals.blob.core.windows.net/lms/2020%20Challenge%20Labs%20Graphics/Challenge-Labs-Guided-16x9v1.1.jpg);
}

.instructions .logo-advanced {
    background-image: url(https://lodmanuals.blob.core.windows.net/lms/2020%20Challenge%20Labs%20Graphics/Challenge-Labs-Advanced-16x9.jpg);
}

.instructions .logo-expert {
    background-image: url(https://lodmanuals.blob.core.windows.net/lms/2020%20Challenge%20Labs%20Graphics/Challenge-Labs-Expert-16x9.jpg);
}
*/
/* Tables */

.instructions .page table td {
    padding: 0.4em;
    max-width: 18em;
    overflow-wrap: break-word;
}

.instructions details table {
    margin: 1.5em 0 2em 0;
    background-color: red
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
    margin: 1.1em 0 0 3em;
}

.instructions .labhelp .typeIcon {
    display: flex;
    margin: 0.7em 0 0.2em 3em;
}

.instructions #page0 .labhelp span.hint-icon {
    padding: .4em 1em .4em 3.5em;
}

.instructions details {
    margin: .5em 0;
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
    padding: .4em 1em .4em 3.5em;
    display: block;
    vertical-align: middle;
}

.instructions details.hint-icon summary,
.instructions span.hint-icon {
    padding: .4em 1em .4em 3em;
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

.instructions pre code {
    padding-left: 40px;
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

#page0 h1 {
    font-weight: normal;
    border-bottom: solid 1px;
    margin:20px 0;
    font-size:28px;
    border-top: solid 1px;
    padding:20px 0;
}
</style>
