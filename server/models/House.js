import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema({
  year: { type: Number },
  price: { type: Number, required: true },
  description: { type: String },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  bathrooms: { type: Number },
  bedrooms: { type: Number },
  levels: { type: Number },
  imgUrl: { type: String }
},
{ timestamps: true, toJSON: { virtuals: true } })
HouseSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
