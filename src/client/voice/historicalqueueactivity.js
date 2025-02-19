// HistoricalQueueActivity.js: Client for the zendesk API.
const {Client} = require('../client');

class HistoricalQueueActivity extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = [
      'historical_queue_activity',
      'historical_queue_activities',
    ];
  }

  // Showing HistoricalQueueActivity
  async show() {
    return this.get(['stats', 'historical_queue_activity']);
  }
}

exports.HistoricalQueueActivity = HistoricalQueueActivity;
