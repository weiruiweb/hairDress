//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  onLoad: function () {
   
  },
  order_dresser:function(){
    wx.navigateTo({
      url: '/pages/appointment/appointment'
    })
  },
  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },
  intoPathRedirect(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'redi');
  }, 

})
