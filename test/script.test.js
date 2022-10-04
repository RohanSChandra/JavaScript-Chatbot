// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
    const botReply1 = getBotReply("Euphoria");
    const expectedReply1 =
      "Nice to meet you Euphoria, do you want to play a game? *(Yes / No)*";
    expect(botReply1).toEqual(expectedReply1);
  });
});

describe("getBotReply", () => {
  it("should reply with Yes RPG", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);
  });

  it("should reply with No No", () => {
    const botReply1 = getBotReply("No");
    const expectedReply1 = "Was that a typo? *(Yes / No)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("No");
    const expectedReply2 = "You're trash kid";
    expect(botReply2).toEqual(expectedReply2);
  });

  it("should reply with No Yes", () => {
    const botReply2 = getBotReply("No");
    const expectedReply2 = "Was that a typo? *(Yes / No)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Yes");
    const expectedReply3 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should reply with Yes RPG 5 Star", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("5 Star");
    const expectedReply3 = `GTA is the game for you! Check out this <a href="https://www.ign.com/games/grand-theft-auto-v" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*`;
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should reply with Yes RPG Monsters", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Monsters");
    const expectedReply3 =
      'Elden Ring is the game for you! Check out this <a href="https://www.ign.com/games/elden-ring" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*';
    expect(botReply3).toEqual(expectedReply3);
  });

  it("should reply with Yes RPG 5 Star No", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("5 Star");
    const expectedReply3 =
      'GTA is the game for you! Check out this <a href="https://www.ign.com/games/grand-theft-auto-v" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*';
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("No");
    const expectedReply4 =
      "Can you make your mind up at least, are you wanting to play FPS or RPG? *(FPS or RPG)*";
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply with Yes RPG Monsters No", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Monsters");
    const expectedReply3 =
      'Elden Ring is the game for you! Check out this <a href="https://www.ign.com/games/elden-ring" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*';
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("No");
    const expectedReply4 =
      "Can you make your mind up at least, are you wanting to play FPS or RPG? *(FPS or RPG)*";
    expect(botReply4).toEqual(expectedReply4);
  });

  it("should reply with Yes RPG Monsters Yes", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("RPG");
    const expectedReply2 =
      "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("Monsters");
    const expectedReply3 =
      'Elden Ring is the game for you! Check out this <a href="https://www.ign.com/games/elden-ring" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*';
    expect(botReply3).toEqual(expectedReply3);
    const botReply4 = getBotReply("Yes");
    const expectedReply4 = "GLHF Euphoria!";
    expect(botReply4).toEqual(expectedReply4);
  });
  it("should reply with Yes FPS", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("FPS");
    const expectedReply2 =
      "Do you like War based games or Do you like a game with more colour? *(War / Colour)*";
    expect(botReply2).toEqual(expectedReply2);
  });

  it("should reply with Yes FPS War", () => {
    const botReply1 = getBotReply("Yes");
    const expectedReply1 =
      "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply("FPS");
    const expectedReply2 =
      "Do you like War based games or Do you like a game with more colour? *(War / Colour)*";
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply("War");
    const expectedReply3 =
      'Call of Duty is the game for you! Check out this <a href="https://www.ign.com/games/franchise/call-of-duty" target="_blank">link <a/> <br> Would you like to continue? *(Yes / No?)*';
    expect(botReply3).toEqual(expectedReply3);
  });
});
