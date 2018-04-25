const state = {
    todos: [
        {
            id: 1,
            content: 'one ',
            completed: true
        }
    ],
    change: false,
    tag: 'all',
    id: 1,
};

let filter = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(val => val.completed === false);
    },
    completed: function (todos) {
        return todos.filter(val => val.completed === true);
    }
};
const mutations = {
    // 点击改变全部
    toggleAllComplete: (state) => {
        console.log(state.change);
        // state.pointChange = !state.pointChange;
        if (!state.change) {
            this.pointChange = true;
        }else{
            this.pointChange = false;
        }   
        state.todos = state.todos.map(val => {
            val.completed = this.pointChange;
            return val;
        });
        state.change = this.pointChange;

    },
    // 处理记录的状态：未完成和已完成
    toggleTodo: (state, id) => {
        state.todos = state.todos.map(val => {
            if (val.id === id) {
                val.completed = !val.completed;
            }
            return val;
        });
    },
    // 删除任务
    onDelete: (state, id) => {
        state.todos = state.todos.filter(val => val.id !== id);
    },
    // 添加任务
    addTodo(state, e) {
        state.todos.unshift({
            id: ++state.id,
            content: e.target.value,
            completed: false
        });
        e.target.value = '';
    },
    // 点击出现未完成
    toggleFilter(state, filter) {
        state.tag = filter;
    }
};

const actions = {
    toggleAllComplete: ({ commit }) => {
        commit('toggleAllComplete');
    },
    toggleTodo: ({ commit }, id) => {
        commit('toggleTodo', id);
    },
    // 删除任务
    onDelete: ({ commit }, id) => {
        commit('onDelete', id);
    },
    // 添加任务
    addTodo: ({ commit }, e) => {
        commit('addTodo', e);
    },
    // 点击出现未完成
    toggleFilter: ({ commit }, filter) => {
        commit('toggleFilter', filter);
    }
};

const getters = {
    num: state => state.todos.length,
    pointChange: state => {
        const isFlag = state.todos.some(val => val.completed === false);
        if (isFlag) {
            return false;
        } else {
            return true;
        }
    },
    allTodos: function (state) {
        return filter[state.tag](state.todos);
    }
};

export default ({
    state,
    actions,
    mutations,
    getters
});