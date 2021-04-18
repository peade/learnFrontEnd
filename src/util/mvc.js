// 模型
class Student {
  getRollNo() {
    return this.rollNo
  }
  setRollNo(rollNo) {
    this.rollNo = rollNo
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name
  }
}
// 构建视图
export class StudentView {
  printStudentDetails(studentName, studentRollNo) {
    console.log('Student: ')
    console.log('Name: ' + studentName)
    console.log('Roll No: ' + studentRollNo)
  }
}
export class StudentController {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
  setStudentName(name) {
    this.model.setName(name)
  }
  getStudentName() {
    return this.model.getName()
  }
  setStudentRollNo(rollNo) {
    this.model.setRollNo(rollNo)
  }
  getStudentRollNo() {
    return this.model.getRollNo()
  }
  updateView() {
    this.view.printStudentDetails(this.model.getName(), this.model.getRollNo())
  }
}
export function retrieveStudentFromDatabase() {
  const student = new Student()
  student.setName('Robert')
  student.setRollNo('10')
  return student
}
