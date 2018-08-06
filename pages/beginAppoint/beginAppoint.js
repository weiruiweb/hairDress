//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabCurrent:0,
    isChoose:0,
    array: ['高新1号店:陕西省西安市雁塔区大都荟', '高新2号店:  陕西省西安市雁塔区大都荟', '高新3号店:  陕西省西安市雁塔区大都荟', '高新4号店:  陕西省西安市雁塔区大都荟'],
    array1: ['60分钟', '90分钟', '120分钟', '150分钟'],
    index: 0,
    index1:0,

    multiArray: [['发型师1', '发型师2'], ['发型师2', '发型师4', '发型师4', '发型师6', '发型师9']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '无脊柱动物'
        },
        {
          id: 1,
          name: '脊柱动物'
        }
      ], [
        {
          id: 0,
          name: '扁性动物'
        },
        {
          id: 1,
          name: '线形动物'
        },
        {
          id: 2,
          name: '环节动物'
        },
        {
          id: 3,
          name: '软体动物'
        },
        {
          id: 3,
          name: '节肢动物'
        }
      ], [
        {
          id: 0,
          name: '猪肉绦虫'
        },
        {
          id: 1,
          name: '吸血虫'
        }
      ]
    ],
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
    this.setData({
      tabCurrent:current
    })
  },
  newAddress:function(){
    wx.navigateTo({
      url:'/pages/newAddress/newAddress'
    })
  },
  choose:function(e){
    var current = e.currentTarget.dataset.type;
    this.setData({
      isChoose:current
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
   bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
})
