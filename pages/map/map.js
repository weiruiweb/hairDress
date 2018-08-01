//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  
  onLoad: function () {
   
  },
  
})
,34.24334
wx.getLocation({  
  type: 'gcj02',
  success: function(res){
    console.log(res)
    wx.openLocation({  
      latitude: res.latitude,
      longitude: res.longitude,
      scale: 28, // 缩放比例
    })  
  }  
}) 

