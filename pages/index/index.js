const app = getApp()
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [{
        avatar: '../../images/avatar_1.jpg',
        name: 'BanyaDai'
      }
    ],
    talkVisible: false,
    inputVisible: false,
    word: '',
    inputValue: '',
    tipText: '',
    foodVisible: false,
    dirtyVisible: false,
    tipVisible: false,
    footStep: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var now = new Date(),
      nowHour = now.getHours();

    console.log(nowHour)

    // 根据时间判断生成食物
    if ((17 <= nowHour&& nowHour<= 19) || (6 <= nowHour&&nowHour <= 8) || (11 <= nowHour&&nowHour <= 13)) {
      this.setData({
        tipVisible: true,
        foodVisible: true,
        tipText: "领取"
      })
    }

    if ((20 <= nowHour && nowHour <= 23) || (9 <= nowHour && nowHour <= 10) || (14 <= nowHour && nowHour <= 16)) {
      this.setData({
        tipVisible: true,
        dirtyVisible: true,
        tipText: "脏脏"
      })
    }

    const baseUrl = app.globalData.baseUrl
    const openid = app.globalData.openid
    const that = this
    // 请求用户初始化数据
    wx.request({
      url: baseUrl + 'getSingleUserInfo/' + openid,
      method: "GET",
      success: function (res) {
        console.log('首页初始化1')
        console.log(res)
        console.log(res.data)
        console.log(typeof res.data)
        that.setData({
          // footStep:res.data.
        })
      }
    })
    // 请求宠物初始化数据
    wx.request({
      url: baseUrl + 'getSinglePetInfo/' + openid,
      method: "GET",
      success: function (res) {
        console.log('首页初始化2')
        console.log(res)
        console.log(res.data)
        console.log(typeof res.data)
        that.setData({
          // footStep:res.data.
        })
      }
    })
    
    // setTimeout(() => {
    //   this.setData({
    //     talkVisible: true,
    //   })
    //   setTimeout(() => {
    //     this.setData({
    //       word: '测试一下测试一下测试一下测试一下测试一下'
    //     })
    //   }, 1000)
    // }, 2000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    app.pet_1_hi.play()
    if (app.bgm.paused) {
      // app.bgm.play()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    app.bgm.pause()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // 绑定旅游按钮
  onTripBtnTap: function() {
    app.clickSound.play()
    wx.navigateTo({
      url: '../trip/trip'
    })
  },

  // 绑定返回按钮
  onBackpackBtnTap: function() {
    app.clickSound.play()
    wx.navigateTo({
      url: '../backpack/backpack'
    })
  },

  onRankBtnTap: function() {
    app.clickSound.play()
    wx.navigateTo({
      url: '../rank/rank'
    })
  },

  // 绑定设置按钮
  onSettingBtnTap: function() {
    app.clickSound.play()
    wx.navigateTo({
      url: '../settings/settings'
    })
  },

  // 绑定输入框事件
  bindKeyInput: function() {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
  },

  // 绑定发送事件
  onSendTalkMsgTap: function() {
    var msg = this.data.inputValue
    if (msg) {
      
    }
  },

  onChatBtnTap: function() {
    this.setData({
      inputVisible: !this.data.inputVisible
    })
  },

  // 点击食物
  onFoodTap: function(){
    console.log('food')
    const baseUrl = app.globalData.baseUrl
    const openid = app.globalData.openid
    const that = this
    wx.request({
      url: baseUrl + 'interactpetcat',
      method: "POST",
      data: {
        openid: openid,
        code: '3'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          tipVisible: false,
          foodVisible: false,
          tipText: ""
        })
      }
    })
  },

  // 点击脏脏
  onDirtyTap: function () {
    console.log('dirty')
    const baseUrl = app.globalData.baseUrl
    const openid = app.globalData.openid
    const that = this
    wx.request({
      url: baseUrl + 'interactpetcat',
      method: "POST",
      data: {
        openid: openid,
        code: '1'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          tipVisible: false,
          dirtyVisible: false,
          tipText: ""
        })
      }
    })
  },

  // 抚摸宠物
  onPetTap: function () {
    console.log('food')
    const baseUrl = app.globalData.baseUrl
    const openid = app.globalData.openid
    const that = this
    wx.request({
      url: baseUrl + 'interactpetcat',
      method: "POST",
      data: {
        openid: openid,
        code: '2'
      },
      success: function (res) {
        console.log(res)
      }
    })
  }
})