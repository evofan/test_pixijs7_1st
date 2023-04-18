# First test of pixijs ver7.

<img src="https://evofan.github.io/test_pixijs7_1st/screenshot/pic_pixijs7_1st_test3.jpg" width="50%">  

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
[https://qiita.com/rana_kualu/items/453d7c4d551e0e6063f3]()  
>permissions-policy: interest-cohort=()  
