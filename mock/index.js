const { listMileages, listEnergyConsumptions } = require("./vihecle");
const { listWarningsStatistics } = require("./warning");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

const generateRewrites = base => {
  const rewrites = {};
  rewrites[`${base}/vehicles/*/mileages*`] = "/listMileages";
  rewrites[`${base}/vehicles/*/energyconsumptions*`] =
    "/listEnergyConsumptions";
  rewrites[`${base}/warnings/statistics/alert/producer*`] =
    "/listWarningsStatisticsAlertProducer";
  rewrites[`${base}/warnings/statistics/alert/model*`] =
    "/listWarningsStatisticsAlertModel";
  rewrites[`${base}/warnings/statistics/alert/company*`] =
    "/listWarningsStatisticsAlertCompany";
  rewrites[`${base}/warnings/statistics/alert/line*`] =
    "/listWarningsStatisticsAlertLine";
  rewrites[`${base}/warnings/statistics/alert/type*`] =
    "/listWarningsStatisticsAlertType";
  rewrites[`${base}/warnings/statistics/battery/producer*`] =
    "/listWarningsStatisticsBatteryProducer";
  rewrites[`${base}/warnings/statistics/battery/model*`] =
    "/listWarningsStatisticsBatteryModel";
  rewrites[`${base}/warnings/statistics/battery/company*`] =
    "/listWarningsStatisticsBatteryCompany";
  rewrites[`${base}/warnings/statistics/battery/line*`] =
    "/listWarningsStatisticsBatteryLine";
  rewrites[`${base}/warnings/statistics/insulation/producer*`] =
    "/listWarningsStatisticsInsulationProducer";
  rewrites[`${base}/warnings/statistics/insulation/model*`] =
    "/listWarningsStatisticsInsulationModel";
  rewrites[`${base}/warnings/statistics/insulation/company*`] =
    "/listWarningsStatisticsInsulationCompany";
  rewrites[`${base}/warnings/statistics/insulation/line*`] =
    "/listWarningsStatisticsInsulationLine";
  return rewrites;
};

/**
 * mock chart service
 *
 * @param {object} opts 参数
 * @param {number} opts.base 参数 base url
 */
function mock({ base = "/chart/v0" }) {
  return {
    /**
     * mock data
     */
    db: {
      listMileages: listMileages("xxxx", {
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listEnergyConsumptions: listEnergyConsumptions("xxxx", {
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertProducer: listWarningsStatistics({
        type: "alert",
        groupKey: "producer",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertModel: listWarningsStatistics({
        type: "alert",
        groupKey: "model",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertCompany: listWarningsStatistics({
        type: "alert",
        groupKey: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertLine: listWarningsStatistics({
        type: "alert",
        groupKey: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertType: listWarningsStatistics({
        type: "alert",
        groupKey: "type",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsBatteryProducer: listWarningsStatistics({
        type: "battery",
        groupKey: "producer",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsBatteryModel: listWarningsStatistics({
        type: "battery",
        groupKey: "model",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsBatteryCompany: listWarningsStatistics({
        type: "battery",
        groupKey: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsBatteryLine: listWarningsStatistics({
        type: "battery",
        groupKey: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsInsulationProducer: listWarningsStatistics({
        type: "insulation",
        groupKey: "producer",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsInsulationModel: listWarningsStatistics({
        type: "insulation",
        groupKey: "model",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsInsulationCompany: listWarningsStatistics({
        type: "insulation",
        groupKey: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsInsulationLine: listWarningsStatistics({
        type: "insulation",
        groupKey: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
    },

    /**
     * rewrite
     */
    rewrites: generateRewrites(base),

    routers: [myRouter],
  };
}

module.exports = mock;
