//logs.js
import {Api} from '../../utils/api.js';
var api = new Api();
const app = getApp();
Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  userInfo:function(){
    wx.navigateTo({
      url:'/pages/member/member'
    })
  },
  discount:function(){
    wx.navigateTo({
      url:'/pages/consume/consume'
    })
  },
  address:function(){
    wx.navigateTo({
      url:'/pages/album/album'
    })
  },
  discount:function(){
    wx.navigateTo({
      url:'/pages/discount/discount'
    })
  },
  mygroup:function(){
    wx.navigateTo({
      url:'/pages/myGroup/mygroup'
    })
  },
  payment:function(){
    wx.navigateTo({
      url:'/pages/payment/payment'
    })
  },
  top_in:function(){
    wx.navigateTo({
      url:'/pages/userChongzhi/userChongzhi'
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
