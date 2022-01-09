Feature('98. Выход из ЛК')

Scenario('Выход из личного кабинета', ({ I, mainPage }) => {
  I.amOnPage('/')
  I.click(mainPage.locators.sidebarUserDropdownTab)
  I.click(mainPage.locators.sidebarLogoutBtn)
  I.dontSeeElement(mainPage.locators.authenticatedLayout)
})