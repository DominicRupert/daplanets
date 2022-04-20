import { BadRequest } from '@bcwdev/auth0provider/lib/Errors'
import { dbContext } from '../db/DbContext.js'

class PlanetsService {
  async getAll() {
    return await dbContext.Planets.find({}).populate('creator')
  }

  async getById(id) {
    const Planet = await dbContext.Planet.findById(id).populate('creator')
    if (!planet) {
      throw new BadRequest('bad id')
    }
    return planet
  }

  async create(body) {
    const planet = await dbContext.Planets.create(body)
    await planet.populate('creator')
    return planet
  }
}

export const planestService = new PlanetsService()
