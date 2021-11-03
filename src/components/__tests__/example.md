arrange setup initial app state
describe("", function() {
  it("", function() {
    visit a web page
    cy.visit("https")
  })
  query for an element
  it("", function() {
    cy.contains("")
  })
  act - take an action
   it("", function() {
    cy.contains("").click()
  })
  interact with the element
  it("", function() {
    cy.get("class").type("example").should("have.value", "example")
  })
})




assert - make an assertion
make an assertion about page content

Visits the root of our web server
Changes the day to "Tuesday"
Clicks on the second "Add" button in the schedule
Enters their name
Chooses an interviewer
Clicks the save button
Sees the booked appointment
Clicks the edit button
Changes the name and interviewer
Clicks the save button
Sees the edit to the appointment
Clicks the delete button
Clicks the confirm button
Sees that the appointment slot is empty