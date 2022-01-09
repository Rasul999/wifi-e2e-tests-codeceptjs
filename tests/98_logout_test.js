Feature('98. Выход из ЛК')

Scenario('Выход из личного кабинета', ({ I, loginPage }) => {
  I.amOnPage('/')
  I.click(loginPage.locators.sidebarUserDropdownTab)
  I.click(loginPage.locators.sidebarLogoutBtn)
  I.dontSeeElement(loginPage.locators.authenticatedLayout)
})