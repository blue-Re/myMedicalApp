<template>
  <Move>
    <div id="questionNaire" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">医疗服务社会问卷调查</div>
      </NavBar>

      <div class="desTitle">
        <span
          >您好，欢迎参加本次答题！本问卷实行匿名制，所有数据只用于统计分析，
          请您放心填写。题目选项无对错之分，请您按自己的实际情况填写。谢谢您的帮助。</span
        >
      </div>
      <br />

      <van-form @submit="onSubmit" label-width="7rem" input-align="left">
        <van-field name="sex" label="Q1：您的性别是？">
          <template #input>
            <van-radio-group v-model="sex" direction="column">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="profession" label="Q2：您的职业是？">
          <template #input>
            <van-radio-group v-model="profession" direction="column">
              <van-radio name="在校学生">在校学生</van-radio>
              <van-radio name="医疗人员">医疗人员</van-radio>
              <van-radio name="政府人员">政府人员</van-radio>
              <van-radio name="其他">其他</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="remark" label="Q3：您的对医疗服务质量的评价是？">
          <template #input>
            <van-radio-group v-model="remark" direction="column">
              <van-radio name="很满意">很满意</van-radio>
              <van-radio name="满意">满意</van-radio>
              <van-radio name="一般">一般</van-radio>
              <van-radio name="不满意">不满意</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="medical_insurance" label="Q4：您是否购买了医疗保险？">
          <template #input>
            <van-radio-group v-model="medical_insurance" direction="column">
              <van-radio name="是">是</van-radio>
              <van-radio name="否">否</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="getIll" label="Q5：如果生病了，您会？">
          <template #input>
            <van-radio-group v-model="getIll" direction="column">
              <van-radio name="马上就医">马上就医</van-radio>
              <van-radio name="置之不理">置之不理</van-radio>
              <van-radio name="自己买药吃">自己买药吃</van-radio>
              <van-radio name="视情况而定">视情况而定</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="go_to_doctor" label="Q6：生病了，您会去哪种机构就医？">
          <template #input>
            <van-radio-group v-model="go_to_doctor" direction="column">
              <van-radio name="私人医院">私人医院</van-radio>
              <van-radio name="大型医院">大型医院</van-radio>
              <van-radio name="社区医院">社区医院</van-radio>
              <van-radio name="其他">其他</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="medical_matter" label="Q7：您认为现如今医疗的主要问题是？">
          <template #input>
            <van-radio-group v-model="medical_matter" direction="column">
              <van-radio name="就医贵">就医贵</van-radio>
              <van-radio name="看病难">看病难</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="resolve_matter" label="Q8：您认为解决医疗问题的方法是什么">
          <template #input>
            <van-checkbox-group v-model="resolve_matter" direction="column">
              <van-checkbox name="政府加大管理力度与资金投入"
                >政府加大管理力度与资金投入</van-checkbox
              >
              <van-checkbox name="增加医生的待遇，提升医生地位"
                >增加医生的待遇，提升医生地位</van-checkbox
              >
              <van-checkbox name="明确药品药价">明确药品药价</van-checkbox>
              <van-checkbox name="普及医疗保险">普及医疗保险</van-checkbox>
              <van-checkbox name="健全法律">健全法律</van-checkbox>
              <van-checkbox name="鼓励更多的人去学医，充实医疗队伍"
                >鼓励更多的人去学医，充实医疗队</van-checkbox
              >
              <van-checkbox name="其他">其他</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>

        <van-field name="rate" label="您对此次问卷是否满意？" style="font-size:1rem;font-weight:bold">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>

        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">提交问卷</van-button>
        </div>
      </van-form>
    </div>
  </Move>
</template>

<script>
import Move from "../../../components/Move/Move";
import LeftBack from "../../../components/LeftBack/LeftBack";
import NavBar from "../../../components/NavBar/NavBar";

export default {
  data() {
    return {
      sex: "",
      profession: "",
      remark: "",
      medical_insurance: "",
      getIll: "",
      go_to_doctor: "",
      medical_matter: "",
      resolve_matter: "",
      checkbox: false,
      resolve_matter: [],
      rate: 0,
    };
  },
  components: {
    Move,
    LeftBack,
    NavBar,
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
#questionNaire {
  .desTitle {
    padding-top: 50px;
    span::before {
      content: "问卷调查!";
      color: red;
    }
  }
}
</style>
