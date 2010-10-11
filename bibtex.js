
function xp(q, ctx) {
  if (ctx == null) {
    ctx = document;
  }
  return document.evaluate(
      q, ctx, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue;
}

var prefix = "http://portal.acm.org.ezproxy.library.wisc.edu/";

function xform(a) {
  return prefix + a.onclick.toString().match(/'([^']*)'/)[1];
}

var a = xp("//a[normalize-space(text()) = 'BibTeX']");
var table = xp("ancestor::table[ancestor::td]", a);

var tr = document.createElement("tr");
var td = document.createElement("td");
tr.appendChild(td);
var iframe = document.createElement("iframe");
iframe.src = xform(a);
iframe.style.width = "100%";
iframe.style.height = 320;
iframe.style.display = 'block';
td.appendChild(iframe);
table.appendChild(tr);

function toggleBibTeX() {
  if (iframe.style.display == 'none') {
    iframe.style.display = 'block';
  }
  else {
    iframe.style.display = 'none';
  }
}

a.href = "javascript:toggleBibTeX()";
a.onclick = "";

