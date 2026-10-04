describe("Satr search and sign-in validation", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("finds learning content for a visible keyword", () => {
    cy.visit(satrUrl + "/educational-content");
    cy.get('input[name="search"]').type("الروبوت{enter}");

    cy.location("search").should("include", "q=");
    cy.contains("h2", /نتائج/).should("be.visible");
    cy.get('a[href="/path/irQHmdAUDj/view"]')
      .should("be.visible")
      .and("contain.text", "الروبوتات");
  });

  it("shows an empty state for a query with no matching content", () => {
    cy.visit(satrUrl + "/educational-content");
    cy.get('input[name="search"]')
      .type("qazwsxedcrfvtgbyhnujmikolp{enter}");

    cy.location("search").should("include", "q=");
    cy.contains("h4", "لا توجد نتائج").should("be.visible");
    cy.contains("لم يتم العثور على نتائج للتصنيفات المدخلة")
      .should("be.visible");
  });

  it("shows required-field errors for an empty sign-in form", () => {
    cy.visit(satrUrl);
    cy.contains("button", "تسجيل الدخول").click();

    cy.origin("https://sso.tuwaiq.edu.sa", () => {
      cy.get("#username").should("be.visible");
      cy.get("#password").should("be.visible");
      cy.get("#kc-login").click();

      cy.get(".error-message")
        .should("have.length", 2)
        .each(($message) => {
          expect($message.text().trim()).to.eq("لا يمكن تركه فارغًا");
        });
    });
  });
});
