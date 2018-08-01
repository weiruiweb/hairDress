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
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  
})
