/** eslint-disable */
/// <reference types="cypress" />

describe('Home Page', () => {
  let authToken;
  let saldo;
  let transacoes;
  let ultimaTransacao;

  beforeEach(() => {
    cy.visit('/')
    cy.login('neilton@alura.com', '123456')
    cy.url().should('eq', 'http://localhost:3000/home')
    let saldoInicial = null
  })  

  it('Deve retornar token de autenticacao da api usando cy.request', () => {
    cy.request({method:'POST', url: 'http://localhost:8000/public/login', body: {
      email: "neilton@alura.com",
      senha: "123456"
    }}).then((response) => {
    authToken = response.body.access_token;
    expect(authToken).is.not.null
  })
  })

    it('Deve retornar token de autenticacao da api usando cy.request', () => {
    cy.request({
      method:'GET', 
      url: 'http://localhost:8000/saldo', 
      headers: {
          'Authorizaiton': `Bearer ${authToken}`
      }
    }).then((response) => {
    expect(response.body).is.not.null
    expect(response.status).to.eq(200)
    saldo = response.body;
    console.log(saldo.valor)
  })
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