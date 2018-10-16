var arouseApp = {
    WX: null,
    wxReady: false,
    wxReadyCBFs: [],
    canWakeup: false,
    appId: null,
    schemeUrl: null,
    gettingSignature: false,
    getSignatured: false,
    curUrl: window.location.href.split('#')[0],//获取当前url，用于获取微信签名
    //获取微信签名，注意如果多处同时获取签名,会造成wx.ready事件冲突（可用setTimeOut进行处理）
    getSignature: function getSignature() {
        var self = this;
        self.gettingSignature = true;
        var params = {
            url: this.curUrl
        };
        $.ajax({
            url: '//weixin-api.vip.com/v2/jsSdk/getSignature',
            data: params,
            dataType: 'jsonp',
            jsonp: 'jsonp',
            cache: false,
            success: function success(res) {
                self.appId = res.data.appid;
                var confObj = {
                    debug: false,
                    appId: res.data.appid,
                    timestamp: res.data.timestamp,
                    nonceStr: res.data.noncestr,
                    signature: res.data.signature,
                    beta: true,
                    jsApiList: ['launchApplication']
                };
                self.getSignatured = true;
                self.gettingSignature = false;
                self.WX.config(confObj);
            },
            fail: function fail(err) {
                self.gettingSignature = false;
                console.log(err);
            }
        });
    },
    ready: function ready(callback) {
        if (this.wxReady && callback && typeof callback === 'function') {
            callback();
        } else {
            this.wxReadyCBFs.push(callback);
        }
    },
    isNewWechat: function isNewWechat(userAgent) {
        var re = /micromessenger\/([\d.]+)/i;
        var matchArr = userAgent.match(re);
        var version = Array.isArray(matchArr) ? matchArr[1].split('.') : null;
        if (version === null) return false;
        if (parseInt(version[0], 10) > 6) return true;
        if (parseInt(version[0], 10) < 6) return false;
        if (parseInt(version[1], 10) > 5) return true;
        if (parseInt(version[1], 10) < 5) return false;
        if (parseInt(version[2], 10) >= 16) return true;
        if (parseInt(version[2], 10) < 16) return false;
        return false;
    },
    invokeLaunchApp: function invokeLaunchApp(opts) {
        var conf = {
            appID: this.appId,
            schemeUrl: opts.schemeUrl
        };
        window.WeixinJSBridge && window.WeixinJSBridge.invoke && window.WeixinJSBridge.invoke('launchApplication', conf, opts.onLaunch);
    },
    wakeup: function wakeup(opts) {
        if (!this.isNewWechat(navigator.userAgent)) return;

        if (!opts.onLaunch || typeof opts.onLaunch !== 'function') {
            opts.onLaunch = this.defaultOpts.onLaunch;
        }

        if (window.WeixinJSBridge) {
            this.invokeLaunchApp(opts);
        } else {
            document.addEventListener('WeixinJSBridgeReady', function () {
                this.invokeLaunchApp(opts);
            });
        }
    },
    defaultOpts: {
        schemeUrl: this.schemeUrl,
        onLaunch: function onLaunch(res) {
            if (res.err_msg.indexOf('launchApplication:fail_check fail') > -1) {
                VIP.notify_tips('打开失败，请重试');
            } else if (res.err_msg.indexOf('launchApplication:fail') > -1) {
                VIP.notify_tips('打开失败，请检查是否已安装唯品会APP');
            }
        }
    },
    init: function init(callback) {
        // if (VIP.defaultParam.is_weixin && !VIP.defaultParam.is_liteapp) {
        var self = this;
        self.canWakeup = true;
        if (self.wxReady) {
            if (callback && typeof callback === 'function') {
                callback();
            }
        } else {
            if (callback && typeof callback === 'function') {
                self.wxReadyCBFs.push(callback);
            }
            require(['//res.wx.qq.com/open/js/jweixin-1.2.0.js'], function (wx) {
                self.WX = wx;
                if (!self.getSignatured && !self.gettingSignature) {
                    self.getSignature();
                }
                // 微信ready
                self.WX.ready(function () {
                    while (self.wxReadyCBFs.length) {
                        self.wxReadyCBFs.pop()();
                    }
                    self.wxReady = true;
                });
            });
        }
        // }
    }
};

// 用法
var $appCaller = $('.plugin-app-caller'),
    $clickCaller = $('.mst-caller-link');
// 唤起url
function getUrl() {
    var params = {
        tra_from: (VIP.cookie('cps') || '').replace(/^adp:/, 'tra:'),
        platform: VIP.defaultParam.is_weixin ? 'wx' : 'w',
        device: 'i',
        cid: VIP.defaultParam.mars_cid,
        f: VIP.cookie('WAP[from]'),
        other: ''
    },
    urlParams = $.param(params),
    encryptId = VIP.getConfigValueByKey('data', 'encrypt_id') || VIP.getConfigValueByKey('data', 'id'),
    tempUrl = 'https://mst.vip.com/uploadfiles/exclusive_subject/te/v1/' + encryptId + '.php?mst_page_type=guide&mst_cdi=1&wapid=mst_' + VIP.getConfigValueByKey('data', 'id');
    if (extraType) {
    tempUrl += '&extra_type=' + extraType
    }
    return 'vipshop://showWebview?url=' + encodeURIComponent(tempUrl) + '&' + decodeURIComponent(urlParams) + '&from=wx'
}

setTimeout(function() {
    if(!VIP.arouseApp.wxReady) {
        VIP.arouseApp.init(function(){
            $appCaller.show()
        })
    } else {
        $appCaller.show()
    }
}, 1000);

$clickCaller.click(function () {
    VIP.arouseApp.wakeup({
        schemeUrl: getUrl()
    })
})