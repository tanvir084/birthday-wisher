const request = require('supertest');
const mongoose = require('mongoose');
const { app, server } = require('../../server');
const { db } = require('../models');
require('dotenv').config();

const dbConnect = async () => {
  const url = process.env.MONGODB_URI;
  console.log(url);
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb Connected');
  } catch (err) {
    console.error('Error at dbConnect ::', err);
    process.exit(1);
  }
};

beforeAll(async () => {
  await dbConnect(db).catch((error) => console.error(error));
});

afterAll(async () => {
  // Close server and mongodb connnection
  await server.close();
  await mongoose.connection.close();
});

describe('Authentication API Tests', () => {
  test('POST - Register - /api/customer/register', async () => {
    const response = await request(app).post('/api/customer/register').send({});

    expect(response?.statusCode).toBe(201);
    expect(JSON.parse(response?.text)?.data?.length).toBe(5);
  });
});
