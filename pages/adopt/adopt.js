// pages/adopt/adopt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/qpet_1.png',
      '../../images/qpet_2.png',
      '../../images/qpet_3.png'
    ],
    currentIndex: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
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
    this.dialog = this.selectComponent("#dialog");
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

  onSwiperChange: function(e){
    var current = e.detail.current;
    this.setData({
      currentIndex: current
    })
  },

  onChoosePet: function(){
    this.dialog.showDialog();
  },
  _cancelEvent: function(){
    console.log('领养')
    this.dialog.hideDialog();
  },
  _confirmEvent: function(){
    console.log('邀请朋友合养')
    this.dialog.hideDialog();
  }
})