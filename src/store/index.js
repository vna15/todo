import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
    loading: false
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload)
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    toggleTodo(state, payload) {
      const index = state.todos.findIndex(item => item.id === payload.id);
      if (index > -1) {
        const checked = !state.todos[index].checked;
        state.todos[index].checked = checked;
      }
    },
    removeTodo(state, payload){
      state.todos = state.todos.filter(item => item.id !== payload.id);
    },
    toggleList(state, todosIds) {
      const todos = state.todos.map(i => {
       return todosIds.includes(i.id) ? {...i, checked: !i.checked} : i;
      });
      state.todos = todos;
    },
    removeList(state, todosIds) {
      const todos = state.todos.filter(item => !todosIds.includes(item.id));
      state.todos = todos;
    }
  },
  actions: {
    addTodo({commit}, todo){
      commit('setLoading', true);
      return new Promise(resolve => {
        setTimeout(() => {
          todo.id = Date.now()
          commit('addTodo', todo)
          commit('setLoading', false);
          resolve(todo)
        }, 300)
      })
    },
    toggleTodo({commit}, todo) {
      commit('toggleTodo', todo);
    },
    removeTodo({commit}, todo) {
      commit('removeTodo', todo);
    },
    checkAll({commit, state}){
      const uncheckedsIds = state.todos.filter(i => !i.checked).map(i => i.id);
      commit('toggleList', uncheckedsIds);
    },
    uncheckAll({commit, state}){
      const checkedsIds = state.todos.filter(i => i.checked).map(i => i.id);
      commit('toggleList', checkedsIds);
    },
    removeAllCheckeds({commit, state}){
      const checkedsIds = state.todos.filter(i => i.checked).map(i => i.id);
      commit('removeList', checkedsIds);
    }
  },
  modules: {
  },
  getters: {
    unChecked(state) {
      return state.todos.filter(todo => todo.checked === false)
    },
    checkeds(state) {
      return state.todos.filter(todo => todo.checked)
    }
  }
})
