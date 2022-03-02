/* eslint-disable testing-library/await-async-utils */
/* eslint-disable cypress/no-unnecessary-waiting */
const dnd = (name) => {
  cy.contains(name)
    .trigger('dragstart')
    .trigger('dragenter')
    .trigger('dragleave');
  cy.get('[class^=burger-constructor_wrapper]').trigger('drop');
};

describe('service is available', () => {
  before(() => {
    cy.visit('/');
  });
  it('should open cart page by default', () => {
    cy.contains('Соберите бургер');
  });

  it('show place an order', () => {
    dnd('Флюоресцентная булка R2-D3');
    dnd('Соус Spicy-X');
    dnd('Соус с шипами Антарианского плоскоходца');
    cy.contains('Оформить заказ').click();
    cy.get('input[type="text"]')
      .type('vanich7@mail.ru')
      .should('have.value', 'vanich7@mail.ru');
    cy.get('input[type="password"]')
      .type('123456789')
      .should('have.value', '123456789');
    cy.contains('Войти').click();
    cy.contains('Оформить заказ').click();
    cy.wait(17000);
    cy.contains('Индикатор заказа');
    cy.get('[class^=modal_modal__close]').click();
    cy.contains(
      'Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа'
    );
  });

  it('delete ingridient', () => {
    dnd('Соус Spicy-X');
    cy.get('[class^=burger-constructor_wrapper]')
      .contains('Соус Spicy-X')
      .get('.constructor-element__action')
      .click();
    cy.contains(
      'Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа'
    );
  });
});
