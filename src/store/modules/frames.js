import dataSource from '../../api/data.js'

const state = {
  frames: [],
  pinFrames: [],
  frameTotal: 0,
  key: 0
}

const getters = {
  frames: state => state.frames,
  pinFrames: state => state.pinFrames,
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
    frame.pinTime = +new Date()
    state.frames.unshift(frame)
  },
  removeFrame(state, index){
    state.frames.splice(index, 1)
  },
  pinFrame(state, index){
    state.pinFrames.unshift(state.frames.splice(index, 1)[0])
    console.log(state.pinFrames)
  },
  unpinFrame(state, index){
    state.frames.unshift(state.pinFrames.splice(index, 1)[0])
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}