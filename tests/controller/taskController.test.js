const sinon = require("sinon");
const Task = require("../../src/models/Task");
const controller = require("../../src/controllers/taskController");

describe("Task Controller", () => {

  it("should create task", async () => {
    const req = {
      body: { title: "Test" },
      userId: "123"
    };

    const res = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub()
    };

    sinon.stub(Task, "create").resolves({ title: "Test" });

    await controller.createTask(req, res);

    sinon.assert.calledWith(res.status, 201);

    Task.create.restore();
  });

});
