//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  tabCurrent:0,
  isShow:false,
  isChoose:0,
  isChoose1:0,
  },
  
  onLoad: function () {
   
  },
  userInfo:function(){
    wx.navigateTo({
      url:'/pages/userInfo/userInfo'
    })
  },
  
  select_this:function(e){
    var current= e.currentTarget.dataset.current;
    this.setData({
      tabCurrent:current
    })
  },
  goBuy:function(){
    var isShow = !this.data.isShow;
    this.setData({
      isShow:isShow
    })
  },
  close:function(){
    this.setData({
      isShow:false
    })
  },
  choose_type:function(e){
    var current = e.currentTarget.dataset.type;
    this.setData({
        isChoose:current
    })
  },
  choose_service:function(e){
    var current = e.currentTarget.dataset.type;
    this.setData({
        isChoose1:current
    })
  }
})
