javascript:(function(){function%20o(s){var%20d=window.open().document;d.writeln('<textarea%20rows=60%20cols=80>'+s+'</textarea>');d.close()}var%20contents='<html>\n<body>\n<ul>\n' + document.body.innerHTML.replace(/^(?!.*\/watch\/(sm.+|nm.+|\d+)\?group_id).*$/gm, '').replace(/^[\n\r]/gm, '').replace(/<wbr>/gm, '').replace(/(.*)href=\"\/watch\/(sm.+|nm.+|\d+)\?.*?\"(.*)/gm, '$1href="http://www.nicovideo.jp/watch/$2"$3').replace(/^<h5>/gm, '<li>').replace(/<\/h5>$/gm, '</li>') + '</ul>\n</body>\n</html>\n';o(contents);})();