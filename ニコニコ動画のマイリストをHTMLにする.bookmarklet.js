javascript:(function(){function o(b){var a=window.open().document;a.writeln("<textarea rows=60 cols=80>"+b+"</textarea>");a.close()}var contents="<html>\n<body>\n<ul>\n"+document.body.innerHTML.replace(/^(?!.*\/watch\/(sm.+|nm.+|\d+)).*$/gm,"").replace(/^.*id=\"BTN_playlist_play_all\".*$/gm,"").replace(/^[\n\r]/gm,"").replace(/<wbr>/gm,"").replace(/(.*)href=\"\/watch\/(sm.+|nm.+|\d+)\?.*?\"(.*)/gm,'$1href="http://www.nicovideo.jp/watch/$2"$3').replace(/^<h5>/gm,"  <li>").replace(/<\/h5>$/gm,"</li>")+"</ul>\n</body>\n</html>\n";o(contents);})();