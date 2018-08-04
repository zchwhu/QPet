// pages/backpack/backpack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wearIndex: 0,
    imageSrc: '../../images/pet.png',
    screenNum: 0,
    //测试用，用于背包首页的宠物展示
    img: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/pet.png",
    visible: false,
    imgs: [
      [
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/norm_1.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/norm_2.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/ssr_3.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/ssr_4.png',
      ],
      [
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/norm_1.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/norm_2.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/ssr_3.png',
        'http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/ssr_4.png',
      ]
    ]
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

  //页面跳转进入相册
  GotoPhotograpg: function() {
    wx.navigateTo({
      url: '../photoalbum/photoalbum'
    })
  },

  imgPreview: function(e) {
    var url = e.currentTarget.dataset.url
    var urls = [];
    urls.push(url);
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },

  onLoad: function() {
    console.log(this.data.imgs.length * 100);
    this.setData({
      screenNum: this.data.imgs.length * 100
    })
  },

  onChangeBtnTap: function() {
    this.setData({
      visible: !this.data.visible
    })
  },

  changeCloth: function(e) {
    var url = e.currentTarget.dataset.url,
      subUrl = url.split("_")[1],
      index = subUrl.replace('.png', ""),
      baseUrl = "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup",
      newUrl = baseUrl + "_" + index + ".png";
    console.log(newUrl);
    this.setData({
      visible: false,
      img: newUrl
    })
  }
})