var app = require('app')	// アプリケーション作成用モジュールをロード
var BrowserWindow = require('browser-window')
var menubar = require('menubar')

// クラッシュレポート
require('crash-reporter').start()

var opts = {height: 55, width: 510}
var mb = menubar(opts)

mb.on('ready', function ready () {
})
