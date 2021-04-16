import { Button, Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import '@/assets/css/antd.scss'


export default {
    install(Vue) {
        Vue.use(Button).use(Input)
    }
}