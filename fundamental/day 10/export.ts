export class FoodOrderQueue {
    private queue: string[] = [];
  
    // Add an order to the queue
    addOrder(order: string): void {
      this.queue.push(order);
      console.log(`[Log] Order "${order}" added to queue.`);
    }
  
    // Print all data in the queue
    printQueue(): void {
      console.log("[Log] Current Queue:", this.queue);
    }
  
    // Process the queue with random intervals
    async processQueue(): Promise<void> {
      while (this.queue.length > 0) {
        const order = this.queue.shift(); // Get the first order in the queue
        if (order) {
          const randomInterval = Math.floor(Math.random() * 10) + 1; // Random interval 1-10 seconds
          await this.simulateProcessing(order, randomInterval);
        }
      }
      console.log("[Log] All orders have been processed.");
    }
  
    // Simulate processing with a random interval
    private simulateProcessing(order: string, seconds: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`[Log] ${order} Done in ${seconds} seconds.`);
          resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
      });
    }
  }
  