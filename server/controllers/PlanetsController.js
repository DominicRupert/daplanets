import { Auth0Provider } from '@bcwdev/auth0provider'
import { planestService } from '../services/PlanetsService.js'
import BaseController from '../utils/BaseController.js'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('./:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planestService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const planet = await planestService.getById(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const planet = await planestService.create(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.creatorId = req.userInfo.id
    } catch (error) {

    }
  }
}
