export const ROUTE_PATH = {
  HOME: '/',
  CART: '/cart',
}

export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:6969' : ''
// export const BASE_URL = 'http://localhost:6969/'
export const PRODUCTS_URL = '/api/products'
export const USERS_URL = '/api/users'
export const ORDERS_URL = '/api/orders'
export const PAYPAL_URL = '/api/config/paypal'