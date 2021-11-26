//后端返回的数据需要进行数据结构修改，需求将一个数组变成一个树的对象，将对象里的键值名替换成其他
export function arrToTreeData(val) {
  if (!val.length) return []
  let transformData = val.map((item) => {
    item['key'] = item.menuId
    item['title'] = item.name
    delete item.menuId
    delete item.name
    return item
  })
  const treeInArr = transformData.filter((item) => {
    if (item.parentId === 1) {
      item.children = []
      return item
    }
  })
  //进行数据树的广度优先遍历，并在需要添加的地方添加数据
  const bfs = (root) => {
    const q = [root]
    while (q.length > 0) {
      const n = q.shift()
      // 这里添加children数据
      if (transformData.length) {
        const menuId = n.key
        transformData = transformData.filter((item) => {
          if (item.parentId == menuId) {
            if (!n.children) {
              n.children = []
            }
            n.children.push(item)
          } else {
            return item
          }
        })
      }
      if (n.children) {
        n.children.forEach((item) => {
          q.push(item)
        })
      }
    }
  }
  treeInArr.forEach((item) => {
    bfs(item)
  })
  return treeInArr
}
