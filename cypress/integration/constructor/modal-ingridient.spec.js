describe('service is available', () => {
  before(function () {
    cy.visit('http://localhost:3000');
  });
  it('should open cart page by default', () => {
    cy.contains('Соберите бургер');
  });
  it('show modal by click ingridient', () => {
    cy.get('a').contains('Краторная булка N-200i').click();
    cy.contains('Детали ингредиента')
      .get('[class^=modal_modal__close]')
      .click();
  });
});
