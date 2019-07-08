export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  vehicle: SDK.VehicleAPI;
  warning: SDK.WarningAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface VehicleAPI {
    /**
     * List mileage records of an vehicle
     */
    listMileages(req: ListMileagesRequest): Promise<ListMileagesResponse>;
    /**
     * List energy consumption records of an vehicle
     */
    listEnergyConsumptions(
      req: ListEnergyConsumptionsRequest
    ): Promise<ListEnergyConsumptionsResponse>;
    /**
     * List vehicles chart records
     */
    listChartVehicles(req: ListChartVehiclesRequest): Promise<ListChartVehiclesResponse>;
  }
  export interface WarningAPI {
    /**
     * List warnings statistics
     */
    listWarningsStatistics(
      req: ListWarningsStatisticsRequest
    ): Promise<ListWarningsStatisticsResponse>;
  }

  type ListMileagesRequest = {
    vehicleId: string;

    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
      };
    };
  };

  type ListMileagesResponse = {
    body: Array<MileageRecord>;
  };

  type ListEnergyConsumptionsRequest = {
    vehicleId: string;

    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
      };
    };
  };

  type ListEnergyConsumptionsResponse = {
    body: Array<EnergyConsumptionRecord>;
  };

  type ListChartVehiclesRequest = {
    query: {
      limit?: string;
      offset?: string;
      select?: string;
      group?: string;

      filter: {
        vin?: string;
        ns: {
          $regex?: string;
        };
        line?: string;
        producer?: string;
        modelBrief?: string;
        at: {
          $gt: string;
          $lt: string;
        };
      };
    };
  };

  type ListChartVehiclesResponse = {
    body: Array<Vehicle>;
  };

  type ListWarningsStatisticsRequest = {
    type: string;
    groupKey: string;

    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
      };
    };
  };

  type ListWarningsStatisticsResponse = {
    body: Array<WarningsStatistics>;
  };

  type Err = {
    code: string;
    message: string;
  };

  type Vehicle = {
    at: date;
    vin: string;
    ns: string;
    line: string;
    producer: string;
    modelBrief: string;
    vechiles: number;
    mileage: number;
    consumption: number;
  };

  type MileageRecord = {
    at: date;
    mileage: number;
  };

  type EnergyConsumptionRecord = {
    at: date;
    mileage: number;
  };

  type WarningsStatistics = {
    group: string;
    name: string;
    data: Array<undefined>;
  };
}
