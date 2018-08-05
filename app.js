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

        const appid = 'wxbba90a0d17bedf2a'; //微信小程序appid  
        const secret = '861f086a1a36c098529bacae71afb9f9'; //微信小程序secret  

        //调用request请求api转换登录凭证  
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&grant_type=authorization_code&js_code=' + res.code,
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log('openid' + res.data.openid) //获取openid  
            //获取openid成功后传到服务器
            that.globalData.openid = res.data.openid
            wx.request({
              url: 'http://118.24.229.188:8080/login/'+res.data.openid,
              success: (res)=>{
                console.log(res.data)
                that.globalData.isLogin = res.data.code
              }
            })
          }
        })
      }
    })
    // 获取用户信息

    // 初始化背景音乐及音效对象，以便全局调用和修改音量参数
    this.bgm = wx.createInnerAudioContext()
    this.bgm.autoplay = true
    this.bgm.volume = 1.0
    this.bgm.loop = true
    this.bgm.src = 'http://dl.stream.qqmusic.qq.com/C100000u9mvd33eXlb.m4a?fromtag=0'
    // this.bgm.src = 'http://dl.stream.qqmusic.qq.com/C100001vsxpv1usBsA.m4a?fromtag=0'
    console.log(this.bgm)
    this.bgm.onError((res) => {
      console.log('ERROR'); console.log(res.errMsg); console.log(res.errCode)
    })

    this.clickSound = wx.createInnerAudioContext()
    this.clickSound.autoplay = false
    this.clickSound.volume = 0.8
    this.clickSound.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/click_1.wav'

    this.pet_1_hi = wx.createInnerAudioContext()
    this.pet_1_hi.autoplay = false
    this.pet_1_hi.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/Pet_1_Hi.wav'

    this.pet_2_hi = wx.createInnerAudioContext()
    this.pet_2_hi.autoplay = false
    this.pet_2_hi.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/Pet_2_Hi.wav'

    this.pet_3_hi = wx.createInnerAudioContext()
    this.pet_3_hi.autoplay = false
    this.pet_3_hi.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/Pet_3_Hi.wav'

    this.pet_1_happy = wx.createInnerAudioContext()
    this.pet_1_happy.autoplay = false
    this.pet_1_happy.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/Pet_1_Happy.wav'
    this.pet_1_unhappy = wx.createInnerAudioContext()
    this.pet_1_unhappy.autoplay = false
    this.pet_1_unhappy.src = 'http://miniproj2018-1251109379.cosgz.myqcloud.com/audio/Pet_1_Unhappy.wav'

    console.log("audio initialized.")
  },
  globalData: {
    userInfo: null,
    baseUrl: "http://118.24.229.188:8080/",
    token: ""
  }
})