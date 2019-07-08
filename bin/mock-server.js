#!/usr/bin/env node

const mockServer = require("@36node/mock-server");

const mockFun = require("../mock");

const { db = {}, rewrites = {}, routers = [], aggregations = {} } = mockFun({});

const app = mockServer({ db, rewrites, routers, aggregations });

app.listen(3000, () => {
  console.log("Mock Server is running on port 3000");
});
