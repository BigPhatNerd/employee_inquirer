const Employee = require("../lib/Employee");



test("creates an employee object", () => {
    const emp = new Employee("Mike", 5, "mike@mike.com");
    expect(emp.name).toBe("Mike");
    expect(emp.id).toBe(5);
    expect(emp.email).toBe("mike@mike.com");

});

test("gets name from a player", () => {
    const emp = new Employee("Mike", 5, "mike@mike.com");

    expect(emp.getName()).toEqual("Mike");
});

test("gets id from employee", () => {
    const emp = new Employee("Mike", 5, "mike@mike.com");
    expect(emp.getId()).toBe(5);
});
test("gets email from employee", () => {
    const emp = new Employee("Mike", 5, "mike@mike.com");
    expect(emp.getEmail()).toBe("mike@mike.com");

});

test("gets role from employee", () => {
    const emp = new Employee("Mike", 5, "mike@mike.com");
    expect(emp.getRole()).toEqual("Employee");
})