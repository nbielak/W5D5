class Clock {
  constructor() {
    this.startTime = new Date();
    this.hours = this.startTime.getHours();
    this.minutes = this.startTime.getMinutes();
    this.seconds = this.startTime.getSeconds();
    this.increment = this.increment.bind(this);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    setInterval(this.increment, 1000);
  }

  increment() {

    this.seconds ++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes ++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours ++;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    this.printTime();
  }
}
