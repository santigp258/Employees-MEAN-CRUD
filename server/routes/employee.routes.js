const express = require("express");
const employeeCtrl = require("../controllers/employee.controller");
const router = express.Router();

//methods definied in employee.controller
router.get("/", employeeCtrl.getEmployees);
router.post("/", employeeCtrl.createEmployee);
router.get("/:id", employeeCtrl.getEmployee);
router.put("/:id", employeeCtrl.editEmployee);
router.delete("/:id", employeeCtrl.deleteEmployee);
module.exports = router;
