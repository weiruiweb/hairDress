//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  images:[
      { 

        src:'/images/hairs1.jpg',
      
      }, {

        src: '/images/hairs2.jpg',
      
      }, {
  
        src: '/images/hairs1.jpg',
       
      }, {

        src: '/images/hairs2.jpg',
       
      }, {

        src: '/images/hairs1.jpg',
    
      }, {

        src: '/images/hairs2.jpg',

      }, {

        src: '/images/hairs1.jpg',
     
      },{

        src: '/images/hairs2.jpg',
      
      }, {
  
        src: '/images/hairs1.jpg',
       
      }, {

        src: '/images/hairs2.jpg',
       
      }, {

        src: '/images/hairs1.jpg',
    
      }, {

        src: '/images/hairs2.jpg',

      }, {

        src: '/images/hairs1.jpg',
     
      },{

        src: '/images/hairs2.jpg',
      
      }, {
  
        src: '/images/hairs1.jpg',
       
      }, {

        src: '/images/hairs2.jpg',
       
      }, {

        src: '/images/hairs1.jpg',
    
      }, {

        src: '/images/hairs2.jpg',

      }, {

        src: '/images/hairs1.jpg',
     
      },{

        src: '/images/hairs2.jpg',
      
      }, {
  
        src: '/images/hairs1.jpg',
       
      }, {

        src: '/images/hairs2.jpg',
       
      }, {

        src: '/images/hairs1.jpg',
    
      }, {

        src: '/images/hairs2.jpg',

      }, {

        src: '/images/hairs1.jpg',
     
      },

      
    ]
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
  newAddress:function(){
    wx.navigateTo({
      url:'/pages/newAddress/newAddress'
    })
  }
})
