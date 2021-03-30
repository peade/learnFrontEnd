export class Middleman {
  constructor(tenant, landord) {
    this.tenant = tenant
    this.landord = landord
  }
  sendLandloard(money) {
    this.tenant.money -= money
    this.landord.moeney += money
    console.log(
      `Now: ${this.tenant.name} have $${this.tenant.money}` +
        `,${this.landlord.name} have $${this.landlord.money}`
    )
  }
  sendTenant(money) {
    this.landlord.money -= money
    this.tenant.money += money
    console.log(
      `Now: ${this.tenant.name} have $${this.tenant.money}` +
        `,${this.landlord.name} have $${this.landlord.money}`
    )
  }
}

// 租客
export class Tenant {
  constructor(name, money) {
    this.name = name
    this.money = money
    console.log(`${name} have $${money}`)
  }
  payDeposit(money, middleman) {
    console.log(`${this.name} pay $${money} deposit`)
    middleman.sendLandlord(money)
  }
  payRent(money, middleman) {
    console.log(`${this.name} pay $${money} for rent`)
    middleman.sendLandlord(money)
  }
}

// 房东
export class Landlord {
  constructor(name, money) {
    this.name = name
    this.money = money
    console.log(`${name} have $${money}`)
  }
  refundDeposit(money, middleman) {
    console.log(`${this.name} refund $${money} deposit`)
    middleman.sendTenant(money)
  }
}
