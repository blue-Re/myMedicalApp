// 引入data.json
import myData from'./data.json'

// 引入mock.js
const Mock = require('mockjs')
// 获取mock.Random 对象
const Random = Mock.Random

// 模拟数据，包括标题、内容、创建时间
const data = function () {  
  let dataList = []
  for (let i = 0; i < 20; i++) {
    let dataObject = {
      title:Random.ctitle(), //Random.ctitle(min,max) 随机产生一个中文标题，长度默认在3-7之间
      content:Random.cparagraph(),  //Random.cparagraph(min,max) 随机生成一个中文段落，段落里句子个数默认3-7个
      createdTime:Random.date(),//Random.date() 指定生成的日期字符串格式
      img:Random.image(),// 生成默认图片
      username:Random.cname() //生成默认名字
    }
    dataList.push(dataObject)
  }
  return dataList
}

// 请求该url，就可以返回dataList --->这是自动生成的数据
Mock.mock('http://localhost:8080/mock/mock_data',data)

// 请求我们自己创建的数据
// 常见疾病接口
Mock.mock("http://localhost:8080/mock/mock_mydata/oftenIllness",myData.ofenIllness)
// 急救指南接口
Mock.mock(`http://localhost:8080/mock/mock_mydata/emergency`,myData.Emergency)

