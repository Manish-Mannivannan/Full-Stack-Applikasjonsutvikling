describe("Contact test", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720);
    })
    it("visits the contact root url", () => {
        cy.visit("/contact");
    });
    it("Test Contact", () => {
        //Tests if submit button is disabled correctly
        cy.visit("/contact");
        cy.get("#name").type("Firstname Lastname");
        cy.get("#email").type("email@example.com");
        cy.get("#submit").should("be.disabled");
        cy.get("#message").type("Message");
        cy.get("#submit").should("not.be.disabled");
        
        //Tests if alert prints out expected value
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Name: Firstname Lastname,\n"
            + "Email: email@example.com,\n"
            + "Message: Message");
        })
        cy.get("#submit").click();
    });
});
