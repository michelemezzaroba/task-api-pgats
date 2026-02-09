const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const expect = require("chai").expect;

let mongo;
let token;

describe("Task API", () => {

  before(async () => {
    mongo = await MongoMemoryServer.create();
    await mongoose.connect(mongo.getUri());

    await request(app)
      .post("/auth/register")
      .send({ email: "test@test.com", password: "123" });

    const res = await request(app)
      .post("/auth/login")
      .send({ email: "test@test.com", password: "123" });

    token = res.body.token;
  });

  it("Should create task", async () => {
    const res = await request(app)
      .post("/tasks")
      .set("Authorization", token)
      .send({ title: "Nova tarefa" });

    expect(res.status).to.equal(201);
  });

});
