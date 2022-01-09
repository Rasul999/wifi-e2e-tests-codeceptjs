Feature('1. Авторизация')

Scenario('SSO авторизация в личном кабинете', ({ I, loginPage, mainPage }) => {
  loginPage.login(process.env.EMAIL, process.env.PASSWORD)
  I.seeElement(mainPage.locators.authenticatedLayout)
})
Scenario('Просмотр правил пользования', ({ I, mainPage }) => {
  I.amOnPage('/audiences')
  I.click(mainPage.locators.sidebarUserDropdownTab)
  I.click(mainPage.locators.sidebarRulesBtn)
  I.waitForElement(mainPage.locators.modalContent)
  I.see('Настоящий документ определяет правила, обязательные для Клиента при пользовании услугой')
})
Scenario('Просмотр оферты', ({ I, mainPage }) => {
  I.amOnPage('/audiences')
  I.click(mainPage.locators.sidebarUserDropdownTab)
  I.click(mainPage.locators.sidebarOfferBtn)
  I.waitForElement(mainPage.locators.modalContent)
  I.see('Оферта (предложение заключить договор) на использование Услуги «Рекламная рассылка Дом.ru Бизнес»')
})
Scenario('Просмотр оферты радара', ({ I, mainPage }) => {
  I.amOnPage('/audiences')
  I.click(mainPage.locators.sidebarUserDropdownTab)
  I.click(mainPage.locators.sidebarRadarOfferBtn)
  I.waitForElement(mainPage.locators.modalContent)
  I.see('Оферта (предложение заключить договор) на использование Услуги «Wi-Fi Радар Дом.ru Бизнес»')
})
