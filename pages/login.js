const { I } = inject();

module.exports = {
  locators: {
    ssoLogin: { name: 'username' },
    ssoPassword: { name: 'password' },
    ssoFirstClient: '#tomsName-0',
  },
  login(email, password) {
    I.amOnPage('/')
    I.click('Да, верно')
    I.fillField(this.locators.ssoLogin, email)  
    I.fillField(this.locators.ssoPassword, password)
    I.click('Войти')
    I.waitForElement(this.locators.ssoFirstClient)
    I.click(this.locators.ssoFirstClient)
  }
}
