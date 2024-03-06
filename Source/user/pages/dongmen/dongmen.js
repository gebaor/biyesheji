// pages/dongmen/dongmen.js
Page({
  onLoad: function () {
    // 设置页面标题
    wx.setNavigationBarTitle({
      title: '东门摊位'
    })
  },
  data: {
    buppumuList: [
      {
        id: 1,
        name: "摊位1",
        // image_url: "/images/restaurant1.jpg",
      },
      {
        id: 2,
        name: "摊位2",
        // image_url: "/images/restaurant2.jpg",
      },
      // 添加更多餐厅项...
    ],
  },

  // 点击餐厅项后跳转到菜单页面
  navigateToMenu(event) {
    const buppumuId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/menu/menu?id=${buppumuId}`,
    });
  },
});