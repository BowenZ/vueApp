import dataSource from '../../api/data.js'

const state = {
  nodeLabels: [],
  relationshipLabels: [],
  nodeTotal: 0,
  relationshipTotal: 0
}

const getters = {
  nodeLabels: state => state.nodeLabels,
  relationshipLabels: state => state.relationshipLabels,
  nodeTotal: state => state.nodeTotal,
  relationshipTotal: state => state.relationshipTotal
}

const actions = {
  getNodeLabels({commit}){
    dataSource.getNodeLabels(nodeLabels => {
      commit('receiveNodeLabels', nodeLabels);
    })
  },
  getRelationshipLabels({commit}){
    dataSource.getRelationshipLabels(relationshipLabels => {
      commit('receiveRelationshipLabels', relationshipLabels);
    })
  }
}

const mutations = {
  receiveNodeLabels(state, labels){
    state.nodeLabels = labels
    state.nodeTotal = labels.length
  },
  receiveRelationshipLabels(state, labels){
    state.relationshipLabels = labels
    state.relationshipTotal = labels.length
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}