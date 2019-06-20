const { listMileages, listEnergyConsumptions } = require("./vihecle");
const { listWarningsStatistics } = require("./warning");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

/**
 * mock chart service
 *
 * @param {object} opts 参数
 * @param {number} opts.base 参数 base url
 */
function mock() {
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
    },

    /**
     * rewrite
     */
    rewrites: {
      "/vehicles/*/mileages*": "/listMileages$2",
      "/vehicles/*/energyconsumptions*": "/listEnergyConsumptions$2",
      "/warnings/statistics/alert/producer*":
        "/listWarningsStatisticsAlertProducer$1",
    },

    routers: [myRouter],
  };
}

module.exports = mock;
