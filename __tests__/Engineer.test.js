const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const eng = new Engineer("Mike", 5, "mike@mike.com", "bigphatnerd");
    expect(eng.name).toBe("Mike");
    expect(eng.id).toBe(5);
    expect(eng.email).toBe("mike@mike.com");
    expect(eng.github).toBe("bigphatnerd");

});

test("gets name from a player", () => {
    const eng = new Engineer("Mike", 5, "mike@mike.com");

    expect(eng.getName()).toEqual("Mike");
});

test("gets id from engineer", () => {
    const eng = new Engineer("Mike", 5, "mike@mike.com");
    expect(eng.getId()).toBe(5);
});
test("gets email from engineer", () => {
    const eng = new Engineer("Mike", 5, "mike@mike.com");
    expect(eng.getEmail()).toBe("mike@mike.com");

});

test("gets github from engineer", () => {
    const eng = new Engineer("Mike", 5, "mike@mike.com", "bigphatnerd");
    expect(eng.getGithub()).toEqual("bigphatnerd");
});
test