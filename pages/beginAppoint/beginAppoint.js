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
  changeData:function(e){
    var current=e.currentTarget.dataset.current;
    console.log(e.currentTarget.dataset.current)
    this.setData({
      tabCurrent:current
    })
  },
  newAddress:function(){
    wx.navigateTo({
      url:'/pages/newAddress/newAddress'
    })
  }
})
