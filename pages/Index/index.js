//index.js
//获取应用实例
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
Page({
  data: {
    
  },
  onLoad: function () {
    this.setData({
      fonts:app.globalData.font
    })
  },
  store:function(){
    wx.navigateTo({
      url:'/pages/store/store'
    })
  },
  map:function(){
    wx.navigateTo({
      url:'/pages/map/map'
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
