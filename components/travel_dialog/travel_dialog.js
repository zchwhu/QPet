Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    title: {
      type: String,
      value: 'default value',
    },
    content: {
      type: String,
      value: 'default value',
    },
    confirmBtnText: {
      type: String,
      value: 'default value',
    },
    content: {
      type: String,
      value: ''
    },
    cancelBtnText: {
      type: String,
      value: 'default value',
    },
    width: {
      type: Number,
      value: 388,
    },
    height: {
      type: Number,
      value: 100
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
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