// index.js
Page({
  data:{
    indicatordots:true,/*加入图标指示点*/
    autoplay:true,/*自动切换图片开关*/
    interval:2000,/*切换时间属性2000=2秒*/
  },
  tiaozhuandongmen(){
    wx.navigateTo({
      url: '/pages/dongmen/dongmen',
    })
  },
  tiaozhuanximen(){
    wx.navigateTo({
      url: '/pages/ximen/ximen',
    })
  },
  tiaozhuannanmen(){
    wx.navigateTo({
      url: '/pages/nanmen/nanmen',
    })
  },
  tiaozhuanbeimen(){
    wx.navigateTo({
      url: '/pages/beimen/beimen',
    })
  }
})
wx.getLocation({
  type: 'wgs84',
  success: (res) => {
    var latitude = res.latitude // 纬度
    var longitude = res.longitude // 经度
  }
})
