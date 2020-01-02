export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  event: SDK.EventAPI;
  vehicle: SDK.VehicleAPI;
  warning: SDK.WarningAPI;
  analysis: SDK.AnalysisAPI;
  alert: SDK.AlertAPI;
  power: SDK.PowerAPI;
  banci: SDK.BanciAPI;
  exception: SDK.ExceptionAPI;
}

declare namespace SDK {
  export interface Options {
    base?: string;
    token?: string;
  }

  export interface EventAPI {
    /**
     * create event
     */
    createEvent(req: CreateEventRequest): Promise<CreateEventResponse>;
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
    /**
     * List platform tbox statistics
     */
    listPlatformStat(req: ListPlatformStatRequest): Promise<ListPlatformStatResponse>;
    /**
     * List tbox datagram statistics by vin
     */
    listDatagramStat(req: ListDatagramStatRequest): Promise<ListDatagramStatResponse>;
  }
  export interface WarningAPI {
    /**
     * List warnings statistics
     */
    listWarningsStatistics(
      req: ListWarningsStatisticsRequest
    ): Promise<ListWarningsStatisticsResponse>;
  }
  export interface AnalysisAPI {
    /**
     * List overall statistics
     */
    listOverallStatistics(
      req: ListOverallStatisticsRequest
    ): Promise<ListOverallStatisticsResponse>;
    /**
     * List alert statistics
     */
    listAlertStatistics(req: ListAlertStatisticsRequest): Promise<ListAlertStatisticsResponse>;
    /**
     * List alert rate statistics
     */
    listAlertRateStatistics(
      req: ListAlertRateStatisticsRequest
    ): Promise<ListAlertRateStatisticsResponse>;
  }
  export interface AlertAPI {
    /**
     * List alerts chart records
     */
    listChartAlerts(req: ListChartAlertsRequest): Promise<ListChartAlertsResponse>;
    /**
     * List histogram of alerts
     */
    listAlertHistogram(req: ListAlertHistogramRequest): Promise<ListAlertHistogramResponse>;
  }
  export interface PowerAPI {
    /**
     * List power statistics
     */
    listPowerStatistics(req: ListPowerStatisticsRequest): Promise<ListPowerStatisticsResponse>;
    /**
     * List power chart records
     */
    listPower(req: ListPowerRequest): Promise<ListPowerResponse>;
  }
  export interface BanciAPI {
    /**
     * List driver power statistics
     */
    listDriverPowerStatistics(
      req: ListDriverPowerStatisticsRequest
    ): Promise<ListDriverPowerStatisticsResponse>;
    /**
     * List driver power records
     */
    listDirverPower(req: ListDirverPowerRequest): Promise<ListDirverPowerResponse>;
  }
  export interface ExceptionAPI {
    /**
     * List exception statistics
     */
    listExceptionStatistics(
      req: ListExceptionStatisticsRequest
    ): Promise<ListExceptionStatisticsResponse>;
  }

  type CreateEventRequest = {
    body: Event;
  };

  type CreateEventResponse = {
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

  type ListPlatformStatRequest = {
    query: {
      filter: {
        time: {
          $gt?: string;
          $lt?: string;
        };
        interval?: string;
      };
    };
  };

  type ListPlatformStatResponse = {
    body: [PlatFormStat];
  };

  type ListDatagramStatRequest = {
    vehicleId: string;

    query: {
      filter: {
        time: {
          $gt?: string;
          $lt?: string;
        };
        interval?: string;
      };
    };
  };

  type ListDatagramStatResponse = {
    body: [DatagramRecord];
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

  type ListOverallStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListOverallStatisticsResponse = {
    body: [AnalysisStatistics];
  };

  type ListAlertStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListAlertStatisticsResponse = {
    body: [AnalysisStatistics];
  };

  type ListAlertRateStatisticsRequest = {
    query: {
      filter: {
        at: {
          $gt: string;
          $lt: string;
        };
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListAlertRateStatisticsResponse = {
    body: [AnalysisStatistics];
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

  type ListAlertHistogramRequest = {
    query: {
      group?: string;

      filter: {
        startedAt: {
          $gte: string;
          $lte: string;
        };
        interval: string;
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListAlertHistogramResponse = {
    body: [AlertHistogram];
  };

  type ListPowerStatisticsRequest = {
    query: {
      filter: {
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListPowerStatisticsResponse = {
    body: [AnalysisStatistics];
  };

  type ListPowerRequest = {
    query: {
      limit?: string;
      offset?: string;

      filter: {
        no?: string;
        ns: {
          $regex: string;
        };
        line?: string;
        producer?: string;
        modelBrief?: string;
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListPowerResponse = {
    body: [Power];
    headers: {
      xTotalCount: string;
    };
  };

  type ListDriverPowerStatisticsRequest = {
    query: {
      limit?: string;
      group: string;

      filter: {
        ns: {
          $regex: string;
        };
        order?: string;
        date: {
          $gte?: string;
          $lte?: string;
        };
      };
    };
  };

  type ListDriverPowerStatisticsResponse = {
    body: [DriverPowerStat];
  };

  type ListDirverPowerRequest = {
    query: {
      limit?: string;
      offset?: string;

      filter: {
        ns: {
          $regex: string;
        };
        line?: string;
        vehicleNo?: string;
        vehicle?: string;
        vehicleModel?: string;
        vehicleModelBrief?: string;
        vehicleModelPlate?: string;
        vehicleModelProducer?: string;
        driverName?:
          | {
              $regex: string;
            }
          | string;
        driverNo?: string;
        date: {
          $gte?: string;
          $lte?: string;
        };
      };
    };
  };

  type ListDirverPowerResponse = {
    body: [DriverPower];
    headers: {
      xTotalCount: string;
    };
  };

  type ListExceptionStatisticsRequest = {
    type: string;

    query: {
      filter: {
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListExceptionStatisticsResponse = {
    body: [AnalysisStatistics];
  };

  type Err = {
    code: string;
    message: string;
  };
  type Event = {
    flag: string;
    event: string;
    vin: string;
    ns: string;
    body: {};
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
    vehicleMileage: number;
    vehicleYearsFromPlate: number;
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
    at: string;
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
    at: string;
    mileage: number;
    value: number;
  };
  type EnergyConsumptionRecord = {
    at: string;
    discharge: number;
    value: number;
  };
  type WarningsStatistics = {
    group: string;
    name: string;
    data: [undefined];
  };
  type AnalysisStatistics = {
    name: string;
  };
  type Power = {
    at: string;
    ns: string;
    line: string;
    producer: string;
    modelBrief: string;
    no: string;
    mileage: number;
    charge: number;
    disCharge: number;
    reverse: number;
  };
  type DriverPowerStat = {
    ns: string;
    driverNo: string;
    driverName: string;
    totalMileage: number;
    totalPower: number;
  };
  type DriverPower = {
    id: string;
    date: string;
    ns: string;
    line: string;
    vehicleProducer: string;
    vehicleModel: string;
    vehiclePlate: string;
    vehicleModelBrief: string;
    vehicleNo: string;
    driverNo: string;
    driverName: string;
    banciCount: number;
    totalMileage: number;
    power: number;
  };
  type PlatFormStat = {
    platform: string;
    vehicle_count: number;
    tbox_count: number;
    histogram: [
      {
        key: string;
        count: number;
      }
    ];
  };
  type AlertHistogram = {
    key: string;
    count: number;
    histogram: [
      {
        key: string;
        count: number;
      }
    ];
  };
  type DatagramRecord = {
    key: string;
    count: number;
  };
}
