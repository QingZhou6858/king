import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@string("number", 5)',
    name: '@cname',
    remarks: '@ctitle',
    createTime: '@date("yyyy-MM-dd")',
    createUser: '@cname',
    lastUpdateTime: '@date("yyyy-MM-dd")',
    lastUpdateUser: '@cname',
    lastLoginTime: '@date("yyyy-MM-dd")'
  }))
}

function myIndexOf(v, input) {
  return !(input && v && v.indexOf(input) === -1)
}
/*
function myEq(v, input) {
  return !(input && v && v !== input)
}
*/

export default {
  getList: config => {
    const { like, page, limit } = param2Obj(config.url)

    const mockList = List.filter(item => {
      return (myIndexOf(item.name, like) ||
        myIndexOf(item.remarks, like))
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      code: 200,
      data: {
        total: mockList.length,
        list: pageList
      }
    }
  },
  get: (config) => {
    const { id } = param2Obj(config.url)
    for (const vo of List) {
      if (vo.id === +id) {
        return {
          code: 200,
          data: {
            vo
          }
        }
      }
    }
  },
  add: () => ({
    code: 200,
    data: 'success'
  }),
  update: () => ({
    code: 200,
    data: 'success'
  }),
  del: () => ({
    code: 200,
    data: 'success'
  }),
  recover: () => ({
    code: 200,
    data: 'success'
  }),
  realDel: () => ({
    code: 200,
    data: 'success'
  })
}
