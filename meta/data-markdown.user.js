// ==UserScript==
// @name Use Markdown, sometimes, in your HTML.
// @author Paul Irish <http://paulirish.com/>
// @link http://git.io/data-markdown
// @match *
// ==/UserScript==


// If you're not using this as a userscript just delete from this line up. It's cool, homey.

(function boom (){

    if (!window.Markdown){
        var scr = document.createElement('script');
        scr.onload = boom;
        scr.src = '/meta/Markdown.Converter.min.js';
        document.body.appendChild(scr);
        return;
    }

    [].forEach.call(document.querySelectorAll('[data-markdown]'), function (elem) {
        // strip leading whitespace so it isn't evaluated as code
        var text      = elem.innerHTML;//.replace(/\n\s*\n/g, '\n');
        var text      = text.replace(/\n{2}/g, '<br/>');
        // set indentation level so your markdown can be indented within your HTML
        var leadingws = text.match(/^\n?(\s*)/)[1].length;
        var regex     = new RegExp('\\n?\\s{' + leadingws + '}', 'g');
        var md        = text.replace(regex, '\n');
        var html      = (new Markdown.Converter()).makeHtml(md);

        // here, have sum HTML
        elem.innerHTML = html;
    });

}());
