export const rules = {
  num: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      patther: /^[0-9]{11}/,
      message: '手机号必须是11位数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      require: true,
      message: '验证码是必传内容',
      trigger: 'blur'
    },
    {
      patttern: /^[0-9]{4}/,
      message: '验证码必须是4位数字',
      trigger: 'blur'
    }
  ]
}
