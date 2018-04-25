const state = {
    news: [
        [{
            time: '上午10:00:01',
            content: '好冷啊',
            name: '郑梦柯'
        }, {
            time: '上午10:03:01',
            content: '好冷啊啊啊啊啊',
            name: '郑梦柯'
        }, {
            time: '上午10:11:01',
            content: '好饿啊',
            name: '郑梦柯'
        },],
        [{
            time: '上午10:00:01',
            content: '好冷啊',
            name: 'zmk'
        }, {
            time: '上午10:03:01',
            content: '好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊好冷啊啊啊啊啊',
            name: 'zmk'
        }, {
            time: '上午10:11:01',
            content: '不饿',
            name: 'zmk'
        },],
        [{
            time: '上午10:00:01',
            content: '好冷啊',
            name: '郑梦柯3'
        }, {
            time: '上午10:03:01',
            content: '好冷啊啊啊啊啊',
            name: '郑梦柯3'
        }, {
            time: '上午10:11:01',
            content: '好饿啊',
            name: '郑梦柯3'
        }, {
            time: '上午10:11:01',
            content: '吃饭吃饭吃饭吃饭好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊好饿啊',
            name: '郑梦柯3'
        },]
    ],
    tab: 0
};

const actions = {
    tabChange: function ({ commit }, tab) {
        commit('tabChange', tab);
    },
    submit: function ({ commit }, e) {
        commit('submit', e);
    }
};

const mutations = {
    tabChange: function (state, tab) {
        state.tab = tab;
    },
    submit: function (state, e) {
        if (e.target.value.trim() === '') {
            alert('发送信息不能为空');
        } else {
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var seconds = new Date().getSeconds();
            var time = null;
            if (hours > 12) {
                hours = hours - 12;
                time = '下午';
            } else {
                time = '上午';
            }
            state.news[state.tab].push({
                time: time + hours + ':' + minutes + ':' + seconds,
                content: e.target.value,
                name: 'zzz'
            });
            e.target.value = '';
        }
    }
};

const getters = {
    leftNews: function (state) {
        var arr = [];
        state.news.forEach(val => {
            arr.push(val[val.length - 1]);
        });
        return arr;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};