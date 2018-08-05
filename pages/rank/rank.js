// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranks:[
      {
        petAvatar:"../../images/qpet_1.png",
        users: [
          {
            avatar: "../../images/avatar_1.jpg"
          }
        ],
        praise: 123,
        hasClicked: false
      },
      {
        petAvatar: "../../images/qpet_2.png",
        users: [
          {
            avatar: "../../images/avatar_1.jpg"
          },
          {
            avatar: "../../images/avatar_2.jpg"
          }
        ],
        praise: 109,
        hasClicked: false
      },
      {
        petAvatar: "../../images/qpet_3.png",
        users: [
          {
            avatar: "../../images/avatar_2.jpg"
          }
        ],
        praise: 90,
        hasClicked: false
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

  onPraiseBtnTap: function(e){
    var index = e.currentTarget.dataset.index;
    var ranks = this.data.ranks;
    if (!ranks[index].hasClicked){
      ranks[index].hasClicked = true
      console.log(index)
      this.setData({
        ranks: ranks
      })
    }
  }
})