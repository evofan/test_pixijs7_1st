# First test of PixiJS ver7.

<img src="https://evofan.github.io/test_pixijs7_1st/screenshot/pic_pixijs_add_ticker.jpg" width="50%">  

**Demo**  
[https://evofan.github.io/test_pixijs7_1st/dist/](https://evofan.github.io/test_pixijs7_1st/dist/)  

**Usage**  
`npm install`  
`npm run build`  
`npm run start`  
http://localhost:8080/  

reference

**How can I fix the "DevTools failed to load SourceMap: Could not load content" error when adding a JavaScript library? - Stack Overflow**  
[https://stackoverflow.com/questions/61205390/how-can-i-fix-the-devtools-failed-to-load-sourcemap-could-not-load-content-er](https://stackoverflow.com/questions/61205390/how-can-i-fix-the-devtools-failed-to-load-sourcemap-could-not-load-content-er)  
>This worked for me:
>
>Go to Inspect → Settings (Symbol) gear → Uncheck Enable JavaScript source maps and Enable CSS source map.
>
>Refresh.
<img src="https://evofan.github.io/test_pixijs7_1st/screenshot/pic_pixijs7_1st_test1.jpg" width="50%">  
<img src="https://evofan.github.io/test_pixijs7_1st/screenshot/pic_pixijs7_1st_test2.jpg" width="50%">  

or use below.

**DevTools failed to load SourceMap for webpack:///node_modules//....js.map HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME**  
[https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e](https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e)  
>devtool: "eval-cheap-source-map"  
>Add this to your webpack config and that's it.  
<img src="https://evofan.github.io/test_pixijs7_1st/screenshot/pic_pixijs7_1st_test4.jpg" width="50%">  

**v7 Migration Guide**  
[https://github.com/pixijs/pixijs/wiki/v7-Migration-Guide](https://github.com/pixijs/pixijs/wiki/v7-Migration-Guide)  

↓のような警告が出てる  
Errror with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.  

**GitHubに謎のHTTPレスポンスヘッダが含まれている**  
[https://qiita.com/rana_kualu/items/453d7c4d551e0e6063f3](https://qiita.com/rana_kualu/items/453d7c4d551e0e6063f3)  
>permissions-policy: interest-cohort=()  
>これはFLoCを拒否するという主張です  

**アロー関数式とAsync/Awaitを使った非同期処理 | TomoSoft**  
[https://tomosoft.jp/design/?p=44223](https://tomosoft.jp/design/?p=44223)  
>同じ処理を、async/awaitを使用すると次のようになります

**PIXI sprites are blurry on mobile devices. - Pixi.js - HTML5 Game Devs Forum**  
[https://www.html5gamedevs.com/topic/33044-pixi-sprites-are-blurry-on-mobile-devices/](https://www.html5gamedevs.com/topic/33044-pixi-sprites-are-blurry-on-mobile-devices/)  
>Please type "window.devicePixelRatio" in the console, or "console.log"  that value in your code. Is it 1 or something else?  

**Pixi.jsの高解像度端末の対応 - Qiita**  
[https://qiita.com/couragenki/items/8f8cae562f5e0fff1805](https://qiita.com/couragenki/items/8f8cae562f5e0fff1805)  
>resolution: window.devicePixelRatio || 1,  
>autoResize: true  

**package.jsonのnpmのバージョンを一括で書き変えてくれるncuが便利だった**  
[https://tacamy.hatenablog.com/entry/2016/08/10/193603](https://tacamy.hatenablog.com/entry/2016/08/10/193603)    
>初回のみ、npm-check-updatesをグローバルにインストールする必要があります。
>$ npm install -g npm-check-updates
