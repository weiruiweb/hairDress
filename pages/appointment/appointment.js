//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabCurrent:0,
  },
  
  onLoad: function () {
   
  },
  userInfo:function(){
    wx.navigateTo({
      url:'/pages/userInfo/userInfo'
    })
  },
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  discount:function(e){
    var current=e.currentTarget.dataset.current;
    this.setData({
      tapCurrent:current
    })
  },
  beginAppoint:function(){
    wx.navigateTo({
      url:'/pages/beginAppoint/beginAppoint'
    })
  }
})
