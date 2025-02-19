// Invitations.js: Client for the Zendesk NPS API.
const {Client} = require('../client');

class Invitations extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = ['agent activity'];
  }

  // Showing Invitations
  async list({surveyId}) {
    this.get(['nps', 'surveys', surveyId, 'invitations']);
  }

  // Showing Invitation by ID
  async show({surveyId, invitationId}) {
    this.get(['nps', 'surveys', surveyId, 'invitations', invitationId]);
  }

  /**
   * Create invitation https://developer.zendesk.com/rest_api/docs/nps-api/nps_invitations
   *
   * @param {object} params
   * @param {string} params.surveyId
   * @param {{
   *    invitation: {
   *      recipients: {
   *        name: string,
   *        email: string,
   *        language: string
   *      }[]
   *    }
   *  }} params.data
   * @param {Function} cb
   */
  async create({surveyId, data}) {
    this.post(['nps', 'surveys', surveyId, 'invitations'], data);
  }
}

exports.Invitations = Invitations;
