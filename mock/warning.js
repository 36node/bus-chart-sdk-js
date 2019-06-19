const faker = require("faker");
const moment = require("moment");
const _ = require("lodash");

const alertStatistics = ({ at_gt, at_lt, groupBy }) => {
  if (groupBy === "producer") {
    return ["宇通", "申沃", "万象", "青年", "申龙"].map(producer => {
      return {
        group: producer,
        name: producer,
        data: [
          {
            name: "新能源车辆总数",
            count: faker.random.number({
              min: 100,
              max: 400,
              precision: 1,
            }),
          },
          {
            name: "三级报警/已忽略",
            count: faker.random.number({
              min: 10,
              max: 40,
              precision: 1,
            }),
          },
          {
            name: "三级报警/处理中",
            count: faker.random.number({
              min: 10,
              max: 40,
              precision: 1,
            }),
          },
          {
            name: "三级报警/已完成",
            count: faker.random.number({
              min: 10,
              max: 40,
              precision: 1,
            }),
          },
          {
            name: "二级报警",
            count: faker.random.number({
              min: 100,
              max: 400,
              precision: 1,
            }),
          },
          {
            name: "一级报警",
            count: faker.random.number({
              min: 100,
              max: 400,
              precision: 1,
            }),
          },
        ],
      };
    });
  } else {
    return [];
  }
};

const listWarningsStatistics = ({ type, at_gt, at_lt, groupBy }) => {
  if (type === "alert") {
    return alertStatistics({
      at_gt,
      at_lt,
      groupBy,
    });
  } else {
    return [];
  }
};

module.exports = {
  listWarningsStatistics,
};
