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
  constructor (name)
  {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this)
  }
}

