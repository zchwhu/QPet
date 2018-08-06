Page({
  data: {
    imgs: [
      [
        { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_1.png" },
        { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_2.png" },
        { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_3.png" },
        { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_4.png" },
      ],
      [{ ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_5.png" },
      { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_6.png" },
      { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_7.png" },
      { ImgUrl: "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_8.png" }]
    ],
    screenNum: 0
  },
  // 图片预览
  imgPreview: function (e) {
    var that = this;
    var all_pic = [];
    var url = e.currentTarget.dataset.url
    console.log("点击的url：", e);
    for (var i = 0; i < that.data.imgs.length; i++) {
      for (var j = 0; j < that.data.imgs[i].length;j++){
        var imgUrl = that.data.imgs[i][j].ImgUrl
        all_pic.push(imgUrl)
      }     
    }

    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: all_pic // 需要预览的图片http链接列表
    })
  },
  onLoad:function(){
    console.log(this.data.imgs.length * 100);
    this.setData({
      screenNum: this.data.imgs.length*100
    })
  },
  savephoto:function(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              console.log('授权成功')
              var imgSrc = "http://miniproj2018-1251109379.cosgz.myqcloud.com/photograph/dressup_1.png";
              wx.getImageInfo({
                src: imgSrc,
                success: function (ret) {
                  var path = ret.path;
                  wx.saveImageToPhotosAlbum({
                    filePath: path,
                    success(result) {
                      console.log(result)
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  backHome:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  }
})