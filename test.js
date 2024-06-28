// Example 2: DIP of the above DB operation functions with decoupled dependencies
const openDatabaseConnection = () => new DB();
const processProductDetails = (product, db) => db.save(product);
const closeDatabaseConnection = (db) => db.close();

// Usage:
const product = {
  /* Product details */
};
const db = openDatabaseConnection();
const savedProduct = processProductDetails(product, db);
closeDatabaseConnection(db);
