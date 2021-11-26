//当值为0是返回true，其他返回它的布尔值
function isFalsy(value) {
  return value === 0 ? true : !!value
}

//清理对象中空的键值
function cleanObject(object) {
  const result = { ...object }
  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (!isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}