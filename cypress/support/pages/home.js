class Home{
   register(){
        cy.visit('/web/index.php/auth/login');
        cy.get('input[name="username"]').type(Cypress.env("CYPRESS_USERNAME"));
        cy.get('input[name="password"]').type(Cypress.env("CYPRESS_PASSWORD"));
        cy.get('.oxd-button').click();
        cy.url().should("include", "/dashboard/index");
        cy.get("h6").contains("Dashboard").should("be.visible");
    }
    
}

export const home = new Home();