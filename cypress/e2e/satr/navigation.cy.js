describe("Satr navigation", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("loads the homepage with recognizable learning content", () => {
    cy.visit(satrUrl);

    cy.location("hostname").should("eq", "satr.tuwaiq.edu.sa");
    cy.contains("h1", "تعلم تقنيات المستقبل").should("be.visible");
    cy.contains("h2", "أحدث الدورات").should("be.visible");
  });

  it("opens educational content from the homepage", () => {
    cy.visit(satrUrl);
    cy.get('a[href="/educational-content"]').click();

    cy.location("pathname").should("eq", "/educational-content");
    cy.contains("h1", "المحتوى التعليمي").should("be.visible");
    cy.get('input[name="search"]').should("be.visible");
  });
});
