import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true }
})

PlanetSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true

})

PlanetSchema.virtual('star', {
  localField: 'starId',
  foreignField: '_id',
  ref: 'Star',
  justOne: true
})
