class BaseService {
  constructor(EntityBusiness) {
    this._entityBusiness = EntityBusiness;
  }

  async getAll() {
    const entities = await this._entityBusiness.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    return entity;
  }

  async create(entity) {
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this._entityBusiness.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    const deletedEntity = await this._entityBusiness.delete(id);
    return deletedEntity;
  }
}

module.exports = BaseService;
