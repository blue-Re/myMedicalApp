import axios from "axios";
import {mockAjax} from '../api/ajax'
// 请求模拟数据(随机生成的数据)
export const reqMockData = ()=>axios.get('http://localhost:8080/mock/mock_data')

// 请求常见疾病接口
export const reqFoodHealth = (id) => axios.get(`http://localhost:8080/mock/mock_mydata/food`,{params:id})

// 请求急救指南接口
export const reqEmergency = (id)=>axios.get(`http://localhost:8080/mock/mock_mydata/emergency`,{params:id})

