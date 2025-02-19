const {Client} = require('../client');

/**
 * Client for the Zendesk Tags API.
 * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/}
 */
class Tags extends Client {
  constructor(options) {
    super(options);
    this.jsonAPINames = ['tags'];
  }

  /**
   * Retrieves all tags available to the user.
   * @async
   * @returns {Promise<Object[]>} A promise that resolves with the list of tags.
   * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#retrieve-all-tags}
   * @example
   * const client = createClient({...});
   * const tags = await client.tags.list();
   */
  async list() {
    return this.getAll(['tags']);
  }

  /**
   * Creates a new tag.
   * @async
   * @param {Object} tagData - Data for the new tag.
   * @param {string} tagData.name - Name of the tag.
   * @param {string} tagData.resource_type - Type of resource the tag is attached to (lead, contact, deal).
   * @returns {Promise<Object>} A promise that resolves with the created tag.
   * @throws Will throw an error if the API call fails.
   * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#create-a-tag}
   * @example
   * const client = createClient({...});
   * const newTag = await client.tags.create({ name: 'important', resource_type: 'contact' });
   */
  async create(tagData) {
    return this.post(['tags'], tagData);
  }

  /**
   * Retrieves a single tag by its ID.
   * @async
   * @param {number} id - Unique identifier of the tag.
   * @returns {Promise<Object>} A promise that resolves with the retrieved tag.
   * @throws Will throw an error if the API call fails.
   * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#retrieve-a-single-tag}
   * @example
   * const client = createClient({...});
   * const tag = await client.tags.show(5);
   */
  async show(id) {
    return this.get(['tags', id]);
  }

  /**
   * Updates a tag's information.
   * @async
   * @param {number} id - Unique identifier of the tag.
   * @param {Object} updatedData - Data to update.
   * @returns {Promise<Object>} A promise that resolves with the updated tag.
   * @throws Will throw an error if the API call fails.
   * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#update-a-tag}
   * @example
   * const client = createClient({...});
   * const updatedTag = await client.tags.update(5, { name: 'super important' });
   */
  async update(id, updatedData) {
    return this.put(['tags', id], updatedData);
  }

  /**
   * Deletes a tag by its ID.
   * @async
   * @param {number} id - Unique identifier of the tag.
   * @returns {Promise<void>} A promise that resolves when the tag has been deleted.
   * @throws Will throw an error if the API call fails.
   * @see {@link https://developer.zendesk.com/api-reference/sales-crm/resources/tags/#delete-a-tag}
   * @example
   * const client = createClient({...});
   * await client.tags.delete(1);
   */
  async delete(id) {
    return super.delete(['tags', id]);
  }
}

exports.Tags = Tags;
