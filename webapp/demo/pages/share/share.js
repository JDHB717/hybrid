﻿define([
    'BaseView',
    'text!PagePath/share/tpl.layout.html',
    'text!StylePath/common.css'
], function (AbstractView,
             layoutHtml,
             commonStyle) {

    return _.inherit(AbstractView, {
        propertys: function ($super) {

            $super();

            this.template = layoutHtml;
            this.commonstyle = commonStyle;

            this.events = {
                'click .js-btn01': function () {

/*打开native的分享框
如果没有传递参数则
title&desc直接取title标签的title
image取第一张图片的链接,没有就为空
link取网页的url
native图标包括:
1 发送给微信朋友
2 分享到朋友圈
3 发送给qq好友
4 分享到qq空间
5 分享到新浪微博
6 复制链接
*/
_.requestHybrid({
    tagname: 'openNativeUI',
    param: {
        title: '分享标题',
        desc: '分享描述',
        image: 'http://medlinker.com/h5/interlocution/static/img/icon-camera.png',
        link: 'http://medlinker.com'
    },
    callback: function(data) {
       //分享成功时候的回调

    }
});

                }

            }

        },

        initHeader: function () {
            var opts = {
                view: this,
                title: '分享 Demo',
                back: function () {
                    this.back();
                }
            };
            this.header.set(opts);
        },

        initElement: function () {

        },

        addEvent: function ($super) {
            $super();

            this.on('onShow', function () {


            });
        }

    });

});
