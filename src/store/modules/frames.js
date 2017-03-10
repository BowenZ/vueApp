import dataSource from '../../api/data.js'

const state = {
  frames: [],
  frameTotal: 0,
  key: 0
}

const getters = {
  frames: state => state.frames,
  frameTotal: state => state.frameTotal
}

const actions = {
  getSearchLabels({commit}){
    dataSource.getSearchLabels(labels => {
      commit('receiveFrame', labels)
    })
  }
}

const mutations = {
  receiveFrame(state, frame){
    frame.key = state.key++
    console.log(frame.key)
    state.frames.unshift(frame)
  },
  removeFrame(state, index){
    // console.log(index)
    state.frames.splice(index, 1)
    // console.log('=========')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}