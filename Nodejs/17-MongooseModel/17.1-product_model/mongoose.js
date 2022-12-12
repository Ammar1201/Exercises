import mongoose from "mongoose";
import validator from "validator";

mongoose.connect('mongodb://127.0.0.1:27017/shop', {
  useNewUrlParser: true
});

const Product = mongoose.model('Product', {
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

const product1 = new Product({
  name: 'gaming pc',
  category: 'electronics',
  isActive: true,
  details: {
    description: 'the best gaming pc you will ever see',
    price: 2500,
    imgs: ['img1', 'img2'],
    phoneNumber: '0501234567'
  }
});

const product2 = new Product({
  name: 'gaming chair',
  category: 'furniture',
  isActive: true,
  details: {
    description: 'the best gaming chair you will ever see',
    price: 1000,
    imgs: ['img1', 'img3', 'img5'],
    phoneNumber: '0507654321'
  }
});

const product3 = new Product({
  name: 'gaming headset',
  category: 'electronics',
  isActive: false,
  details: {
    description: 'the best gaming headset you will ever see',
    price: 500,
    discount: 50,
    imgs: ['img', 'img', 'img'],
    phoneNumber: '0501973256'
  }
});

product1.save().then((product) => console.log(product)).catch((error) => console.log(error));
product2.save().then((product) => console.log(product)).catch((error) => console.log(error));
product3.save().then((product) => console.log(product)).catch((error) => console.log(error));