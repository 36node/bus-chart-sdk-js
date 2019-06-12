export = SDK;

declare class SDK {
  constructor(opts?: SDK.Options);

  base: string;
  token: string;
  auth: string;

  vehicle: SDK.VehicleAPI;
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
  }

  type ListMileagesRequest = {
    vehicleId: string;

    query: {
      filter: {
        at: {
          $gt?: string;
          $lt?: string;
        };
      };
    };
  };

  type ListMileagesResponse = {
    body: Array<MileageRecord>;
  };

  type Err = {
    code: string;
    message: string;
  };

  type MileageRecord = {
    at: date;
    mileage: number;
  };
}
