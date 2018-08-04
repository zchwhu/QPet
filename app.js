//app.js
App({
  index: 1,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var that = this
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res.code)
        wx.request({
          url: 'http://118.24.229.188:8080/login/' + res.code,
          success: function(res){
             console.log(res.data)
             if(res.data.code === "1"){
               that.globalData.token = res.data.token
               console.log(that.globalData.token)
             } 
          }
        })
      }
    })
    // 获取用户信息
  },
  globalData: {
    userInfo: null,
    baseUrl: "http://118.24.229.188:8080/",
    token: ""
  }
})