//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  
  onLoad: function () {
   
  },
  shoppingEmpty:function(){
    wx.navigateTo({
      url:'/pages/shoppingEmpty/shoppingEmpty'
    })
  },
  payment:function(){
    wx.navigateTo({
      url:'/pages/payment/payment'
    })
  },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  top_in:function(){
    wx.navigateTo({
      url:'/pages/userChongzhi/userChongzhi'
    })
  }
  
})
