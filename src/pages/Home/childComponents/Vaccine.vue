<template>
  <Move>
    <div id="vaccine" slot="Move">
      <NavBar>
        <Left slot="left"></Left>
        <div slot="title">疫苗助手</div>
      </NavBar>
      <nav class="nav">
        <van-tabs v-model="active" type="card" color="green" animated swipeable>
          <van-tab title="儿童疫苗">
            <div class="content">
              <img src="../img/childVaccine.png" alt="" style="width: 100%" />
              <div class="words">
                为了防止宝宝被传染病传染，从宝宝出生起到12岁，宝宝要被注射各种疫苗。每个宝宝都会有一本儿童预防接种证，上面有9种免费的疫苗需要宝宝接种。除了这9种疫苗之外，还有其他疫苗，家长根据自己的情况自愿接种。
              </div>

              <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                cancel-button-text=" "
                visible-item-count="4"
                class="calendar"
                @confirm="confirm"
                ref="calendar"
              />

              <div class="information">智能儿童疫苗接种时间</div>

              <div class="vaccineInfo" v-if="vaccine">
                <ul class="typeOfVaccine" v-show="isShow">
                  <li class="vaccineLists">
                    <div class="vaccineName">
                      <span>卡介苗</span>
                      <div>
                        <i
                          class="iconfont icon-yimiao1"
                          style="font-size: xxx-large; color: green"
                        ></i>
                      </div>
                    </div>
                    <div class="attention">
                      <div class="Key">
                        <span>是否收费：{{ this.vaccine[0].卡介苗[0].是否收费 }}</span>
                      </div>
                      <div class="Key">
                        注射开始周数：{{ this.vaccine[0].卡介苗[0].注射开始周数 }}
                      </div>
                      <div class="Key">
                        注射开始时间：{{ this.vaccine[0].卡介苗[0].注射开始时间 }}
                      </div>
                      <div class="Key">
                        <span
                          >注射开始月数：{{
                            this.vaccine[0].卡介苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key">
                        注射次数：{{ this.vaccine[0].卡介苗[0].注射次数 }}
                      </div>
                      <div class="Key">
                        注射结束周数：{{ this.vaccine[0].卡介苗[0].注射结束周数 }}
                      </div>
                      <div class="Key">
                        注射结束时间：{{ this.vaccine[0].卡介苗[0].注射结束时间 }}
                      </div>
                      <div class="Key">
                        注射结束月数：{{ this.vaccine[0].卡介苗[0].注射结束月数 }}
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="attention2">
                      <div class="Key2">
                        <span>是否收费：{{ this.vaccine[1].乙肝疫苗[0].是否收费 }}</span>
                      </div>
                      <div class="Key2">
                        注射开始周数：{{ this.vaccine[1].乙肝疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key2">
                        注射开始时间：{{ this.vaccine[1].乙肝疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key2">
                        <span
                          >注射开始月数：{{
                            this.vaccine[1].乙肝疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射次数：{{ this.vaccine[1].乙肝疫苗[0].注射次数 }}
                      </div>
                      <div class="Key2">
                        注射结束周数：{{ this.vaccine[1].乙肝疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key2">
                        注射结束时间：{{ this.vaccine[1].乙肝疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key2">
                        注射结束月数：{{ this.vaccine[1].乙肝疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                    <div class="vaccineName2">
                      <span>乙肝疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-bingdu"
                          style="font-size: xxx-large; color: brown"
                        ></i>
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="vaccineName">
                      <span>脊灰疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-dna"
                          style="font-size: xxx-large; color: skyblue"
                        ></i>
                      </div>
                    </div>
                    <div class="attention">
                      <div class="Key">
                        <span>是否收费：{{ this.vaccine[2].脊灰疫苗[0].是否收费 }}</span>
                      </div>
                      <div class="Key">
                        注射开始周数：{{ this.vaccine[2].脊灰疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key">
                        注射开始时间：{{ this.vaccine[2].脊灰疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key">
                        <span
                          >注射开始月数：{{
                            this.vaccine[2].脊灰疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key">
                        注射次数：{{ this.vaccine[0].卡介苗[0].注射次数 }}
                      </div>
                      <div class="Key">
                        注射结束周数：{{ this.vaccine[0].卡介苗[0].注射结束周数 }}
                      </div>
                      <div class="Key">
                        注射结束时间：{{ this.vaccine[0].卡介苗[0].注射结束时间 }}
                      </div>
                      <div class="Key">
                        注射结束月数：{{ this.vaccine[0].卡介苗[0].注射结束月数 }}
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="attention2">
                      <div class="Key2">
                        <span
                          >是否收费：{{ this.vaccine[3].百白破疫苗[0].是否收费 }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射开始周数：{{ this.vaccine[3].百白破疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key2">
                        注射开始时间：{{ this.vaccine[3].百白破疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key2">
                        <span
                          >注射开始月数：{{
                            this.vaccine[3].百白破疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射次数：{{ this.vaccine[3].百白破疫苗[0].注射次数 }}
                      </div>
                      <div class="Key2">
                        注射结束周数：{{ this.vaccine[3].百白破疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key2">
                        注射结束时间：{{ this.vaccine[3].百白破疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key2">
                        注射结束月数：{{ this.vaccine[3].百白破疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                    <div class="vaccineName2">
                      <span>百白破疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-Ornamnt-"
                          style="font-size: xxx-large; color: gray"
                        ></i>
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="vaccineName">
                      <span>麻风疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-DNA"
                          style="font-size: xxx-large; color: pink"
                        ></i>
                      </div>
                    </div>
                    <div class="attention">
                      <div class="Key">
                        <span>是否收费：{{ this.vaccine[4].麻风疫苗[0].是否收费 }}</span>
                      </div>
                      <div class="Key">
                        注射开始周数：{{ this.vaccine[4].麻风疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key">
                        注射开始时间：{{ this.vaccine[4].麻风疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key">
                        <span
                          >注射开始月数：{{
                            this.vaccine[4].麻风疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key">
                        注射次数：{{ this.vaccine[4].麻风疫苗[0].注射次数 }}
                      </div>
                      <div class="Key">
                        注射结束周数：{{ this.vaccine[4].麻风疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key">
                        注射结束时间：{{ this.vaccine[4].麻风疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key">
                        注射结束月数：{{ this.vaccine[4].麻风疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="attention2">
                      <div class="Key2">
                        <span
                          >是否收费：{{ this.vaccine[5].麻腮风疫苗[0].是否收费 }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射开始周数：{{ this.vaccine[5].麻腮风疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key2">
                        注射开始时间：{{ this.vaccine[5].麻腮风疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key2">
                        <span
                          >注射开始月数：{{
                            this.vaccine[5].麻腮风疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射次数：{{ this.vaccine[5].麻腮风疫苗[0].注射次数 }}
                      </div>
                      <div class="Key2">
                        注射结束周数：{{ this.vaccine[5].麻腮风疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key2">
                        注射结束时间：{{ this.vaccine[5].麻腮风疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key2">
                        注射结束月数：{{ this.vaccine[5].麻腮风疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                    <div class="vaccineName2">
                      <span>麻腮风疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-xijun"
                          style="font-size: xxx-large; color: purple"
                        ></i>
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="vaccineName">
                      <span>乙脑减毒活疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-ziyuan"
                          style="font-size: xxx-large; color: blue"
                        ></i>
                      </div>
                    </div>
                    <div class="attention">
                      <div class="Key">
                        <span
                          >是否收费：{{
                            this.vaccine[6].乙脑减毒活疫苗[0].是否收费
                          }}</span
                        >
                      </div>
                      <div class="Key">
                        注射开始周数：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key">
                        注射开始时间：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key">
                        <span
                          >注射开始月数：{{
                            this.vaccine[6].乙脑减毒活疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key">
                        注射次数：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射次数 }}
                      </div>
                      <div class="Key">
                        注射结束周数：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key">
                        注射结束时间：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key">
                        注射结束月数：{{ this.vaccine[6].乙脑减毒活疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                  </li>
                  <li class="vaccineLists">
                    <div class="attention2">
                      <div class="Key2">
                        <span
                          >是否收费：{{
                            this.vaccine[7].甲肝减毒活疫苗[0].是否收费
                          }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射开始周数：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射开始周数 }}
                      </div>
                      <div class="Key2">
                        注射开始时间：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射开始时间 }}
                      </div>
                      <div class="Key2">
                        <span
                          >注射开始月数：{{
                            this.vaccine[7].甲肝减毒活疫苗[0].注射开始月数
                          }}</span
                        >
                      </div>
                      <div class="Key2">
                        注射次数：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射次数 }}
                      </div>
                      <div class="Key2">
                        注射结束周数：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射结束周数 }}
                      </div>
                      <div class="Key2">
                        注射结束时间：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射结束时间 }}
                      </div>
                      <div class="Key2">
                        注射结束月数：{{ this.vaccine[7].甲肝减毒活疫苗[0].注射结束月数 }}
                      </div>
                    </div>
                    <div class="vaccineName2">
                      <span>甲肝减毒活疫苗</span>
                      <div>
                        <i
                          class="iconfont icon-bingdu1"
                          style="font-size: xxx-large; color: rgb(5, 210, 208)"
                        ></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </van-tab>
          <van-tab title="新冠疫苗">
            <div class="content">
              <img src="../img/newVaccine.webp" alt="" style="width: 100%" />
              <div class="words">
                2021年3月29日，国家卫健委发布《新冠病毒疫苗接种技术指南（第一版）》，针对既往感染者何时能接种新冠疫苗、18岁以下人群及孕期女性能否接种新冠疫苗等问题作出明确规定。
              </div>
              <img src="../img/newVaccineInfo.jpg" style="width: 100%" alt="" />
              <div class="words">
                1. 首版接种指南明确这5类人不适合接种
                国家卫健委3月29日发布的首版新冠病毒疫苗接种技术指南最新明确，5类人群不宜接种疫苗：
                对疫苗的活性成分、任何一种非活性成分、生产工艺中使用的物质过敏者，或以前接种同类疫苗时出现过敏者；
                既往发生过疫苗严重过敏反应者（如急性过敏反应、血管神经性水肿、呼吸困难等）；
                患有未控制的癫痫和其他严重神经系统疾病者（如横贯性脊髓炎、格林巴利综合症、脱髓鞘疾病等）；
                正在发热者，或患急性疾病，或慢性疾病的急性发作期，或未控制的严重慢性病患者；
                妊娠期妇女。
                <br /><br />
                <img src="../img/des1.jpg" style="width: 100%" alt="" />
                2. 这3类特定人群接种需注意什么？ <br /><br />
                60岁及以上人群<br /><br />
                60岁及以上人群为感染新冠病毒后的重症、死亡高风险人群。目前，4个附条件批准上市的新冠病毒疫苗Ⅲ期临床试验研究纳入该人群的数量有限，暂无疫苗对该人群的保护效力数据。但Ⅰ/Ⅱ期临床研究数据显示，该人群疫苗接种安全性良好，与18-59岁人群相比，接种后中和抗体滴度略低，但中和抗体阳转率相似，提示疫苗对60岁以上人群也会产生一定的保护作用，建议接种。
                18岁以下人群<br /><br />
                目前已有的疫苗尚未获得用于该人群的临床试验数据，暂不推荐18岁以下人群接种。
                慢性病人群<br /><br />
                慢性病人群为感染新冠病毒后的重症、死亡高风险人群。健康状况稳定，药物控制良好的慢性病人群不作为新冠病毒疫苗接种禁忌人群，建议接种。
              </div>
              <img src="../img/des2.jpg" style="width: 100%" alt="" />
            </div>
          </van-tab>
        </van-tabs>
      </nav>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import Left from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { reqChildVaccine } from "../../../api/home";
import { Toast } from "vant";
export default {
  data() {
    return {
      typeVaccine: ["儿童疫苗", "新冠疫苗"],
      currentIndex: 0,
      date: "",
      childVaccine: [],
      COVIDVaccine: [],
      vaccine: [],
      active: 2,
      typeOfVaccine: [
        "卡介苗",
        "乙肝疫苗",
        "脊灰疫苗",
        "百白破疫苗",
        "麻风疫苗",
        "麻腮风疫苗",
        "乙脑减毒活疫苗",
        "甲肝减毒活疫苗",
        "白破疫苗",
        "A+C群流脑疫苗",
        "HIB疫苗",
        "五联疫苗",
        "13价肺炎疫苗",
        "流感疫苗",
        "水痘疫苗",
        "23价肺炎疫苗",
      ],
      isShow: false,
      minDate: new Date(2000, 0, 1),
      maxDate: new Date(2030, 10, 1),
      currentDate: new Date(),
    };
  },
  components: {
    NavBar,
    Left,
    Move,
  },
  created() {
    this._childVaccine();
  },
  methods: {
    isActive(item, index) {
      console.log(item, index);
      this.currentIndex = index;
    },
    // 获取疫苗数据方法
    _childVaccine() {
      console.log("我是声明周期函数");
      this.date =
        this.currentDate.getFullYear() +
        "-" +
        (this.currentDate.getMonth() + 1) +
        "-" +
        this.currentDate.getDate();
      console.log(this.date);
      reqChildVaccine(this.date).then((res) => {
        // console.log(res)
        // console.log(res.宝宝注射育苗日期实体信息)
        this.childVaccine = res.宝宝注射育苗日期实体信息;
        for (let i = 0; i < this.childVaccine.length; i++) {
          this.vaccine.push(this.childVaccine[i]);
          // console.log(this.vaccine);
        }
        console.log(this.vaccine);
      });
      console.log("1111");
    },
    confirm() {
      setTimeout(() => {
        this.isShow = true;
      }, 1500);
      Toast("正在查找相关疫苗信息");
    },
  },
};
</script>

<style lang="less" scoped>
#vaccine {
  height: 100vh;
  overflow: scroll;
  // background-color: aqua;
  .nav {
    width: 98%;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    text-align: center;

    .typeVaccine {
      flex: 1;
      font-size: large;
      border: 1px solid green;
      color: green;
    }
    .active {
      background-color: green;
      color: white;
    }
  }
  .words {
    font-size: 1.2rem;
    text-align: left;
  }
  .calendar {
    margin-top: 4%;
    background-color: rgba(113, 219, 192);
  }
  .information {
    height: 30px;
    background-color: yellowgreen;
    text-align: center;
    // line-height: 30px;
    font-size: 1.3rem;
    color: white;
  }
  .vaccineInfo {
    // height: 400px;
    // background-color: #bfa;
    background-image: url("../img/childBg4.webp");
    opacity: 0.8;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .vaccineLists {
      // height: 100px;
      // background-color: skyblue;
      border-bottom: 1px solid gray;
      display: flex;
      margin: 2% 0;
      .vaccineName {
        flex: 1;
        text-align: center;
        // line-height: 50%;
        margin-top: 15%;
      }
      .attention {
        color: white;
        flex: 1;
        margin-right: 1%;
        .Key {
          text-align: left;
          span {
            text-align: left;
          }
        }
      }
      .vaccineName2 {
        color: white;
        flex: 1;
        margin-top: 15%;
      }
      .attention2 {
        color: white;
        flex: 1;
        // margin-left: 10%;
        .Key2 {
          text-align: left;
          span {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
