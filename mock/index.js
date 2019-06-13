const { listMileages, listEnergyConsumptions } = require("./vihecle");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

const generateRewrites = base => {
  const rewrites = {};
  rewrites[`${base}/vehicles/*/mileages?at_gt=*&at_lt=*`] = "/listMileages";
  rewrites[`${base}/vehicles/*/energyconsumptions?at_gt=*&at_lt=*`] =
    "/listEnergyConsumptions";
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
    },

    /**
     * rewrite
     */
    rewrites: generateRewrites(base),

    routers: [myRouter],
  };
}

module.exports = mock;
