import SDK from "./index";

const sdk = new SDK({
  base: "http://localhost:3000/chart/v0",
  token: "",
});

describe("## SDK warnings statistics", () => {
  it("must provide type", () => {
    const listMileages = () => sdk.warning.listWarningsStatistics();

    expect(listMileages).toThrow("type is required for listWarningsStatistics");
  });

  it("must provide groupKey", () => {
    const listMileages = () =>
      sdk.warning.listWarningsStatistics({ type: "alert" });

    expect(listMileages).toThrow(
      "groupKey is required for listWarningsStatistics"
    );
  });

  xit("should list records", async () => {
    const result = await sdk.warning.listWarningsStatistics({
      type: "alert",
      groupKey: "producer",
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
    const record = result.body[0];
    expect(record.group).toBeTruthy();
    expect(record.name).toBeTruthy();
    expect(record.data).toBeTruthy();
  });
});
