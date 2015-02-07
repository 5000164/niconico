function o(s) {
  var d = window.open().document;
  d.writeln("<textarea rows=60 cols=80>" + s + "</textarea>");
  d.close();
}

var contents = "<html>\n<body>\n<ul>\n"
  + document.body.innerHTML

    // 動画へのリンクがある行だけ残す
    .replace(/^(?!.*\/watch\/(sm.+|nm.+|\d+)).*$/gm, "")

    // 連続再生ボタンの行を削除
    .replace(/^.*id=\"BTN_playlist_play_all\".*$/gm, "")

    // 不要な改行を削除
    .replace(/^[\n\r]/gm, "")

    // <wbr> タグが含まれている場合があるので削除
    .replace(/<wbr>/gm, "")

    // 動画へのリンクについているパラメータを除去
    .replace(/(.*)href=\"\/watch\/(sm.+|nm.+|\d+)\?.*?\"(.*)/gm, "$1href=\"http://www.nicovideo.jp/watch/$2\"$3")

    // タグをリストに変更
    .replace(/^<h5>/gm, "<li>")
    .replace(/<\/h5>$/gm, "</li>")

  + "</ul>\n</body>\n</html>\n";

o(contents);
