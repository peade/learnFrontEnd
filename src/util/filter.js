// 定义对象
export class Person {
  constructor(name, gender, maritalStatus) {
    this.name = name
    this.gender = gender
    this.maritalStatus = maritalStatus
  }
  getName() {
    return this.name
  }
  getGender() {
    return this.gender
  }
  getMaritalStatus() {
    return this.maritalStatus
  }
}

// 添加筛选条件
export class CriteriaMale {
  meetCriteria(persons) {
    const malePersons = []
    for (const person of persons) {
      if (person.getGender().toUpperCase() === 'MALE') {
        malePersons.push(person)
      }
    }
    return malePersons
  }
}

export class CriteriaFemale {
  meetCriteria(persons) {
    const femalePersons = []
    for (const person of persons) {
      if (person.getGender().toUpperCase() === 'FEMALE') {
        femalePersons.push(person)
      }
    }
    return femalePersons
  }
}

export class CriteriaSingle {
  meetCriteria(persons) {
    const singlePersons = []
    for (const person of persons) {
      if (person.getMaritalStatus().toUpperCase() == 'SINGLE') {
        singlePersons.push(person)
      }
    }
    return singlePersons
  }
}
export class AndCriteria {
  constructor(criteria, otherCriteria) {
    this.criteria = criteria
    this.otherCriteria = otherCriteria
  }
  meetCriteria(persons) {
    const firstCriteriaPersons = this.criteria.meetCriteria(persons)
    return this.otherCriteria.meetCriteria(firstCriteriaPersons)
  }
}
export class OrCriteria {
  constructor(criteria, otherCriteria) {
    this.criteria = criteria
    this.otherCriteria = otherCriteria
  }
  meetCriteria(persons) {
    const firstCriteriaItems = this.criteria.meetCriteria(persons)
    const otherCriteriaItems = this.otherCriteria.meetCriteria(persons)
    for (const person of otherCriteriaItems) {
      if (firstCriteriaItems.indexOf(person) == -1) {
        firstCriteriaItems.push(person)
      }
    }
    return firstCriteriaItems
  }
}
