
const obj = {
  name: 'hello',
  getName() {
    console.log(this.name);
  },
  getName1Sec() {
    setTimeout(this.getName.bind(this), 1000);
  }
}

obj.getName();

obj.getName1Sec();