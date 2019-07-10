/**
 * Mock alerts
 */

const faker = require("faker");
const moment = require("moment");
const _ = require("lodash");
const { Faults } = require("./constants");

const genChartAlerts = ({ vehicles = [], count }) => {
  const ret = [];

  // 生成两个月的数据
  const start = moment()
    .subtract(1, "month")
    .startOf("month");
  const end = moment()
    .add(1, "day")
    .startOf("day");

  let remainCount = count;
  for (let day = moment(end); day.isAfter(start); day.subtract(1, "day")) {
    const curCount = faker.random.number({ min: 3, max: 80 });

    _.range(curCount).forEach(index => {
      const vehicle = faker.random.arrayElement(vehicles);
      const lastAt = faker.date.between(
        moment(day)
          .startOf("day")
          .toDate(),
        moment(day)
          .endOf("day")
          .toDate()
      );
      const fault = faker.random.arrayElement(Faults.filter(f => f.level));
      ret.push({
        startedAt: faker.date
          .between(
            moment(day)
              .startOf("day")
              .toDate(),
            lastAt
          )
          .toISOString(),
        lastAt: lastAt.toISOString(),
        vehicle: vehicle.id,
        ns: vehicle.ns,
        line: vehicle.line,
        name: fault.name,
        level: fault.level,
        code: `${fault.code}`,
        plate: vehicle.plate,
        vehicleModel: vehicle.model,
        vehicleModelBrief: vehicle.modelBrief,
        vehicleNo: vehicle.no,
        vehicleMileage: faker.random.number({ min: 10000, max: 30000 }),
        vehicleYearsFromPlate: vehicle.lifeYear,
        state: faker.random.arrayElement(["OPEN", "CLOSE"]),
        count: faker.random.number({ min: 1, max: 30 }),
      });
    });

    remainCount -= curCount;
    if (remainCount < 0) {
      break;
    }
  }

  return ret;
};

module.exports = genChartAlerts;
