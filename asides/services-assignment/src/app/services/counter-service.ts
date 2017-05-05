export class CounterService {
  private changeToInactiveCount = 0;
  private changeToActiveAcount = 0;

  constructor() { }

  incrementActiveCount() {
    this.changeToActiveAcount++;
    this.logCount();
  }

  incrementInactiveCount() {
    this.changeToInactiveCount++;
    this.logCount();
  }

  private logCount() {
    console.info(`Change to Active Count: ${this.changeToActiveAcount} | Change to Inactive Count: ${this.changeToInactiveCount}`);
  }
}
