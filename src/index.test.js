import SDK from "./index";

const sdk = new SDK({
  base: "http://localhost:3000/chart/v0",
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
