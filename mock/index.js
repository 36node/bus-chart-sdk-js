const {
  listMileages,
  listEnergyConsumptions,
  genChartVehicles,
  defaultVehicles,
} = require("./vehicle");
const { listWarningsStatistics } = require("./warning");
const _ = require("lodash");
const genChartAlerts = require("./alerts");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }

  // FIXME: 临时处理
  if (req.path !== "/chartVehicles") {
    delete req.query.at_gte;
    delete req.query.at_lte;
  }

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
  rewrites[`${base}/warnings/statistics/tire/producer*`] =
    "/listWarningsStatisticsTireProducer";
  rewrites[`${base}/warnings/statistics/tire/model*`] =
    "/listWarningsStatisticsTireModel";
  rewrites[`${base}/warnings/statistics/tire/company*`] =
    "/listWarningsStatisticsTireCompany";
  rewrites[`${base}/warnings/statistics/tire/line*`] =
    "/listWarningsStatisticsTireLine";
  rewrites[`${base}/warnings/statistics/pile/station*`] =
    "/listWarningsStatisticsPileStation";
  rewrites[`${base}/warnings/statistics/pile/line*`] =
    "/listWarningsStatisticsPileLine";
  rewrites[`${base}/warnings/statistics/pile/company*`] =
    "/listWarningsStatisticsPileCompany";

  rewrites[`${base}/vehicles*`] = "/chartVehicles$1";
  rewrites[`${base}/alerts*`] = "/chartAlerts$1";

  return rewrites;
};

/**
 * mock chart service
 *
 * @param {object} opts 参数
 * @param {number} opts.base 参数 base url
 */
function mock({
  base = "/chart/v0",
  vehicles = defaultVehicles,
  alertsCount = 1000,
}) {
  return {
    /**
     * mock data
     */
    db: {
      chartVehicles: genChartVehicles(vehicles),
      chartAlerts: genChartAlerts({ vehicles, count: alertsCount }),
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
      listWarningsStatisticsTireProducer: listWarningsStatistics({
        type: "tire",
        groupKey: "producer",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsTireModel: listWarningsStatistics({
        type: "tire",
        groupKey: "model",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsTireCompany: listWarningsStatistics({
        type: "tire",
        groupKey: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsTireLine: listWarningsStatistics({
        type: "tire",
        groupKey: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsPileStation: listWarningsStatistics({
        type: "pile",
        groupKey: "station",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsPileLine: listWarningsStatistics({
        type: "pile",
        groupKey: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsPileCompany: listWarningsStatistics({
        type: "pile",
        groupKey: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
    },

    /**
     * rewrite
     */
    rewrites: generateRewrites(base),

    routers: [myRouter],

    aggregations: {
      "/chartVehicles": {
        vehicles: (records = []) => _.uniqBy(records, "vin").length,
        mileage: "sum",
        consumption: "sum",
        mileageAvg: (records = []) =>
          _.sumBy(records, "mileage") / records.length / 100,
        consumptionAvg: (records = []) =>
          _.sumBy(records, "consumption") / (_.sumBy(records, "mileage") / 100),
      },
      "/chartAlerts": {
        count: (records = []) => _.sumBy(records, "count"),
        times: (records = []) => records.length,
        level1Times: (records = []) =>
          records.filter(r => r.level === 1).length,
        level2Times: (records = []) =>
          records.filter(r => r.level === 2).length,
        level3Times: (records = []) =>
          records.filter(r => r.level === 3).length,
        level1Count: (records = []) =>
          _.sumBy(records.filter(r => r.level === 1), "count"),
        level2Count: (records = []) =>
          _.sumBy(records.filter(r => r.level === 2), "count"),
        level3Count: (records = []) =>
          _.sumBy(records.filter(r => r.level === 3), "count"),
      },
    },
  };
}

module.exports = mock;
