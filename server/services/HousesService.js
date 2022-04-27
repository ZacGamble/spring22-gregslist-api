import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class HousesService {
  async remove(id) {
    const deletedHouse = await dbContext.Houses.findByIdAndDelete(id)
    return deletedHouse
  }

  async getById(id) {
    const car = await dbContext.Houses.findById(id)
    if (!car) {
      throw new BadRequest('Invalid Id')
    }
    return car
  }

  async create(body) {
    const house = await dbContext.Houses.create(body)
    return house
  }

  async edit(update) {
    const original = await this.getById(update.id)
    if (original.creatorId.toString() !== update.creatorId) {
      throw new Forbidden('Invalid access')
    }
    original.year = update.year || original.year
  }

  async getAll() {
    return await dbContext.Houses.find({})
  }
}

export const housesService = new HousesService()
