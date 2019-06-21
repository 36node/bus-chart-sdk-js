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
        groupBy: "producer",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertModel: listWarningsStatistics({
        type: "alert",
        groupBy: "model",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertCompany: listWarningsStatistics({
        type: "alert",
        groupBy: "company",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertLine: listWarningsStatistics({
        type: "alert",
        groupBy: "line",
        at_gt: "2019-01-01",
        at_lt: "2020-01-01",
      }),
      listWarningsStatisticsAlertType: listWarningsStatistics({
        type: "alert",
        groupBy: "type",
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
