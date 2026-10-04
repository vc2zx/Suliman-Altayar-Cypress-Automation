describe("Satr navigation", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("loads the homepage with recognizable learning content", () => {
    cy.visit(satrUrl);
    cy.wait(1000);
    cy.location("hostname").should("eq", "satr.tuwaiq.edu.sa");
    cy.wait(1000);
    cy.contains("h1", "تعلم تقنيات المستقبل").should("be.visible");
    cy.wait(1000);
    cy.contains("h2", "أحدث الدورات").should("be.visible");
    cy.wait(1000);
  });

  it("opens educational content from the homepage", () => {
    cy.visit(satrUrl);
    cy.wait(1000);
    cy.get('a[href="/educational-content"]').click();
    cy.wait(1000);

    cy.location("pathname").should("eq", "/educational-content");
    cy.wait(1000);
    cy.contains("h1", "المحتوى التعليمي").should("be.visible");
    cy.wait(1000);
    cy.get('input[name="search"]').should("be.visible");
    cy.wait(1000);
  });
});
