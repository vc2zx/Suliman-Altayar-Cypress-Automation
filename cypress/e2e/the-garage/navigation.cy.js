describe("The Garage navigation", () => {
  const garageUrl = Cypress.expose("garageUrl");

  it("loads the homepage with its main content", () => {
    cy.visit(garageUrl);

    cy.location("hostname").should("eq", "thegarage.sa");
    cy.contains("وجهة الشركات التقنية الناشئة").should("be.visible");
    cy.contains("بوابتك نحو فرص واعدة").should("be.visible");
  });

  it("opens Contact Us from the homepage", () => {
    cy.visit(garageUrl);
    cy.get('a[href="/contact-us"]').click();

    cy.location("pathname").should("eq", "/contact-us");
    cy.contains("h2", "تواصل معنا").should("be.visible");
    cy.contains("املأ نموذج الاتصال أدناه").should("be.visible");
  });

  it("switches the homepage between Arabic and English", () => {
    cy.visit(garageUrl);
    cy.contains("button:visible", "EN").click();

    cy.contains("Tech Startups Hub").should("be.visible");
    cy.contains("Your gateway to promising opportunities").should("be.visible");

    cy.contains("button:visible", "AR").click();
    cy.contains("وجهة الشركات التقنية الناشئة").should("be.visible");
  });
});
