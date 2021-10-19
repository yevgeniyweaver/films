
let machine = {
  sfera: 1
}
let auto = {
  speed: 180,
  mark: 'Toyota',
  __proto__: machine,
}
let reno = {
  mark: 'Renault',
}
let user = {
  name: "John",
  surname: "Smith",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
    console.log(value.split(" "))
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};
user.fullName = 'Vasia Pupkin';
console.log(user.name)
console.log(user.surname)

reno.__proto__ = auto;
console.log(reno.mark)
console.log(reno.speed)
console.log(reno.sfera)
