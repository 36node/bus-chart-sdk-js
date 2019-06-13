const faker = require("faker");
const moment = require("moment");
const _ = require("lodash");

const listMileages = (vehicleId, { at_gt, at_lt }) => {
  const result = _.range(-500, 0)
    .map(i =>
      moment()
        .startOf("day")
        .add(i, "days")
    )
    .filter(at => at.diff(at_gt) >= 0 && at.diff(at_lt) <= 0)
    .map(at => ({
      at: at.format("YYYY-MM-DD"),
      mileage: faker.random.number({
        min: 0,
        max: 400,
        precision: 0.01,
      }),
    }));

  return result;
};

const listEnergyConsumptions = (vehicleId, { at_gt, at_lt }) => {
  const result = _.range(-500, 0)
    .map(i =>
      moment()
        .startOf("day")
        .add(i, "days")
    )
    .filter(at => at.diff(at_gt) >= 0 && at.diff(at_lt) <= 0)
    .map(at => ({
      at: at.format("YYYY-MM-DD"),
      mileage: faker.random.number({
        min: 0,
        max: 400,
        precision: 0.01,
      }),
    }));

  return result;
};

module.exports = {
  listMileages,
  listEnergyConsumptions,
};
