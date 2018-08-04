Component({
  properties: {
    text: {
      type: String,
      value: 'default value',
    },
    className: {
      type: String,
      value: '',
    },
    width: {
      type: Number,
      value: 388,
    },
    height: {
      type: Number,
      value: 100
    }
  },
  externalClasses: ['extra-class'],
  data: {
    // 这里是一些组件内部数据
    visible: false
  },
  methods: {
    // 这里是一个自定义方法
    hideDialog: function () {
      this.setData({
        visible: !this.data.visible
      })
    },
    showDialog: function () {
      this.setData({
        visible: !this.data.visible
      })
    },
    onCancelBtnTap: function () {
      this.triggerEvent("cancelEvent")
    },
    onConfirmBtnTap: function () {
      this.triggerEvent("confirmEvent")
    }
  }
})