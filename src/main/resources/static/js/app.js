const AppController = (function () {
    let state = {};

    function updateState(key, value) {
        state[key] = value;
    }

    function getState(key) {
        return state[key];
    }

    return {
        setState: function (key, value) {
            updateState(key, value);
        },
        getState: function (key) {
            return getState(key);
        },
        resetState: function () {
            state = {};
        },
        getAllState: function () {
            return { ...state };
        }
    };
})();