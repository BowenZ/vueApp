/**
 * Mocking client-server processing
 */
const _nodeLabels = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' },
  { id: 4, name: 'ddd' }
]

const _relationshipLabels = [
  { id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' },
  { id: 4, name: 'ddd' }
]

const _searchLabels = [
  [{ id: 1, name: 'aaa' },
  { id: 2, name: 'bbb' },
  { id: 3, name: 'ccc' },
  { id: 4, name: 'ddd' }],
  [{ id: 5, name: 'eee' },
  { id: 6, name: 'fff' },
  { id: 7, name: 'ggg' },
  { id: 8, name: 'hhh' }],
  [{ id: 9, name: 'iii' },
  { id: 10, name: 'jjj' },
  { id: 11, name: 'kkk' },
  { id: 12, name: 'lll' }],
  [{ id: 13, name: 'mmm' },
  { id: 14, name: 'nnn' }],
  [{ id: 15, name: 'ooo' }],
  [{ id: 16, name: 'ppp' }],
  [{ id: 17, name: 'qqq' }],
  [{ id: 18, name: 'rrr' }],
  [{ id: 19, name: 'sss' }],
  [{ id: 20, name: 'ttt' }],
]

function getRandom(){
  return Math.floor(Math.random() * 10)
}

export default {
  getNodeLabels(cb) {
    setTimeout(() => cb(_nodeLabels), 100)
  },
  getRelationshipLabels(cb) {
    setTimeout(() => cb(_relationshipLabels), 100)
  },
  getSearchLabels(cb){
    setTimeout(() => cb({
      type: 'labels',
      data: _searchLabels[getRandom()]
    }), 100)
  }
}
