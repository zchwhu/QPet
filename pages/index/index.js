// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users:[
      {
        avatar: '../../images/avatar_1.jpg',
        name: 'BanyaDai'
      },
      {
        avatar: '../../images/avatar_1.jpg',
        name: '皮卡丘'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  onTripBtnTap: function(){
    wx.navigateTo({
      url: '../trip/trip'
    })
  },

  onBackpackBtnTap: function () {
    wx.navigateTo({
      url: '../backpack/backpack'
    })
  },

  onRankBtnTap: function () {
    wx.navigateTo({
      url: '../rank/rank'
    })
  },

  onSettingBtnTap: function () {
    wx.navigateTo({
      url: '../settings/settings'
    })
  }
})