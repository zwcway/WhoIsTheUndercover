/**
 * Created by Administrator on 15/4/20.
 */
angular.module("games.services", []).constant("BALANCETEXT", [
  "饿了么账户充值", "余额消费", "订单收入", "订单退款", "申请提现", "提现失败", "废弃", "用户提现", "支付失败退款", "三方支付消费", "合同付费", "订单取消扣款", "匿名用户提现", "匿名用户退款", "废弃", "合同退款"
]).constant("ORDERTEXT", [
  "成功下单", "有效订单", "无效订单", "点评订单", "点评食物", "兑换礼品", "系统处理", "管理员处理", "上传食物图片", "点评餐厅服务"
]).factory("Rooms", [
  "$resource",
  function ($resource) {

  }
]);