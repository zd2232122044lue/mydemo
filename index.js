const express = require('express')
const app = express()

// 启动静态资源服务
app.use(express.static('public'))

// 后台接口
app.get('/data', (req, res) => {
  res.json({
    uname: 'zhidi',
    age: 20
  })
})

app.listen(3000, () => {
  console.log('running...')
})