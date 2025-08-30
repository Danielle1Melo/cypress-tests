/** eslint-disable */
/// <reference types="cypress" />
import {faker} from "@faker-js/faker"

describe("Register form", () => {

  beforeEach(() => {
    cy.visit('/')
    cy.dataTest('botao-cadastro').click();
  })  

    it("Deve renderizar o título do formulário", () => {
        cy.contains("p", 'Preencha os campos abaixo para criar sua conta corrente!').should('be.visible')
    })

    it("Deve renderizar os campos do formulário", () => {
        cy.dataTest('nome-input').should('be.visible');
        cy.dataTest('email-input').should('be.visible');
        cy.dataTest('senha-input').should('be.visible');
    })

    it("Deve renderizar os campos do formulário", () => {
        const name = faker.person.fullName()
        const email = faker.internet.email()
        cy.dataTest('nome-input').type(name);
        cy.dataTest('email-input').type(email);
        cy.dataTest('senha-input').type('1234');
        cy.dataTest('checkbox-input').click()
        cy.dataTest('botao-enviar').click()
        cy.dataTest('mensagem-sucesso').should('be.visible')
    })
})