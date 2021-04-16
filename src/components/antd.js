import { Button, Input, Form, Radio, Select, Icon } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

import '@/assets/css/antd.scss'


export default {
    install(Vue) {
        Vue.use(Button).use(Input).use(Form).use(Radio).use(Select).use(Icon)
    }
}