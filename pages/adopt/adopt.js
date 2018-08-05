// pages/adopt/adopt.js
const app = getApp()

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
    duration: 1000,
    backVisiable: false,
    petName: "测试名字"
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
    this.inputDialog = this.selectComponent("#inputDialog");
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

    console.log('currentIndex: ' + this.data.currentIndex);
    //每个宠物播放一个打招呼声效
    switch (this.data.currentIndex) {
      case 0:
        app.pet_1_hi.play();
        break;
      case 1:
        app.pet_2_hi.play();
        break;
      case 2:
        app.pet_3_hi.play();
        break;
      // default: console.log("Error when playing hello sound.")
    }
  },

  onChoosePet: function(){
    this.setData({
      backVisiable: true
    })
    this.dialog.showDialog();
  },

  onBackBtnTap: function(){
    this.setData({
      backVisiable: false
    })
    this.dialog.hideDialog();
  },

  _cancelEvent: function(){
    this.setData({
      backVisiable: false
    })
    this.dialog.hideDialog();
  },

  _confirmEvent: function(){
    this.setData({
      backVisiable: false
    })
    this.dialog.hideDialog();
    this.inputDialog.showDialog();
  },

  _cancelInputEvent: function(){
    this.inputDialog.hideDialog();
  },

  _confirmInputEvent: function(){
    this.inputDialog.hideDialog();
    const baseUrl = app.globalData.baseUrl
    const petname = this.data.petName
    const token = app.globalData.token
    wx.request({
      url: baseUrl +"adoptpet",
      method: "POST",
      data: {
        openid: app.globalData.openid,
        petname: this.data.petName || '测试一下'
      }
    })
    wx.redirectTo({
      url: '../index/index'
    })
  },

  bindKeyInput: function () {
    this.setData({
      petName: e.detail.value
    })
    console.log(this.data.petName)
  }
})