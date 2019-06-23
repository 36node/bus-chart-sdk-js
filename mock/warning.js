const faker = require("faker");
const moment = require("moment");
const _ = require("lodash");

const alertStatistics = ({ at_gt, at_lt, groupKey }) => {
  const days = moment(at_lt).diff(at_gt) / 1000 / 3600 / 24 + 1;
  let groups = [];
  if (groupKey === "producer") {
    groups = ["宇通", "申沃", "万象", "青年", "申龙"];
  } else if (groupKey === "model") {
    groups = ["Z0A", "Z1A", "Z2A", "Z3A", "Z4A"];
  } else if (groupKey === "company") {
    groups = [
      "上南公交/一公司",
      "上南公交/二公司",
      "上南公交/三公司",
      "杨高公交/一公司",
      "杨高公交/二公司",
      "杨高公交/三公司",
      "金高公交/一公司",
      "金高公交/二公司",
      "金高公交/三公司",
      "南汇公交/一公司",
      "南汇公交/二公司",
      "南汇公交/三公司",
    ];
  } else if (groupKey === "line") {
    groups = _.range(1, 500)
      .filter(() => Math.random() < 0.1)
      .map(i => i.toString());
  } else if (groupKey === "type") {
    groups = ["整车", "电池", "电机", "充电系统", "气泵"];
  }
  return groups.map(group => {
    const alarmData = [
      {
        name: "三级报警/已忽略",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "三级报警/处理中",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "三级报警/已完成",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "二级报警",
        value: faker.random.number({
          min: 100 * days,
          max: 400 * days,
          precision: 1,
        }),
      },
      {
        name: "一级报警",
        value: faker.random.number({
          min: 100 * days,
          max: 400 * days,
          precision: 1,
        }),
      },
    ];

    let data = alarmData;
    if (groupKey !== "type") {
      data = [
        {
          name: "新能源车辆总数",
          value: faker.random.number({
            min: 100,
            max: 400,
            precision: 1,
          }),
        },
      ].concat(alarmData);
    }

    if (groupKey === "line") {
      data = [{
        name: "部门",
        value: faker.random.arrayElement([
          "上南公交/一公司",
          "上南公交/二公司",
          "上南公交/三公司",
          "杨高公交/一公司",
          "杨高公交/二公司",
          "杨高公交/三公司",
          "金高公交/一公司",
          "金高公交/二公司",
          "金高公交/三公司",
          "南汇公交/一公司",
          "南汇公交/二公司",
          "南汇公交/三公司",
        ]),
      }].concat(data);
    }

    return {
      group: group,
      name: group,
      data: data,
    };
  });
};

const batteryStatistics = ({ at_gt, at_lt, groupKey }) => {
  const days = moment(at_lt).diff(at_gt) / 1000 / 3600 / 24 + 1;
  let groups = [];
  if (groupKey === "producer") {
    groups = ["宇通", "申沃", "万象", "青年", "申龙"];
  } else if (groupKey === "model") {
    groups = ["Z0A", "Z1A", "Z2A", "Z3A", "Z4A"];
  } else if (groupKey === "company") {
    groups = [
      "上南公交/一公司",
      "上南公交/二公司",
      "上南公交/三公司",
      "杨高公交/一公司",
      "杨高公交/二公司",
      "杨高公交/三公司",
      "金高公交/一公司",
      "金高公交/二公司",
      "金高公交/三公司",
      "南汇公交/一公司",
      "南汇公交/二公司",
      "南汇公交/三公司",
    ];
  } else if (groupKey === "line") {
    groups = _.range(1, 500)
      .filter(() => Math.random() < 0.1)
      .map(i => i.toString());
  }
  return groups.map(group => {
    const alarmData = [
      {
        name: "SoC低于30%",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "SoC低于20%",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "电池温度45°C-55°C",
        value: faker.random.number({
          min: 10 * days,
          max: 40 * days,
          precision: 1,
        }),
      },
      {
        name: "电池温度超过55°C",
        value: faker.random.number({
          min: 100 * days,
          max: 400 * days,
          precision: 1,
        }),
      },
    ];

    let data = alarmData;
    if (groupKey !== "type") {
      data = [
        {
          name: "新能源车辆总数",
          value: faker.random.number({
            min: 100,
            max: 400,
            precision: 1,
          }),
        },
      ].concat(alarmData);
    }

    if (groupKey === "line") {
      data = [
        {
          name: "部门",
          value: faker.random.arrayElement([
            "上南公交/一公司",
            "上南公交/二公司",
            "上南公交/三公司",
            "杨高公交/一公司",
            "杨高公交/二公司",
            "杨高公交/三公司",
            "金高公交/一公司",
            "金高公交/二公司",
            "金高公交/三公司",
            "南汇公交/一公司",
            "南汇公交/二公司",
            "南汇公交/三公司",
          ]),
        },
      ].concat(data);
    }

    return {
      group: group,
      name: group,
      data: data,
    };
  });
};

const listWarningsStatistics = ({ type, at_gt, at_lt, groupKey }) => {
  if (type === "alert") {
    return alertStatistics({
      at_gt,
      at_lt,
      groupKey,
    });
  } else if (type === "battery") {
    return batteryStatistics({
      at_gt,
      at_lt,
      groupKey,
    });
  } else {
    return [];
  }
};

module.exports = {
  listWarningsStatistics,
};
