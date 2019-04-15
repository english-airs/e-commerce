/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Product = db.model('product')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    it('GET /api/products', async () => {
      const res = await request(app)
        .get('/api/products')
        .expect(200)
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
