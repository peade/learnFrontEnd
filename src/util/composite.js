export class Employee {
  constructor(name, dept, sal) {
    this.name = name
    this.dept = dept
    this.salary = sal
    this.subordinates = []
  }
  add(employee) {
    this.subordinates.push(employee)
  }
  remove(employee) {
    this.subordinates.splice(this.subordinates.indexOf(employee), 1)
  }
  getSubordinates() {
    return this.subordinates
  }
  toString() {
    return (
      'Employee :[ Name : ' +
      this.name +
      ', dept : ' +
      this.dept +
      ', salary :' +
      this.salary +
      ' ]'
    )
  }
}
