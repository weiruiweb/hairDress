//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tapCurrent:0,
    currentId:0,
    girls_hairs1:[
      { 

        src:'/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
    
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'

      }, {

        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
     
      },{

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
    
      },

      
    ],
    girls_hairs2:[
      { 

        src:'/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'短发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      },

      
    ],
    girls_hairs3:[
      { 

        src:'/images/hairs1.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      },
      
      
    ],
    girls_hairs4:[
      { 

        src:'/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      },

      
    ],
    girls_hairs5:[
      { 

        src:'/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      },
 
    ],
    girls_hairs6:[
      { 

        src:'/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {

        src: '/images/hairs2.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
      
      }, {
  
        src: '/images/hairs1.jpg',
        type:'寸头',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      }, {

        src: '/images/hairs2.jpg',
        type:'卷发',
        content:'长卷，显示女生气质，适合圆脸女生'
       
      },

      
    ]
  },
  
  onLoad: function () {
   
  },
  menuTap:function(e){
      var current=e.currentTarget.dataset.current;
      this.setData({
       tapCurrent:current
      });
  },
  tabCont:function(e){
      var currentId=e.currentTarget.dataset.id;
      this.setData({
       currentId:currentId
      });
  },
  // gongzhonghao:function(){
  //   wx.navigateTo({
  //     url:'/pages/gongzhonghao/gongzhonghao'
  //   })
  // },
  detail:function(){
    wx.navigateTo({
      url:'/pages/detail/detail'
    })
  },
})
