Feature('1. Авторизация')

Scenario('SSO авторизация в личном кабинете', ({ I, loginPage }) => {
  loginPage.login(process.env.EMAIL, process.env.PASSWORD)
  I.seeElement(locators.authenticatedLayout)
})
Scenario('Просмотр правил пользования', ({ I, loginPage }) => {
  I.amOnPage('/audiences')
  I.click(loginPage.locators.sidebarUserDropdownTab)
  I.click(loginPage.locators.sidebarRulesBtn)
  I.waitForElement(locators.modalContent)
  I.see('Настоящий документ определяет правила, обязательные для Клиента при пользовании услугой')
})
Scenario('Просмотр оферты', ({ I }) => {
  I.amOnPage('/audiences')
  I.click(loginPage.locators.sidebarUserDropdownTab)
  I.click(loginPage.locators.sidebarOfferBtn)
  I.waitForElement(loginPage.locators.modalContent)
  I.see('Оферта (предложение заключить договор) на использование Услуги «Рекламная рассылка Дом.ru Бизнес»')
})
Scenario('Просмотр оферты радара', ({ I }) => {
  I.amOnPage('/audiences')
  I.click(loginPage.locators.sidebarUserDropdownTab)
  I.click(loginPage.locators.sidebarRadarOfferBtn)
  I.waitForElement(loginPage.locators.modalContent)
  I.see('Оферта (предложение заключить договор) на использование Услуги «Wi-Fi Радар Дом.ru Бизнес»')
})
