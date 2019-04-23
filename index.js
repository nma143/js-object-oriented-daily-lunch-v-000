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
  constructor (name, neighborhood)
  {
    this.id = ++customerId;
    this.neighborhoodId = neighborhood.id;
    this.name = name;
    store.customers.push(this)
  }
}
let mealId = 0;
class Meal
{
  constructor (name, neighborhood)
  {
    this.id = ++mealId;
    this.neighborhoodId = neighborhood.id;
    this.name = name;
    store.customers.push(this)
  }
}