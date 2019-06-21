import SDK from "./index";

const sdk = new SDK({
  base: "http://localhost:3050/chart/v0",
  token: "",
});

describe("## SDK vehicle mileages", () => {
  it("must provide vehicleId", () => {
    const listMileages = () => sdk.vehicle.listMileages();

    expect(listMileages).toThrow("vehicleId is required for listMileages");
  });

  it("should list records", async () => {
    const result = await sdk.vehicle.listMileages({
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

    expect(result.body.length).toBeGreaterThan(0);
    const mileageRecord = result.body[0];
    expect(mileageRecord.at).toBeTruthy();
    expect(mileageRecord.mileage).toBeGreaterThan(0);
  });
});

describe("## SDK vehicle energy consumptions", () => {
  it("must provide vehicleId", () => {
    const listEnergyConsumptions = () => sdk.vehicle.listEnergyConsumptions();

    expect(listEnergyConsumptions).toThrow(
      "vehicleId is required for listEnergyConsumptions"
    );
  });

  it("should list records", async () => {
    const result = await sdk.vehicle.listEnergyConsumptions({
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

    expect(result.body.length).toBeGreaterThan(0);
    const energyConsumptionRecord = result.body[0];
    expect(energyConsumptionRecord.at).toBeTruthy();
    expect(energyConsumptionRecord.mileage).toBeGreaterThan(0);
  });
});
