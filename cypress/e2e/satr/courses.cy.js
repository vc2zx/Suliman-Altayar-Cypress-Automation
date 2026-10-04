describe("Satr courses and learning paths", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("discovers courses from the homepage", () => {
    cy.visit(satrUrl);
    cy.get('a[href="/all-courses"]').filter(":visible").click();

    cy.location("pathname").should("eq", "/all-courses");
    cy.contains("h2", "الدورات التعليمية").should("be.visible");
    cy.get('a[href^="/course/"][href$="/view"]')
      .should("have.length.greaterThan", 0);
  });

  it("opens a course and verifies its content", () => {
    cy.visit(satrUrl);
    cy.get('a[href="/all-courses"]').filter(":visible").click();
    cy.get('a[href="/course/XUncw0g2X6/view"]')
      .should("contain.text", "مقدمة في قواعد البيانات")
      .click();

    cy.location("pathname").should("eq", "/course/XUncw0g2X6/view");
    cy.contains("h1", "مقدمة في قواعد البيانات").should("be.visible");
    cy.contains("ماذا ستتعلم ؟").should("be.visible");
  });

  it("opens a learning path and verifies its content", () => {
    cy.visit(satrUrl);
    cy.get('a[href="/all-paths"]').filter(":visible").click();
    cy.location("pathname").should("eq", "/all-paths");
    cy.get('a[href="/path/BDwtRrEpyD/view"]')
      .should("contain.text", "مسار قواعد البيانات")
      .click();

    cy.location("pathname").should("eq", "/path/BDwtRrEpyD/view");
    cy.contains("h1", "مسار قواعد البيانات").should("be.visible");
    cy.contains("h2", "محتوى المسار").should("be.visible");
  });
});
