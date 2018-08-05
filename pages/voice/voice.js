// pages/voice/voice.js
// 获得App实例以修改音量参数
var app = getApp()
// var foo = app.globalData.bgmVol
// var fooo = app.globalData.soundEffectVolsoundEffectVol
var foo = app.bgm
let bgmVolume = "bgm.volume"

Page({
  onReady: function () {
    // console.log(app.bgm.volume)
  },

  backgroundVolumeChange: function (e) {
    console.log("Changing bgm volume:" + e.detail.value)
    // url:'../settings?id=' + this.data.e.detail.value
    app.bgm.volume = e.detail.value
    // console.log("bgm.volume = " + app.globalData.bgm.volume)
  },

  soundFXVolumeChange: function (e) {
    console.log("Changing sound effects volume" + + e.detail.value)
    // url:'../settings?id=' + this.data.e.detail.value
    app.clickSound.volume = e.detail.value
    console.log("soundFX vol:" + app.bgm.volume)
  },

})