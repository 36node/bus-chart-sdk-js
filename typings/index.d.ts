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
  chargeorder: SDK.ChargeorderAPI;
  screen: SDK.ScreenAPI;
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
    /**
     * List vehicle chargings histogram
     */
    listVehicleChargingHistogram(
      req: ListVehicleChargingHistogramRequest
    ): Promise<ListVehicleChargingHistogramResponse>;
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
     * List all alerts statistics
     */
    listAllAlertsStatistics(
      req: ListAllAlertsStatisticsRequest
    ): Promise<ListAllAlertsStatisticsResponse>;
    /**
     * List alert rate statistics
     */
    listAlertRateStatistics(
      req: ListAlertRateStatisticsRequest
    ): Promise<ListAlertRateStatisticsResponse>;
    /**
     * List alert drill down statistics
     */
    listAlertDrillDownStatistics(
      req: ListAlertDrillDownStatisticsRequest
    ): Promise<ListAlertDrillDownStatisticsResponse>;
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
     * List power aggregations
     */
    listPowerAggregations(
      req: ListPowerAggregationsRequest
    ): Promise<ListPowerAggregationsResponse>;
    /**
     * List power chart records
     */
    listPower(req: ListPowerRequest): Promise<ListPowerResponse>;
    /**
     * List power screen statistics
     */
    listPowerScreenStatistics(
      req: ListPowerScreenStatisticsRequest
    ): Promise<ListPowerScreenStatisticsResponse>;
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
    /**
     * List drviver power aggregations
     */
    listDriverPowerAggregations(
      req: ListDriverPowerAggregationsRequest
    ): Promise<ListDriverPowerAggregationsResponse>;
  }
  export interface ExceptionAPI {
    /**
     * List exception statistics
     */
    listExceptionStatistics(
      req: ListExceptionStatisticsRequest
    ): Promise<ListExceptionStatisticsResponse>;
  }
  export interface ChargeorderAPI {
    /**
     * List charge order statistics
     */
    listChargeOrderStatistics(
      req: ListChargeOrderStatisticsRequest
    ): Promise<ListChargeOrderStatisticsResponse>;
  }
  export interface ScreenAPI {
    /**
     * Get Caobaolu Screen Energy Data
     */
    getCaobaoluEnergy(req: GetCaobaoluEnergyRequest): Promise<GetCaobaoluEnergyResponse>;
    /**
     * Get Caobaolu Screen Battery Data
     */
    getCaobaoluBattery(req: GetCaobaoluBatteryRequest): Promise<GetCaobaoluBatteryResponse>;
    /**
     * Get Caobaolu Screen Engergy Save Data
     */
    getCaobaoluSave(req: GetCaobaoluSaveRequest): Promise<GetCaobaoluSaveResponse>;
    /**
     * Get Caobaolu Screen Mileage Data
     */
    getCaobaoluMileage(req: GetCaobaoluMileageRequest): Promise<GetCaobaoluMileageResponse>;
    /**
     * Get Caobaolu Screen Air Data
     */
    getCaobaoluAir(req: GetCaobaoluAirRequest): Promise<GetCaobaoluAirResponse>;
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

  type ListVehicleChargingHistogramRequest = {
    query: {
      filter: {
        ns: {
          $regex: string;
        };
        at: {
          $gte: string;
          $lte: string;
        };
      };
    };
  };

  type ListVehicleChargingHistogramResponse = {
    body: [
      {
        code: string;
        message: string;
      }
    ];
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

  type ListAllAlertsStatisticsRequest = {
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

  type ListAllAlertsStatisticsResponse = {
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

  type ListAlertDrillDownStatisticsRequest = {
    query: {
      filter: {
        group: string;
        type: string;
        ns: {
          $regex: string;
        };
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListAlertDrillDownStatisticsResponse = {
    body: [AlertDrillDown];
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

  type ListPowerAggregationsRequest = {
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
          $gt: string;
          $lt: string;
        };
      };
    };
  };

  type ListPowerAggregationsResponse = {
    body: [PowerAggregation];
    headers: {
      xTotalCount: string;
    };
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

  type ListPowerScreenStatisticsRequest = {
    query: {
      filter: {
        ns: {
          $regex: string;
        };
      };
    };
  };

  type ListPowerScreenStatisticsResponse = {
    body: [AnalysisStatistics];
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

  type ListDriverPowerAggregationsRequest = {
    query: {
      limit?: string;
      offset?: string;
      sort?: string;

      filter: {
        ns: {
          $regex: string;
        };
        driverName: {
          $regex?: string;
        };
        driverNo?: string;
        date: {
          $gte: string;
          $lte: string;
        };
      };
    };
  };

  type ListDriverPowerAggregationsResponse = {
    body: [DriverPowerAggregation];
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

  type ListChargeOrderStatisticsRequest = {
    query: {
      filter: {
        ns: {
          $regex: string;
        };
        time: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListChargeOrderStatisticsResponse = {
    body: [ChargeOrderStat];
  };

  type GetCaobaoluEnergyRequest = {
    query: {
      filter: {
        ns: {
          $regex?: string;
        };
      };
    };
  };

  type GetCaobaoluEnergyResponse = {
    body: ScreenCaobaoluEnergy;
  };

  type GetCaobaoluBatteryRequest = {
    query: {
      filter: {
        ns: {
          $regex?: string;
        };
      };
    };
  };

  type GetCaobaoluBatteryResponse = {
    body: ScreenCaobaoluBattery;
  };

  type GetCaobaoluSaveRequest = {
    query: {
      filter: {
        ns: {
          $regex?: string;
        };
      };
    };
  };

  type GetCaobaoluSaveResponse = {
    body: ScreenCaobaoluSave;
  };

  type GetCaobaoluMileageRequest = {
    query: {
      filter: {
        ns: {
          $regex?: string;
        };
      };
    };
  };

  type GetCaobaoluMileageResponse = {
    body: ScreenCaobaoluMileage;
  };

  type GetCaobaoluAirRequest = {
    query: {
      filter: {
        ns: {
          $regex: string;
        };
      };
    };
  };

  type GetCaobaoluAirResponse = {
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
  type PowerAggregation = {
    key: string;
    count: string;
    totalCharge: number;
    totalDisCharge: number;
    totalMileage: number;
    per100Mileage: number;
  };
  type DriverPowerAggregation = {
    id: string;
    driverName: string;
    count: string;
    startDate: string;
    endDate: string;
    ns: [string];
    totalPower: number;
    totalMileage: number;
    powerPer100: number;
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
  type ChargeOrderStat = {
    key: string;
    total: number;
    peak: number;
    valley: number;
    flat: number;
    sharp: number;
  };
  type ScreenCaobaoluEnergy = {
    totalEnergy: number;
    energyPer100: number;
  };
  type ScreenCaobaoluBattery = {
    averageBatteryLife: number;
  };
  type ScreenCaobaoluSave = {
    totalCO2: number;
    totalNOX: number;
  };
  type ScreenCaobaoluMileage = {
    todayTotalMileage: number;
    averageYearMileage: number;
  };
  type AlertDrillDown = {
    key: string;
    count: number;
  };
}
