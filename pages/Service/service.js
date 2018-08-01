//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tapCurrent:0,

  },
  
  onLoad: function () {
   
  },
 
  tabCont:function(e){
      var currentId=e.currentTarget.dataset.id;
      this.setData({
       tapCurrent:currentId
      });
  },
  detail:function(){
    wx.navigateTo({
      url:'/pages/detail/detail'
    })
  }
})
