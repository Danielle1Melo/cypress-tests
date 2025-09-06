/** eslint-disable */
/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })  

  it('deve permitir que o usuário acesse a aplicação, realize uma transação e faça logout', () => {
    cy.login('neilton@alura.com', '123456');
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.dataTest('select-opcoes').select('Transferência');
    cy.dataTest('form-input').type('100');
    cy.dataTest('realiza-transacao').click()
    cy.dataTest('lista-transacoes').find('li').last().contains('- R$ 100')
    // cy.dataTest('botao-sair').click()
    // cy.location('pathname').should('eq', '/')
  })

    it('deve permitir que o usuário acesse a aplicação, realize um depósito e faça logout', () => {
    cy.login('neilton@alura.com', '123456');
    cy.url().should('eq', 'http://localhost:3000/home');
    cy.dataTest('select-opcoes').select('Depósito');
    cy.dataTest('form-input').type('100');
    cy.dataTest('realiza-transacao').click()
    cy.dataTest('lista-transacoes').find('li').last().contains('R$ 100')
    // cy.dataTest('botao-sair').click()
    // cy.location('pathname').should('eq', '/')
  })

})  