import mongoose from 'mongoose';
import validator from 'validator';

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean
  },
  details: {
    description: {
      type: String,
      minlength: 10
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error('Price must be a positive number!')
        }
      }
    },
    discount: {
      type: Number,
      default: 0
    },
    imgs: {
      type: Array,
      validate(value) {
        if (value.length < 2) {
          throw new Error('images array must include at least two images');
        }
      }
    },
    phoneNumber: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ['he-IL'])) {
          throw new Error('Entered Phone Number is not valid!');
        }
      }
    },
    dateAdded: {
      type: Date,
      default: new Date()
    }
  }
});