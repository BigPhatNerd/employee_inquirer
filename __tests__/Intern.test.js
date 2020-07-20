const Intern = require("../lib/Intern");



test("creates an employee object", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");
    expect(int.name).toBe("Mike");
    expect(int.id).toBe(5);
    expect(int.email).toBe("mike@mike.com");
    expect(int.school).toBe("Germantown");

});

test("gets name from a player", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");

    expect(int.getName()).toEqual("Mike");
});

test("gets id from employee", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");
    expect(int.getId()).toBe(5);
});
test("gets email from employee", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");
    expect(int.getEmail()).toBe("mike@mike.com");

});

test("gets role from employee", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");
    expect(int.getRole()).toEqual("Intern");
});

test("gets school from Intern", () => {
    const int = new Intern("Mike", 5, "mike@mike.com", "Germantown");
    expect(int.getSchool()).toEqual("Germantown");
});