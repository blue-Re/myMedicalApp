<template>
  <Move>
    <div slot="Move" id="buyMedicine">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">购买药品</div>
      </NavBar>
      <!-- 顶部轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="https://img20.360buyimg.com/babel/s1980x808_jfs/t1/161395/11/13461/287863/60530560E566b9bf6/cedbc90b9f5f62f4.jpg!cc_1980x808.webp"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img10.360buyimg.com/babel/s1980x808_jfs/t1/166006/22/13005/201906/6052c048E1ac7fce9/ade869d4a0dfbdfc.jpg!cc_1980x808.webp"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img11.360buyimg.com/babel/s1980x808_jfs/t1/164174/23/13451/295499/6052f90aE50f25153/af300fee0f0e0299.jpg!cc_1980x808.webp"
            alt=""
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://img30.360buyimg.com/babel/s1980x808_jfs/t1/160377/32/16999/301016/60640cedEd2ba4786/2b92c221d66b1c80.jpg!cc_1980x808.webp"
            alt=""
          />
        </van-swipe-item>
      </van-swipe>

      <!-- 商品详情 -->
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
      />

      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>

      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['山西', '河南', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />

      <!-- 底部栏 -->
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
          @buy-clicked="onBuyClicked"
        />
      </van-goods-action>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { Toast } from "vant";

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};

export default {
  data() {
    return {
      show: false,
      areaList:['山西，河南，北京，天津'],
      searchResult: [],
      showList: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "药品种类", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "朗迪优选钙", // skuValueName：规格值名称
                imgUrl:
                  "https://img30.360buyimg.com/babel/s1980x808_jfs/t1/160377/32/16999/301016/60640cedEd2ba4786/2b92c221d66b1c80.jpg!cc_1980x808.webp", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl:
                  "https://img30.360buyimg.com/babel/s1980x808_jfs/t1/160377/32/16999/301016/60640cedEd2ba4786/2b92c221d66b1c80.jpg!cc_1980x808.webp", // 用于预览显示的规格类目图片
              },
              {
                id: "2",
                name: "复方阿胶浆",
                imgUrl:
                  "https://img20.360buyimg.com/babel/s1980x808_jfs/t1/161395/11/13461/287863/60530560E566b9bf6/cedbc90b9f5f62f4.jpg!cc_1980x808.webp",
                previewImgUrl:
                  "https://img20.360buyimg.com/babel/s1980x808_jfs/t1/161395/11/13461/287863/60530560E566b9bf6/cedbc90b9f5f62f4.jpg!cc_1980x808.webp",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img01.yzcdn.cn/1.jpg",
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "https://img01.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "xxx",
          tel: "xxx",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
      },
    };
  },
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("立即购买");
      this.show = !this.show;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    showList() {
      this.showList = !this.showList;
    },
    onSave() {
      Toast("保存成功");
    },
    onDelete() {
      Toast("删除成功");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
#buyMedicine{
  height: 100vh;
}
.my-swipe {
  padding-top: 46px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
