import { request } from '../axios'

// 获取新闻
// export function httpGet(name) {
//   return request.get('/model/save', {
//     params: { name },
//   })
// }

export function saveOrUpdate(object) {
  return request.post('./system/save',{
    ...object
  })
}



export function login(object) {
  return request.post('./system/login',{
    ...object
  })
}

export function getlist(category,pageIndex,pageSize) {
  return request.get('./system/list',{
    params: { category, pageIndex,pageSize}
  })
}
//获取模型单条数据
export function getItem(id) {
  return request.get('/system/item/'+id)
}
//删除数据
export function deleteItem(id) {
  return request.get('/system/delete/'+id)
}


