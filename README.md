# @36node/bus-chart-sdk

[![version][0]][1] [![downloads][2]][3]

主要负责历史数据的统计与存储。

## Install

```bash
yarn add @36node/bus-chart-sdk
```

## Usage

```js
const SDK = require("@36node/bus-chart-sdk");

const sdk = new SDK({ base: "http://localhost:3000/chart/v0", token: "secret" });
sdk.vehicle.listMileages({
      vehicleId: "xxxx",
      query: {
        filter: {
          at: {
            $gt: "2019-01-01",
            $lt: "2020-01-01",
          },
        },
      },
    });
```

For more usages, see `index.test.js`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@36node/bus-chart-sdk** © [36node](https://github.com/36node), Released under the [MIT](./LICENSE) License.

Authored and maintained by 36node with help from contributors ([list](https://github.com/36node/bus-chart-sdk-js/contributors)).

> GitHub [@36node](https://github.com/36node)

[0]: https://img.shields.io/npm/v/@36node/bus-chart-sdk.svg?style=flat
[1]: https://npmjs.com/package/@36node/bus-chart-sdk
[2]: https://img.shields.io/npm/dm/@36node/bus-chart-sdk.svg?style=flat
[3]: https://npmjs.com/package/@36node/bus-chart-sdk
