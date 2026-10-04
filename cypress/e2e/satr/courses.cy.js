describe("Satr courses and learning paths", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("discovers courses from the homepage", () => {
    cy.visit(satrUrl);
    cy.wait(1000);
    cy.get('a[href="/all-courses"]').filter(":visible").click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/all-courses");
    cy.wait(1000);
    cy.contains("h2", "الدورات التعليمية").should("be.visible");
    cy.wait(1000);
    cy.get('a[href^="/course/"][href$="/view"]')
      .should("have.length.greaterThan", 0);


    cy.wait(1000);
  });

  it("opens a course and verifies its content", () => {
    cy.visit(satrUrl);
    cy.wait(1000);
    cy.get('a[href="/all-courses"]').filter(":visible").click();
    cy.wait(1000);
    cy.get('a[href="/course/XUncw0g2X6/view"]')
      .should("contain.text", "مقدمة في قواعد البيانات")
      .click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/course/XUncw0g2X6/view");
    cy.wait(1000);
    cy.contains("h1", "مقدمة في قواعد البيانات").should("be.visible");
    cy.wait(1000);
    cy.contains("ماذا ستتعلم ؟").should("be.visible");
    cy.wait(1000);
  });

  it("opens a learning path and verifies its content", () => {
    cy.visit(satrUrl);
    cy.wait(1000);
    cy.get('a[href="/all-paths"]').filter(":visible").click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/all-paths");
    cy.wait(1000);
    cy.get('a[href="/path/BDwtRrEpyD/view"]')
      .should("contain.text", "مسار قواعد البيانات")
      .click();
    cy.wait(1000);

    cy.location("pathname").should("eq", "/path/BDwtRrEpyD/view");
    cy.wait(1000);
    cy.contains("h1", "مسار قواعد البيانات").should("be.visible");
    cy.wait(1000);
    cy.contains("h2", "محتوى المسار").should("be.visible");
    cy.wait(1000);
  });
});
