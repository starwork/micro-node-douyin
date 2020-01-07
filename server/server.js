// gRPC 相关依赖
var PROTO_PATH = __dirname + '/./service.proto';
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

global.navigator = {
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
};

const cheerio = require('cheerio');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;


global.document = new JSDOM("<!DOCTYPE html><html><head>  <meta charset=\"utf-8\"><title>快来加入抖音短视频，让你发现最有趣的我！</title><meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0,minimum-scale=1,maximum-scale=1,minimal-ui,viewport-fit=cover\"><meta name=\"format-detection\" content=\"telephone=no\"><meta name=\"baidu-site-verification\" content=\"szjdG38sKy\"><meta name=\"keywords\" content=\"抖音、抖音音乐、抖音短视频、抖音官网、amemv\"><meta name=\"description\" content=\"抖音短视频-记录美好生活的视频平台\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"default\"><link rel=\"apple-touch-icon-precomposed\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/image/logo/logo_launcher_v2_40f12f4.png\"><link rel=\"shortcut icon\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/image/logo/favicon_v2_7145ff0.ico\" type=\"image/x-icon\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge;chrome=1\"><meta name=\"screen-orientation\" content=\"portrait\"><meta name=\"x5-orientation\" content=\"portrait\"><script type=\"text/javascript\">!function(){function t(t){return this.config=t,this}t.prototype={reset:function(){var t=Math.min(document.documentElement.clientWidth,750)/750*100;document.documentElement.style.fontSize=t+\"px\";var e=parseFloat(window.getComputedStyle(document.documentElement).fontSize),n=t/e;/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)||document.documentElement.setAttribute(\"flatform\",\"android\"),1!=n&&(document.documentElement.style.fontSize=t*n+\"px\")}},window.Adapter=new t,window.Adapter.reset(),window.onload=function(){window.Adapter.reset()},window.onresize=function(){window.Adapter.reset()}}();</script>  <meta name=\"screen-orientation\" content=\"portrait\"><meta name=\"x5-orientation\" content=\"portrait\"><script>tac='i)69yjiobkds!i#v1is\"0,<8~z|\\x7f@QGNCJF[\\\\^D\\\\KFYSk~^WSZhg,(lfi~ah`{md\"inb|1d<,%Dscafgd\"in,8[xtm}nLzNEGQMKAdGG^NTY\\x1ckgd\"inb<b|1d<g,&TboLr{m,(\\x02)!jx-2n&vr$testxg,%@tug{mn ,%vrfkbm[!cb|'</script><script type=\"text/javascript\">!function(){function t(t){return this.config=t,this}t.prototype={reset:function(){var t=Math.min(document.documentElement.clientWidth,750)/750*100;document.documentElement.style.fontSize=t+\"px\";var e=parseFloat(window.getComputedStyle(document.documentElement).fontSize),n=t/e;/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)||document.documentElement.setAttribute(\"flatform\",\"android\"),1!=n&&(document.documentElement.style.fontSize=t*n+\"px\")}},window.Adapter=new t,window.Adapter.reset(),window.onload=function(){window.Adapter.reset()},window.onresize=function(){window.Adapter.reset()}}();</script><meta name=\"pathname\" content=\"aweme_mobile_user\">  <meta name=\"screen-orientation\" content=\"portrait\"><meta name=\"x5-orientation\" content=\"portrait\"><meta name=\"theme-color\" content=\"#161823\"><meta name=\"pathname\" content=\"aweme_mobile_video\"><link rel=\"dns-prefetch\" href=\"//s3.bytecdn.cn/\"><link rel=\"dns-prefetch\" href=\"//s3a.bytecdn.cn/\"><link rel=\"dns-prefetch\" href=\"//s3b.bytecdn.cn/\"><link rel=\"dns-prefetch\" href=\"//s0.pstatp.com/\"><link rel=\"dns-prefetch\" href=\"//s1.pstatp.com/\"><link rel=\"dns-prefetch\" href=\"//s2.pstatp.com/\"><link rel=\"dns-prefetch\" href=\"//v1-dy.ixigua.com/\"><link rel=\"dns-prefetch\" href=\"//v1-dy.ixiguavideo.com/\"><link rel=\"dns-prefetch\" href=\"//v3-dy.ixigua.com/\"><link rel=\"dns-prefetch\" href=\"//v3-dy.ixiguavideo.com/\"><link rel=\"dns-prefetch\" href=\"//v6-dy.ixigua.com/\"><link rel=\"dns-prefetch\" href=\"//v6-dy.ixiguavideo.com/\"><link rel=\"dns-prefetch\" href=\"//v9-dy.ixigua.com/\"><link rel=\"dns-prefetch\" href=\"//v9-dy.ixiguavideo.com/\"><link rel=\"dns-prefetch\" href=\"//v11-dy.ixigua.com/\"><link rel=\"dns-prefetch\" href=\"//v11-dy.ixiguavideo.com/\"><link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/style/base_99078a4.css\"><style>@font-face{font-family:iconfont;src:url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/font/iconfont_9eadf2f.eot);src:url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/font/iconfont_9eadf2f.eot#iefix) format('embedded-opentype'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/font/iconfont_9eb9a50.woff) format('woff'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/font/iconfont_da2e2ef.ttf) format('truetype'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/font/iconfont_31180f7.svg#iconfont) format('svg')}.iconfont{font-family:iconfont!important;font-size:.24rem;font-style:normal;letter-spacing:-.045rem;margin-left:-.085rem}@font-face{font-family:icons;src:url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/iconfont_2f1b1cd.eot);src:url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/iconfont_2f1b1cd.eot#iefix) format('embedded-opentype'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/iconfont_87ad39c.woff) format('woff'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/iconfont_5848858.ttf) format('truetype'),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/iconfont_20c7f77.svg#iconfont) format('svg')}.icons{font-family:icons!important;font-size:.24rem;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}@font-face{font-family:Ies;src:url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/Ies_1275df9.woff2?ba9fc668cd9544e80b6f5998cdce1672) format(\"woff2\"),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/Ies_749cd27.woff?ba9fc668cd9544e80b6f5998cdce1672) format(\"woff\"),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/Ies_1bdf889.ttf?ba9fc668cd9544e80b6f5998cdce1672) format(\"truetype\"),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/Ies_e0dc663.svg?ba9fc668cd9544e80b6f5998cdce1672#Ies) format(\"svg\"),url(//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/icons/Ies_38cffe8.eot?af1f602fa7fb95e7bba3cc051e0c9236#Ies) format(\"embedded-opentype\")}i{line-height:1}i[class^=ies-]:before,i[class*=\" ies-\"]:before{font-family:Ies!important;font-style:normal;font-weight:400!important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ies-camera_add_music:before{content:\"\\f101\"}.ies-camera_beauty_off:before{content:\"\\f102\"}.ies-camera_beauty_on:before{content:\"\\f103\"}.ies-camera_change_music:before{content:\"\\f104\"}.ies-camera_clip:before{content:\"\\f105\"}.ies-camera_cover:before{content:\"\\f106\"}.ies-camera_details_determine:before{content:\"\\f107\"}.ies-camera_details_determine1:before{content:\"\\f108\"}.ies-camera_details_determine2:before{content:\"\\f109\"}.ies-camera_expression:before{content:\"\\f10a\"}.ies-camera_fangdou_close:before{content:\"\\f10b\"}.ies-camera_fangdou_open:before{content:\"\\f10c\"}.ies-camera_flip:before{content:\"\\f10d\"}.ies-camera_flip2:before{content:\"\\f10e\"}.ies-camera_lighting_auto:before{content:\"\\f10f\"}.ies-camera_lighting_close:before{content:\"\\f110\"}.ies-camera_lighting_open:before{content:\"\\f111\"}.ies-camera_more:before{content:\"\\f112\"}.ies-camera_night_off:before{content:\"\\f113\"}.ies-camera_night_on:before{content:\"\\f114\"}.ies-camera_picmovie:before{content:\"\\f115\"}.ies-camera_picmovie2:before{content:\"\\f116\"}.ies-camera_rotate_cutting:before{content:\"\\f117\"}.ies-camera_rotate_cutting1:before{content:\"\\f118\"}.ies-camera_rotate_cutting2:before{content:\"\\f119\"}.ies-camera_selected:before{content:\"\\f11a\"}.ies-camera_shooting:before{content:\"\\f11b\"}.ies-camera_sound:before{content:\"\\f11c\"}.ies-camera_speedoff:before{content:\"\\f11d\"}.ies-camera_speedon:before{content:\"\\f11e\"}.ies-camera_time_15:before{content:\"\\f11f\"}.ies-camera_time_60:before{content:\"\\f120\"}.ies-camera_unselected:before{content:\"\\f121\"}.ies-camera_video_delete:before{content:\"\\f122\"}.ies-checked:before{content:\"\\f123\"}.ies-chevron-left:before{content:\"\\f124\"}.ies-chevron-right:before{content:\"\\f125\"}.ies-clear:before{content:\"\\f126\"}.ies-close:before{content:\"\\f127\"}.ies-copy:before{content:\"\\f128\"}.ies-delete:before{content:\"\\f129\"}.ies-edit:before{content:\"\\f12a\"}.ies-help-circle:before{content:\"\\f12b\"}.ies-info:before{content:\"\\f12c\"}.ies-loading:before{content:\"\\f12d\"}.ies-location:before{content:\"\\f12e\"}.ies-paste:before{content:\"\\f12f\"}.ies-query:before{content:\"\\f130\"}.ies-remove:before{content:\"\\f131\"}.ies-search:before{content:\"\\f132\"}.ies-settings:before{content:\"\\f133\"}.ies-shopping-bag:before{content:\"\\f134\"}.ies-shopping-car:before{content:\"\\f135\"}.ies-sort-left:before{content:\"\\f136\"}.ies-sort-right:before{content:\"\\f137\"}.ies-start-o:before{content:\"\\f138\"}.ies-start:before{content:\"\\f139\"}.ies-sticker_collection:before{content:\"\\f13a\"}.ies-sticker_collection_m:before{content:\"\\f13b\"}.ies-title-decorate-left:before{content:\"\\f13c\"}.ies-title-decorate-right:before{content:\"\\f13d\"}.ies-triangle-right:before{content:\"\\f13e\"}.ies-triangle-top:before{content:\"\\f13f\"}.ies-video:before{content:\"\\f140\"}.ies-video_icon:before{content:\"\\f141\"}.ies-zplus:before{content:\"\\f142\"}</style>   <link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/component/loading/index_8201db7.css\" />\n" +
    "<link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/component/banner/index_6ee9000.css\" />\n" +
    "<link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/pkg/common_84d74c0.css\" />\n" +
    "<link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/page/reflow_user/index_9f2bf42.css\" />\n" +
    "<link rel=\"stylesheet\" href=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/pkg/video_51ce97c.css\" /></head>  <body><img id=\"weixinShareLogo\" src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/image/logo/logo_launcher_v2_40f12f4.png\" style=\"position:absolute;top:-1000px;left:-1000px;\">  <input type=\"hidden\" name=\"shareTitle\" value=\"快来加入抖音，让你发现最有趣的我！\"> <input type=\"hidden\" name=\"shareDesc\" value=\"抖音——新奇好玩的15秒短视频社区！\"> <input type=\"hidden\" name=\"shareTimelineTitle\" value=\"快来加入抖音，让你发现最有趣的我！\"> <input type=\"hidden\" name=\"shareAppTitle\" value=\"快来加入抖音，让你发现最有趣的我！\"> <input type=\"hidden\" name=\"ShareAppDesc\" value=\"抖音——新奇好玩的15秒短视频社区！\"> <input type=\"hidden\" name=\"shareImage\" value=\"https://p9-dy.bytecdn.cn/aweme/720x720/2e75b0005a92bd79a0589.jpeg\">   <div class=\"page-reflow-user\"><div class=\"pagelet-user-info\" id=\"pagelet-user-info\"><div class=\"bg\"  style=\"background-image: url(https://p9-dy.bytecdn.cn/aweme/720x720/2e75b0005a92bd79a0589.jpeg)\" ></div><div class=\"personal-card\"><div class=\"info1\">  <span class=\"author\"><img class=\"avatar\" src=\"https://p9-dy.bytecdn.cn/aweme/720x720/2e75b0005a92bd79a0589.jpeg\"> </span><span class=\"focus-btn go-author\" data-id=\"62173060270\"><span>关注</span></span><p class=\"nickname\">\uD83D\uDCF7 会拍照的天宇</p><p class=\"shortid\">抖音ID：     TenDy<i class=\"icon iconfont \"> &#xe609; </i><i class=\"icon iconfont \"> &#xe608; </i><i class=\"icon iconfont \"> &#xe603; </i><i class=\"icon iconfont \"> &#xe602; </i><i class=\"icon iconfont \"> &#xe602; </i><i class=\"icon iconfont \"> &#xe605; </i>   </p></div><div class=\"info2\">  <p class=\"signature\">没有记录、就没有发生！\n" +
    "\uD83E\uDDE3脖：会拍照的天宇\n" +
    "学习/约拍/合作/交流：TMJ960112\n" +
    "我在贵阳、你在哪里❤️</p><p class=\"follow-info\"><span class=\"focus block\"><span class=\"num\">    <i class=\"icon iconfont follow-num\"> &#xe61d; </i><i class=\"icon iconfont follow-num\"> &#xe61e; </i> </span><span class=\"text\">关注</span> </span><span class=\"follower block\"><span class=\"num\">    <i class=\"icon iconfont follow-num\"> &#xe619; </i>.<i class=\"icon iconfont follow-num\"> &#xe61d; </i>w </span><span class=\"text\">粉丝</span> </span><span class=\"liked-num block\"><span class=\"num\">    <i class=\"icon iconfont follow-num\"> &#xe602; </i><i class=\"icon iconfont follow-num\"> &#xe604; </i>.<i class=\"icon iconfont follow-num\"> &#xe603; </i>w </span><span class=\"text\">赞</span></span></p></div></div><div class=\"video-tab\">  <div class=\"tab-wrap\"><div class=\"user-tab active tab get-list\" data-type=\"post\">作品<span class=\"num\">    <i class=\"icon iconfont tab-num\"> &#xe60b; </i><i class=\"icon iconfont tab-num\"> &#xe607; </i> </span></div>  <div class=\"like-tab tab get-list\" data-type=\"like\">喜欢<span class=\"num\">    <i class=\"icon iconfont tab-num\"> &#xe618; </i><i class=\"icon iconfont tab-num\"> &#xe61e; </i><i class=\"icon iconfont tab-num\"> &#xe616; </i><i class=\"icon iconfont tab-num\"> &#xe616; </i> </span></div></div></div></div><div id=\"pagelet-worklist\" class=\"pagelet-worklist\"><ul class=\"list js-list\"></ul></div><div id=\"scaleImageWrapper\" class=\"hidden\"><div class=\"enlarge-wrapper\"></div><button class=\"close\"></button></div> <div class=\"pagelet-loading\" id=\"pagelet-loading\"><i class=\"icon\"></i> <span class=\"txt\">加载中...</span></div> <div id=\"pagelet-banner\" class=\"pagelet-banner\"><div class=\"icon hide\"><img class=\"logo\" src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/image/logo/logo_launcher_v2_40f12f4.png\"></div><div class=\"desc hide\"><div class=\"title\"><span>抖音短视频</span></div><div class=\"text\">专注新生代的音乐短视频社区</div></div>  <div class=\"app-download\" id=\"download\"><div class=\"download-btn\"><span class=\"txt\">打开看看</span></div></div>  </div> </div>  <script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/static/script/lib/base_327cc85.js\" crossorigin=\"anonymous\"></script>   <script>;(function(window) {\n" +
    "        window.Raven && Raven.config('//key@m.toutiao.com/log/sentry/v2/174', {\n" +
    "          whitelistUrls: [/bytecdn\\.cn/],\n" +
    "          shouldSendCallback: function(data) {\n" +
    "            return true;\n" +
    "          }\n" +
    "        }).install();\n" +
    "      })(window);</script>         <script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/component/loading/index_9d34b6b.js\"></script>\n" +
    "<script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/pkg/third_8b60943.js\"></script>\n" +
    "<script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/pkg/common_febb91c.js\"></script>\n" +
    "<script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/component/banner/index_0abc16e.js\"></script>\n" +
    "<script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/pkg/video_9d4f67e.js\"></script>\n" +
    "<script src=\"//s3.pstatp.com/ies/resource/falcon/douyin_falcon/page/reflow_user/index_10ae3b3.js\"></script>\n" +
    "<script type=\"text/javascript\">\n" +
    "(function() {\n" +
    "            var GA = __M.require('douyin_falcon:common/ga/ga');\n" +
    "            GA.init(1, 'UA-75850242-4');\n" +
    "        \n" +
    "})();\n" +
    "(function() {\n" +
    "    var weixinUtil = __M.require('douyin_falcon:common/weixinUtil');\n" +
    "    $(function () {\n" +
    "        FastClick.attach(document.body);\n" +
    "        // 激活 ios active 样式\n" +
    "        document.body.addEventListener('touchstart',function(){},false);\n" +
    "        if ($.browser.weixin) {\n" +
    "            weixinUtil.init();\n" +
    "        }\n" +
    "    });\n" +
    "     \n" +
    "})();\n" +
    "(function() {\n" +
    "    $(function(){\n" +
    "        __M.require('douyin_falcon:page/reflow_user/index').init({\n" +
    "            uid: \"62173060270\",\n" +
    "            dytk: 'c678a514b652bfeb395cff021c131e62'\n" +
    "        });\n" +
    "    });\n" +
    "})();\n" +
    "</script>\n" +
    "</body></html>").window.document;

