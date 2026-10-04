describe("The Garage programs", () => {
  const garageUrl = Cypress.expose("garageUrl");

  function openPrograms() {
    cy.visit(garageUrl);
    cy.get('a[href="/programs"]').filter(":visible").click();
    cy.location("pathname").should("eq", "/programs");
  }

  function openAccelerator() {
    openPrograms();
    cy.contains("h3", "المسرعة")
      .closest("div.border")
      .contains("button", "سجل الآن")
      .click();
  }

  it("discovers the available programs", () => {
    openPrograms();

    cy.contains("h1", "البرامج").should("be.visible");
    cy.contains("h3", "الجسر").should("be.visible");
    cy.contains("h3", "المسرعة").should("be.visible");
    cy.contains("h3", "الحاضنة").should("be.visible");
  });

  it("opens the accelerator details", () => {
    openAccelerator();

    cy.location("pathname").should("eq", "/programs/accelerator");
    cy.contains("h1", "المسرعة").should("be.visible");
    cy.contains("كل ما تحتاجه شركتك الناشئة").should("be.visible");
  });

  it("opens the registration destination", () => {
    openAccelerator();
    cy.contains("button", "سجل الآن").click();

    cy.location("pathname").should("eq", "/plus-form");
    cy.contains("معايير الاختيار").should("be.visible");
    cy.get("#startup_name").should("be.visible");
  });
});
