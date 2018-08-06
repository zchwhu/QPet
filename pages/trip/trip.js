// pages/trip/trip.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollWidth: 0,
    scrollLeft: 0,
    imageHistoryRect: {},
    pet_top: 1000,
    pet_left: 620,
    tme_left: 89.1338,
    tme_top: 77.6007,
    sng_left: 82.0078,
    sng_top: 60.4249,
    teg_left: 68.8188,
    teg_top: 18.4594,
    ieg_left: 28.2677,
    ieg_top: 55.9982,
    tencent_top: 24.4355,
    tencent_left: 28.1496,
    img_width: 1124.39,
    img_height: 100,
    tme_left_pe: 89.1338,
    tme_top_pe: 77.6007,
    sng_left_pe: 82.0078,
    sng_top_pe: 60.4249,
    teg_left_pe: 68.8188,
    teg_top_pe: 18.4594,
    ieg_left_pe: 28.2677,
    ieg_top_pe: 55.9982,
    tencent_top_pe: 24.4355,
    tencent_left_pe: 28.1496,
    des_top: 0,
    des_left: 0,
    left_diff: 0,
    top_diff: 0,
    destination: -1,
    pet_stickEnable: 0,
    screen_height: 0,
    trip_begin: 1,
    trip_clothes: "../../images/trip_clothes.png",
    trip_cloth_index: 0,
    hasGift: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openid = app.globalData.openid
    const baseUrl = app.globalData.baseUrl
    const that = this

    wx.request({
      url: baseUrl+'getpetmap/'+openid,
      method: "GET",
      success: function(res){
        console.log(res.data)
        that.setData({
          hasGift: res.data == '1',
          trip_cloth_index: res.data.msg
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
    this.giftDialog = this.selectComponent("#giftDialog")

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

  onBackBtnTap: function () {
    this.setData({
      backVisiable: false
    })
    this.dialog.hideDialog();
  },

  _cancelEvent: function () {
    this.setData({
      backVisiable: false
    })
    this.dialog.hideDialog();
  },
  onImageLoad: function (e) {
    var $width = e.detail.width, //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height; //图片的真实宽高比例
    var viewWidth = 718, //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 718 / ratio; //计算的高度值
    this.setData({
      imageHistoryRect: {
        width: viewWidth,
        height: viewHeight
      }
    })
  },
  onTap: function (e) {
    // console.log(e)
    // var destination = 0;
    app.clickSound.play()
    var k = -1;
    do {
      k = Math.floor(5 * Math.random())
    } while (k == this.data.destination)
    this.data.destination = k
    /**移动阶段 */
    // console.log(this.data.destination)
    this.switchDes();
    console.log(this.data.des_top)
    console.log(this.data.des_left)
    this.setData({
      top_diff: this.data.des_top - this.data.pet_top,
      left_diff: this.data.des_left - this.data.pet_left
    })

    /**使宠物可以相对图片移动 */
    this.setData({
      pet_stickEnable: 0
    })
    console.log(1)
    this.timer_trip = setInterval(this.onMoveDestination, 200)
    console.log('after_interval')
  },
  onScroll: function (e) {
    if (this.data.pet_stickEnable > 0) {
      this.switchDes();
      this.setData({
        pet_left: this.data.des_left,
        pet_top: this.data.des_top
      })
    }
    this.setData({
      tme_left: (this.data.img_width * this.data.tme_left_pe * 0.01) - e.detail.scrollLeft * this.data.img_width / e.detail.scrollWidth - 50,
      tme_top: this.data.screen_height * this.data.tme_top_pe * 0.01 - 170,
      ieg_left: (this.data.img_width * this.data.ieg_left_pe * 0.01) - e.detail.scrollLeft * this.data.img_width / e.detail.scrollWidth - 50,
      ieg_top: this.data.screen_height * this.data.ieg_top_pe * 0.01 - 110,
      sng_left: (this.data.img_width * this.data.sng_left_pe * 0.01) - e.detail.scrollLeft * this.data.img_width / e.detail.scrollWidth - 50,
      sng_top: this.data.screen_height * this.data.sng_top_pe * 0.01 - 90,
      teg_left: (this.data.img_width * this.data.teg_left_pe * 0.01) - e.detail.scrollLeft * this.data.img_width / e.detail.scrollWidth - 50,
      teg_top: this.data.screen_height * this.data.teg_top_pe * 0.01 - 110,
      tencent_left: (this.data.img_width * this.data.tencent_left_pe * 0.01) - e.detail.scrollLeft * this.data.img_width / e.detail.scrollWidth - 50,
      tencent_top: this.data.screen_height * this.data.tencent_top_pe * 0.01 - 110,
      scrollWidth: e.detail.scrollWidth
    });
    // console.log(this.data.scrollWidth)

  },
  onShow: function () { //在Page显示的时候 启动timer. 可以直接this.timer赋值,不用声明

    this.timer = setInterval(this.scrollHistoryView, 100)
    var scheight = 0;
    var pixel_ = 0
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight)
        console.log(res.pixelRatio)
        scheight = res.screenHeight
        pixel_ = res.pixelRatio
      },
    })
    this.setData({
      screen_height: scheight * pixel_,
    })
  },
  onHide: function () { //在Page隐藏的时候, 关闭timer
    clearInterval(this.timer)
  },
  scrollHistoryView: function () { //自动滚动scroll-view代码
    if (this.data.scrollLeft > 750 - this.data.scrollWidth) {
      clearInterval(this.timer)
      if (this.data.trip_begin == 1) {
        this.setData({
          trip_begin: 0
        })
        // this.onTap();
      }
    }

    var scleft = this.data.scrollLeft;
    this.setData({
      scrollLeft: this.data.scrollLeft + 5
    })
    // console.log(this.data.img_width)
    // console.log(this.data.scrollLeft)
    var that = this


  },

  upper: function () {
    clearInterval(this.timer)
  },
  onMoveDestination: function () {
    if ((this.data.pet_left) == this.data.des_left &&
      this.data.pet_top == this.data.des_top) {
      clearInterval(this.timer_trip);
      var that = this
      setTimeout(
        function () {
          that.giftDialog.showDialog();
        }, 2000
      )

    } else if (Math.abs(this.data.pet_left - this.data.des_left) <= Math.abs(this.data.left_diff / 6)) {
      this.switchDes();
      if (this.data.des_left > 650) {
        this.setData({
          scrollLeft: this.data.scrollLeft +
            this.data.left_diff / 6,
          // pet_top: this.data.des_top,
          left_diff: -this.data.left_diff
        })
        this.switchDes();
      } else if (this.data.des_left < 0) {
        this.switchDes();
        this.setData({
          scrollLeft: this.data.scrollLeft +
            this.data.left_diff / 6,
          // pet_top: this.data.des_top,
          left_diff: -this.data.left_diff
        })
        this.switchDes();
      } else {
        this.switchDes();
        this.setData({
          pet_left: this.data.des_left,
          pet_top: this.data.des_top,
          /**使宠物相对图片静止 */
          pet_stickEnable: 1
        })
        /***请求阶段 */
        // this.inputDialog.hideDialog();
        // const trip_Url = app.globalData.baseUrl
        // // const petname = this.data.petName
        // const token = app.globalData.token
        // this.giftDialog.showDialog().bind(this);
        // // setTimeout(function () {
        // //   this.giftDialog.showDialog();
        // // }.bind(this), 1000)
        // wx.request({
        //   url: trip_Url + "GetMapPetInfo/token=" + token,
        // })
        this.switchDes();
      }

    } else {
      if (this.data.pet_left + this.data.left_diff / 6 > 650) {
        this.setData({
          scrollLeft: this.data.scrollLeft +
            this.data.left_diff / 6,
          pet_top: this.data.pet_top + this.data.top_diff / 6,
          des_left: this.data.des_left - this.data.left_diff / 6
        })
      } else if (this.data.pet_left +
        this.data.left_diff / 6 < 0) {
        this.setData({
          scrollLeft: this.data.scrollLeft +
            this.data.left_diff / 6,
          pet_top: this.data.pet_top + this.data.top_diff / 6,
          des_left: this.data.des_left - this.data.left_diff / 6
        })
      } else
        this.setData({
          pet_left: this.data.pet_left + this.data.left_diff / 6,
          pet_top: this.data.pet_top + this.data.top_diff / 6
        })
    }
  },
  dialog_confirmInputEvent: function () {
    var sse = "sse"
    // console.log(sse)
    this.dialog.hideDialog()
  },
  dialog_cancelInputEvent: function () {
    this.dialog.hideDialog();
  },
  gift_confirmInputEvent: function () {
    console.log('tap')
    this.giftDialog.hideDialog();
    this.dialog.showDialog();
  },
  switchDes: function () {
    switch (this.data.destination) {
      case 0:
        console.log('tme')
        this.setData({
          des_top: this.data.tme_top,
          des_left: this.data.tme_left
        })
        break;
      case 1:
        console.log('sng')
        this.setData({
          des_top: this.data.sng_top,
          des_left: this.data.sng_left
        })
        break;
      case 2:
        console.log('teg')
        this.setData({
          des_top: this.data.teg_top,
          des_left: this.data.teg_left
        })
        break;
      case 3:
        console.log('ieg')
        this.setData({
          des_top: this.data.ieg_top,
          des_left: this.data.ieg_left
        })
        break;
      case 4:
        console.log('tencent')
        this.setData({
          des_top: this.data.tencent_top,
          des_left: this.data.tencent_left
        })
        break;
      default:
        break;
    }
  }
})