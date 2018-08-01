//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tapCurrent:0,
  region: ['广东省', '广州市', '海珠区'],
  },
  
  onLoad: function () {
   
  },
  userInfo:function(){
    wx.navigateTo({
      url:'/pages/userInfo/userInfo'
    })
  },
  backAddress:function(){
    wx.navigateTo({
      url:'/pages/member/member'
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
  bindDateChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  switch2Change: function (e){

  },
   bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})
