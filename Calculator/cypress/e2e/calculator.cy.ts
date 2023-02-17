// https://docs.cypress.io/api/introduction/api.html
describe("Calculator test", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })
    it("visits the calculator root url", () => {
        cy.visit("/");
        cy.contains("#preCalc", "__-");
    });
    it("Test Calculator", () => {
        cy.visit("/");
        cy.get("#5").click();
        cy.get("#plus").click();
        cy.get("#5").click();
        cy.get("#multiply").click();
        cy.get("#3").click();
        cy.get("#EQ").click();
        cy.get("#mathInput").invoke("val").should("equal", "20");
        cy.get("#clear").click();
        cy.get("#ANS").click();
        cy.get("#mathInput").invoke("val").should("equal", "20");
    });
});