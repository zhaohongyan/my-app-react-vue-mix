<template>
  <div class="page">
    <h3>iviewui</h3>

    <Input
      v-model="value"
      placeholder="Enter something..."
      style="width: 300px"
    />

    <Select v-model="model1" style="width: 200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Button>查询</Button>
  </div>
</template>

<script>
import { Input, Select, Option, Button } from "view-design";

export default {
  name: "Page",
  components: {
    Input,
    Select,
    Option,
    Button,
  },
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      value: "",
      model1: "",
    };
  },
};
</script>

<style css>
.page {
  padding: 40px;
  border-bottom: 1px solid #eee;
}
</style>
