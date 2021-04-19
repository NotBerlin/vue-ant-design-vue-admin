export default {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        },
        setSessionStorage(key, value) {
            const data = typeof value === 'object' ? JSON.stringify(value) : value;
            sessionStorage.setItem(key, data)
        },
        getSessionStorage(key) {
            const data = sessionStorage.getItem(key);
            return data;
        }
    }
};