import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
    
    async getById(id) {
        const car = await dbContext.Houses.findById(id)
        if (!car) {
            throw new BadRequest('Invalid Id')
        }
    }
    
    async create(body) {
        const house = await dbContext.Houses.create(body)
        return house
    }
    edit(body) {
const original = await this.getById(update.id)
if(original.creatorId.toString() !== update.creatorId)
    }

  async getAll() {
    return await dbContext.Houses.find({});
  }
}

export const housesService = new HousesService()
