import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * event's methods
   */
  event = {
    /**
     * create event
     *
     * @param {CreateEventRequest} req createEvent request
     * @returns {Promise<CreateEventResponse>} The snapshot created
     */
    createEvent: (req = {}) => {
      const { headers, body } = req;

      if (!body) throw new Error("requetBody is required for createEvent");

      return fetch(`${this.base}/events`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * vehicle's methods
   */
  vehicle = {
    /**
     * List mileage records of an vehicle
     *
     * @param {ListMileagesRequest} req listMileages request
     * @returns {Promise<ListMileagesResponse>} A paged array of mileage records
     */
    listMileages: (req = {}) => {
      const { vehicleId, query, headers } = req;

      if (!vehicleId) throw new Error("vehicleId is required for listMileages");
      if (!query) throw new Error("query is required for vehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}/mileages`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List energy consumption records of an vehicle
     *
     * @param {ListEnergyConsumptionsRequest} req listEnergyConsumptions request
     * @returns {Promise<ListEnergyConsumptionsResponse>} A paged array of energy consumption records
     */
    listEnergyConsumptions: (req = {}) => {
      const { vehicleId, query, headers } = req;

      if (!vehicleId)
        throw new Error("vehicleId is required for listEnergyConsumptions");
      if (!query) throw new Error("query is required for vehicle");

      return fetch(`${this.base}/vehicles/${vehicleId}/energyconsumptions`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List vehicles chart records
     *
     * @param {ListChartVehiclesRequest} req listChartVehicles request
     * @returns {Promise<ListChartVehiclesResponse>} An array of chart vehicle records
     */
    listChartVehicles: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for vehicle");

      return fetch(`${this.base}/vehicles`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List platform tbox statistics
     *
     * @param {ListPlatformStatRequest} req listPlatformStat request
     * @returns {Promise<ListPlatformStatResponse>} An array of platform stat
     */
    listPlatformStat: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/platform/statistics`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List tbox datagram statistics by vin
     *
     * @param {ListDatagramStatRequest} req listDatagramStat request
     * @returns {Promise<ListDatagramStatResponse>} An array of datagram stat
     */
    listDatagramStat: (req = {}) => {
      const { vehicleId, query, headers } = req;

      if (!vehicleId)
        throw new Error("vehicleId is required for listDatagramStat");

      return fetch(`${this.base}/datagram/statistics/${vehicleId}`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List vehicle chargings histogram
     *
     * @param {ListVehicleChargingHistogramRequest} req listVehicleChargingHistogram request
     * @returns {Promise<ListVehicleChargingHistogramResponse>} An array of chargings histogram
     */
    listVehicleChargingHistogram: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for vehicle");

      return fetch(`${this.base}/vehicle-chargings/histogram`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * warning's methods
   */
  warning = {
    /**
     * List warnings statistics
     *
     * @param {ListWarningsStatisticsRequest} req listWarningsStatistics request
     * @returns {Promise<ListWarningsStatisticsResponse>} An array of warning statistics
     */
    listWarningsStatistics: (req = {}) => {
      const { type, groupKey, query, headers } = req;

      if (!type) throw new Error("type is required for listWarningsStatistics");
      if (!groupKey)
        throw new Error("groupKey is required for listWarningsStatistics");
      if (!query) throw new Error("query is required for warning");

      return fetch(`${this.base}/warnings/statistics/${type}/${groupKey}`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * analysis's methods
   */
  analysis = {
    /**
     * List overall statistics
     *
     * @param {ListOverallStatisticsRequest} req listOverallStatistics request
     * @returns {Promise<ListOverallStatisticsResponse>} An array of overall statistics
     */
    listOverallStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for analysis");

      return fetch(`${this.base}/analysis/overall`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List alert statistics
     *
     * @param {ListAlertStatisticsRequest} req listAlertStatistics request
     * @returns {Promise<ListAlertStatisticsResponse>} An array of alert statistics
     */
    listAlertStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for analysis");

      return fetch(`${this.base}/analysis/alerts`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List alert rate statistics
     *
     * @param {ListAlertRateStatisticsRequest} req listAlertRateStatistics request
     * @returns {Promise<ListAlertRateStatisticsResponse>} An array of alert rate statistics
     */
    listAlertRateStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for analysis");

      return fetch(`${this.base}/analysis/alert-rate`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * alert's methods
   */
  alert = {
    /**
     * List alerts chart records
     *
     * @param {ListChartAlertsRequest} req listChartAlerts request
     * @returns {Promise<ListChartAlertsResponse>} An array of chart alert records
     */
    listChartAlerts: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/alerts`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List histogram of alerts
     *
     * @param {ListAlertHistogramRequest} req listAlertHistogram request
     * @returns {Promise<ListAlertHistogramResponse>} An array of alerts histogram
     */
    listAlertHistogram: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for alert");

      return fetch(`${this.base}/alert/histogram`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * power's methods
   */
  power = {
    /**
     * List power statistics
     *
     * @param {ListPowerStatisticsRequest} req listPowerStatistics request
     * @returns {Promise<ListPowerStatisticsResponse>} An array of chart power records
     */
    listPowerStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for power");

      return fetch(`${this.base}/power/statistics`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List power chart records
     *
     * @param {ListPowerRequest} req listPower request
     * @returns {Promise<ListPowerResponse>} An array of chart power records
     */
    listPower: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for power");

      return fetch(`${this.base}/power`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * banci's methods
   */
  banci = {
    /**
     * List driver power statistics
     *
     * @param {ListDriverPowerStatisticsRequest} req listDriverPowerStatistics request
     * @returns {Promise<ListDriverPowerStatisticsResponse>} An array of chart power records
     */
    listDriverPowerStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for banci");

      return fetch(`${this.base}/driver-power/statistics`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List driver power records
     *
     * @param {ListDirverPowerRequest} req listDirverPower request
     * @returns {Promise<ListDirverPowerResponse>} An array of driver power records
     */
    listDirverPower: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for banci");

      return fetch(`${this.base}/driver-power`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * exception's methods
   */
  exception = {
    /**
     * List exception statistics
     *
     * @param {ListExceptionStatisticsRequest} req listExceptionStatistics request
     * @returns {Promise<ListExceptionStatisticsResponse>} An array of chart exception records
     */
    listExceptionStatistics: (req = {}) => {
      const { type, query, headers } = req;

      if (!type)
        throw new Error("type is required for listExceptionStatistics");
      if (!query) throw new Error("query is required for exception");

      return fetch(`${this.base}/exception/statistics/${type}`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * chargeorder's methods
   */
  chargeorder = {
    /**
     * List charge order statistics
     *
     * @param {ListChargeOrderStatisticsRequest} req listChargeOrderStatistics request
     * @returns {Promise<ListChargeOrderStatisticsResponse>} An array of chart charge order records
     */
    listChargeOrderStatistics: (req = {}) => {
      const { query, headers } = req;

      if (!query) throw new Error("query is required for chargeorder");

      return fetch(`${this.base}/chargeorder/statistics`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
  /**
   * screen's methods
   */
  screen = {
    /**
     * Get Caobaolu Screen Energy Data
     *
     * @param {GetCaobaoluEnergyRequest} req getCaobaoluEnergy request
     * @returns {Promise<GetCaobaoluEnergyResponse>} The snapshot created
     */
    getCaobaoluEnergy: (req = {}) => {
      const { query, headers } = req;

      return fetch(`${this.base}/screen/caobaolu/energy`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get Caobaolu Screen Battery Data
     *
     * @param {GetCaobaoluBatteryRequest} req getCaobaoluBattery request
     * @returns {Promise<GetCaobaoluBatteryResponse>} The snapshot created
     */
    getCaobaoluBattery: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/screen/caobaolu/battery`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get Caobaolu Screen Engergy Save Data
     *
     * @param {GetCaobaoluSaveRequest} req getCaobaoluSave request
     * @returns {Promise<GetCaobaoluSaveResponse>} The snapshot created
     */
    getCaobaoluSave: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/screen/caobaolu/save`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * Get Caobaolu Screen Mileage Data
     *
     * @param {GetCaobaoluMileageRequest} req getCaobaoluMileage request
     * @returns {Promise<GetCaobaoluMileageResponse>} The snapshot created
     */
    getCaobaoluMileage: (req = {}) => {
      const { headers } = req;

      return fetch(`${this.base}/screen/caobaolu/mileage`, {
        method: "GET",
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
