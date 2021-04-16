### jsx使用antd下拉菜单案例
```js
  let typeArr = ref([
    {
      id: 1,
      type: "类型1",
    },
    {
      id: 2,
      type: "类型2",
    },
  ]);
<a-form-item label="下拉选择">
    <a-select
    v-model={[this.formState.type, "value"]}
    placeholder="请选择类型"
    >
    {this.typeArr.map((item) => {
        return (
        <a-select-option
            v-model={[item.type, "value"]}
            key={item.id}
        >
            {item.type}
        </a-select-option>
        );
    })}
    </a-select>
</a-form-item>
```