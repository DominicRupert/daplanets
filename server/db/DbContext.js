import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from '../models/Planet.js'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Planets = mongoose.model('Planet', PlanetSchema)
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
