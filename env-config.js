const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-base.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-base.herokuapp.com',
  'process.env.CLIENT_ID': 'hDp6mBS5wT8UtSTqvr6dESuUJi9TFA0k'
}
