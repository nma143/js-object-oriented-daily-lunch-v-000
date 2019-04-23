// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood
{
  constructor (name)
  {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this)
  }
}
let customerId = 0;
class Customer
{
  constructor (name, neighborhoodId)
  {
    this.id = ++customerId;
    this.neighborhoodId = neighborhoodId;
    this.name = name;
    store.customers.push(this)
  }
}
let mealId = 0;
class Meal
{
  constructor (title, price)
  {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this)
  }
}

class Delivery
{
  constructor (mealId, neighborhoodId, customerId)
  {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this)
  }
}
