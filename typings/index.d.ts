export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  vehicle: SDK.VehicleAPI;
  warning: SDK.WarningAPI;
  alert: SDK.AlertAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface VehicleAPI {
    /**
     * create snapshot
     */
    createVehicleSnapshot(
      req: CreateVehicleSnapshotRequest
    ): Promise<CreateVehicleSnapshotResponse>;
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
  export interface AlertAPI {
    /**
     * List alerts chart records
     */
    listChartAlerts(req: ListChartAlertsRequest): Promise<ListChartAlertsResponse>;
  }

  type CreateVehicleSnapshotRequest = {
    vehicleId: string;
    body: Vehicle;
  };

  type CreateVehicleSnapshotResponse = {
    body: Vehicle;
  };

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
    body: [MileageRecord];
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
    body: [EnergyConsumptionRecord];
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
    body: [Vehicle];
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
    body: [WarningsStatistics];
  };

  type ListChartAlertsRequest = {
    query: {
      limit?: string;
      offset?: string;
      select?: string;
      group?: string;

      filter: {
        vehicle?: string;
        ns: {
          $regex?: string;
        };
        line?: string;
        vehicleProducer?: string;
        vehicleModelBrief?: string;
        vehicleModel?: string;
        vehicleNo: {
          $regex?: string;
        };
        startedAt: {
          $gt?: string;
          $lt?: string;
        };
        lastAt: {
          $gt?: string;
          $lt?: string;
        };
        state?: string;
        vehicleYearsFromPlate: {
          $gt?: number;
          $lt?: number;
        };
        vehicleMileage: {
          $gt?: number;
          $lt?: number;
        };
      };
    };
  };

  type ListChartAlertsResponse = {
    body: [Alert];
  };

  type Err = {
    code: string;
    message: string;
  };
  type Alert = {
    id: string;
    startedAt: string;
    lastAt: string;
    vehicle: string;
    ns: string;
    line: string;
    code: string;
    level: number;
    name: string;
    plate: string;
    vehicleModel: string;
    vehicleModelBrief: string;
    vehicleNo: string;
    vehicleMileage: Number;
    vehicleYearsFromPlate: Number;
    state: "OPEN" | "CLOSE";
    count: number;
    level1Count: number;
    level2Count: number;
    level3Count: number;
    times: number;
    level1Times: number;
    level2Times: number;
    level3Times: number;
  };
  type Vehicle = {
    at: date;
    vin: string;
    ns: string;
    line: string;
    producer: string;
    modelBrief: string;
    no: string;
    vechiles: number;
    mileage: number;
    consumption: number;
  };
  type MileageRecord = {
    at: date;
    mileage: number;
    value: number;
  };
  type EnergyConsumptionRecord = {
    at: date;
    discharge: number;
    value: number;
  };
  type WarningsStatistics = {
    group: string;
    name: string;
    data: [undefined];
  };
}
