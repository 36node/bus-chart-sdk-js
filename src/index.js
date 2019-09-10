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
   * vehicle's methods
   */
  vehicle = {
    /**
     * create snapshot
     *
     * @param {CreateVehicleSnapshotRequest} req createVehicleSnapshot request
     * @returns {Promise<CreateVehicleSnapshotResponse>} The snapshot created
     */
    createVehicleSnapshot: (req = {}) => {
      const { vehicleId, headers, body } = req;

      if (!vehicleId)
        throw new Error("vehicleId is required for createVehicleSnapshot");
      if (!body)
        throw new Error("requetBody is required for createVehicleSnapshot");

      return fetch(`${this.base}/vehicles/${vehicleId}/snapshot`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
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
  };
}
