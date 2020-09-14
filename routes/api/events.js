const express = require("express");
const router = express.Router();
const eventsController = require("../../controllers/eventsController");
const authToken = require("../../config/authToken");

// Matches with "/api/events"
router.route("/").get(eventsController.findAll);

// Matches with "/api/events/:id"
router.route("/:id").get(eventsController.findById);

router.route("/events", authToken, (req, res) => {
  eventsController.create;
  eventsController.update;
  eventsController.remove;
});

module.exports = router;
