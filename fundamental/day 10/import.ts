import { FoodOrderQueue } from "./export-";

// Initialize the queue
const foodOrderQueue = new FoodOrderQueue();

// Add orders to the queue
foodOrderQueue.addOrder("Queue 1");
foodOrderQueue.addOrder("Queue 2");
foodOrderQueue.addOrder("Queue 3");
foodOrderQueue.addOrder("Queue 4");

// Print all orders in the queue
foodOrderQueue.printQueue();

// Process the queue
foodOrderQueue.processQueue();