/**
 * 启动 RPC 服务
 */
function main() {
    var server = new grpc.Server();
    server.addService(grpc.loadPackageDefinition(packageDefinition).CommonService.service, {handle: handle});
    server.bind('0.0.0.0:6565', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log("douyin rpc service start at 6565");
}

/**
 * 处理 RPC 请求
 */
function handle(call, callback) {
    // 反序列化
    var json = bin2String(call.request.request);
    var request = JSON.parse(json);
    // 反射
    var response = commonService[request.clazz][request.method](request.args);

    callback(null, {response: string2Bin(JSON.stringify(response))});
}

/**
 * 通用响应体
 */
var commonResponse = {
    success: function (result) {
        return {
            status: 0,
            message: 'success',
            result: result
        }
    },
    error: function (message) {
        return {
            status: -1,
            message: message
        }
    }
};

main();

/**
 * 字符串 -> 字节数组
 */
function string2Bin(str) {
    const buffer = Buffer.from(str, 'utf-8');
    return Array.prototype.slice.call(buffer, 0)
}

/**
 * 字节数组 -> 字符串
 */
function bin2String(array) {
    return new Buffer(array).toString('utf-8');
}

/**
 * RPC 实现类
 */
var commonService = {
    "com.anoyi.douyin.rpc.RpcNodeDyService": {
        // 抖音签名算法
        generateSignature: function (params) {
            console.log(params[1]);
            eval(params[1]);

            var t = {};

            if (t.__M = t.__M || {},
                !t.__M.require) {
                var e, n, r = document.getElementsByTagName("head")[0], i = {}, o = {}, a = {}, u = {}, c = {}, s = {}, l = function(t, n) {
                    if (!(t in u)) {
                        u[t] = !0;
                        var i = document.createElement("script");
                        if (n) {
                            var o = setTimeout(n, e.timeout);
                            i.onerror = function() {
                                clearTimeout(o),
                                    n()
                            }
                            ;
                            var a = function() {
                                clearTimeout(o)
                            };
                            "onload"in i ? i.onload = a : i.onreadystatechange = function() {
                                ("loaded" === this.readyState || "complete" === this.readyState) && a()
                            }
                        }
                        return i.type = "text/javascript",
                            i.src = t,
                            r.appendChild(i),
                            i
                    }
                }, f = function(t, e, n) {
                    var r = i[t] || (i[t] = []);
                    r.push(e);
                    var o, a = c[t] || c[t + ".js"] || {}, u = a.pkg;
                    o = u ? s[u].url || s[u].uri : a.url || a.uri || t,
                        l(o, n && function() {
                            n(t)
                        }
                        )
                };
                n = function(t, e) {
                    "function" != typeof e && (e = arguments[2]),
                        t = t.replace(/\.js$/i, ""),
                        o[t] = e;
                    var n = i[t];
                    if (n) {
                        for (var r = 0, a = n.length; a > r; r++)
                            n[r]();
                        delete i[t]
                    }
                }
                    ,
                    e = function(t) {
                        if (t && t.splice)
                            return e.async.apply(this, arguments);
                        t = e.alias(t);
                        var n = a[t];
                        if (n)
                            return n.exports;
                        var r = o[t];
                        if (!r)
                            throw "[ModJS] Cannot find module `" + t + "`";
                        n = a[t] = {
                            exports: {}
                        };
                        var i = "function" == typeof r ? r.apply(n, [e, n.exports, n]) : r;
                        return i && (n.exports = i),
                        n.exports && !n.exports["default"] && Object.defineProperty && Object.isExtensible(n.exports) && Object.defineProperty(n.exports, "default", {
                            value: n.exports
                        }),
                            n.exports
                    }
                    ,
                    e.async = function(n, r, i) {
                        function a(t) {
                            for (var n, r = 0, h = t.length; h > r; r++) {
                                var p = e.alias(t[r]);
                                p in o ? (n = c[p] || c[p + ".js"],
                                n && "deps"in n && a(n.deps)) : p in s || (s[p] = !0,
                                    l++,
                                    f(p, u, i),
                                    n = c[p] || c[p + ".js"],
                                n && "deps"in n && a(n.deps))
                            }
                        }
                        function u() {
                            if (0 === l--) {
                                for (var i = [], o = 0, a = n.length; a > o; o++)
                                    i[o] = e(n[o]);
                                r && r.apply(t, i)
                            }
                        }
                        "string" == typeof n && (n = [n]);
                        var s = {}
                            , l = 0;
                        a(n),
                            u()
                    }
                    ,
                    e.resourceMap = function(t) {
                        var e, n;
                        n = t.res;
                        for (e in n)
                            n.hasOwnProperty(e) && (c[e] = n[e]);
                        n = t.pkg;
                        for (e in n)
                            n.hasOwnProperty(e) && (s[e] = n[e])
                    }
                    ,
                    e.loadJs = function(t) {
                        l(t)
                    }
                    ,
                    e.loadCss = function(t) {
                        if (t.content) {
                            var e = document.createElement("style");
                            e.type = "text/css",
                                e.styleSheet ? e.styleSheet.cssText = t.content : e.innerHTML = t.content,
                                r.appendChild(e)
                        } else if (t.url) {
                            var n = document.createElement("link");
                            n.href = t.url,
                                n.rel = "stylesheet",
                                n.type = "text/css",
                                r.appendChild(n)
                        }
                    }
                    ,
                    e.alias = function(t) {
                        return t.replace(/\.js$/i, "")
                    }
                    ,
                    e.timeout = 5e3,
                    t.__M.define = n,
                    t.__M.require = e
            }

            t.__M.define("douyin_falcon:node_modules/byted-acrawler/dist/runtime", function(l, e) {
                Function(function(l) {
                    return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'.replace(/[-]/g, function(e) {
                        return l[15 & e.charCodeAt(0)]
                    })
                }("v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}".split("")))()('gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ', [Object.defineProperty(e, "__esModule", {
                    value: !0
                })])
            });

            let x = t.__M.require("douyin_falcon:node_modules/byted-acrawler/dist/runtime");
            let signature = x.sign(params[0]);
            console.log(signature);
            return commonResponse.success(signature);
        }
    }
};