const Manager = require("../lib/Manager");

test("creates an engineer object", () => {
    const emp = new Manager("Mike", 5, "mike@mike.com");
    expect(emp.name).toBe("Mike");
    expect(emp.id).toBe(5);
    expect(emp.email).toBe("mike@mike.com");

});

test("gets name from a player", () => {
    const emp = new Manager("Mike", 5, "mike@mike.com");

    expect(emp.getName()).toEqual("Mike");
});

test("gets id from engineer", () => {
    const emp = new Manager("Mike", 5, "mike@mike.com");
    expect(emp.getId()).toBe(5);
});
test("gets email from engineer", () => {
    const emp = new Manager("Mike", 5, "mike@mike.com");
    expect(emp.getEmail()).toBe("mike@mike.com");

});

test("gets role from engineer", () => {
    const emp = new Manager("Mike", 5, "mike@mike.com");
    expect(emp.getRole()).toEqual("Manager");
})