/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */
let myLevel = 0;
let path = 0;

let rememberedGamerTag;

const getGamerTag = (gamerTag) => {
  if (rememberedGamerTag === undefined) {
    myLevel = 1;
    rememberedGamerTag = gamerTag;
  }
  return rememberedGamerTag;
};

const getBotReply = (msg) => {
  const lowerCaseMessage = msg.toLowerCase();
  if (myLevel === 0) {
    if (lowerCaseMessage === "yes" || lowerCaseMessage === "no") {
      return "Please type in your GamerTag";
    }
  }
  if (lowerCaseMessage === "restart") {
    myLevel = 0;
    path = 0;
    rememberedGamerTag = undefined;
    return "Good call, I'd do that too. Please enter your GamerTag";
  }
  if (lowerCaseMessage === "joke") {
    return "I tried to go to a bar in Minecraft. The bartender wouldn't let me order a drink, he said they don't serve miners. *Please continue with the last questions asterisk hint*";
  }

  getGamerTag(msg);

  if (myLevel === 1) {
    if (lowerCaseMessage === "yes") {
      myLevel = 2;
      path = 0;
      return "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
    }
    if (lowerCaseMessage === "no") {
      myLevel = 2;
      path = 1;
      return "Was that a typo? *(Yes / No)*";
    }
    return `Nice to meet you ${rememberedGamerTag}, do you want to play a game? *(Yes / No)*`;
  }
  if (myLevel === 2) {
    if (path === 0) {
      if (lowerCaseMessage === "rpg") {
        myLevel = 3;
        path = 0;
        return "Do you want to kill monsters? Or get a 5 Star Police rating? *(Monsters / 5 Star)*";
      }
      if (lowerCaseMessage === "fps") {
        myLevel = 3;
        path = 1;
        return "Do you like War based games or Do you like a game with more colour? *(War / Colour)*";
      }
    }
    if (path === 1) {
      if (lowerCaseMessage === "no") {
        return "You're trash kid";
      }
      if (lowerCaseMessage === "yes") {
        path = 0;
        return "Lesssss goooo, are you wanting to play FPS or RPG? *(FPS / RPG)*";
      }
    }
  }
  if (myLevel === 3) {
    if (path === 0) {
      if (lowerCaseMessage === "5 star") {
        myLevel = 4;
        path = 0;
        return `GTA is the game for you! Check out this <a href="https://www.ign.com/games/grand-theft-auto-v" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*`;
      }
      if (lowerCaseMessage === "monsters") {
        myLevel = 4;
        path = 0;
        return `Elden Ring is the game for you! Check out this <a href="https://www.ign.com/games/elden-ring" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*`;
      }
    }
    if (path === 1) {
      if (lowerCaseMessage === "war") {
        myLevel = 4;
        path = 0;
        return `Call of Duty is the game for you! Check out this <a href="https://www.ign.com/games/franchise/call-of-duty" target="_blank">link <a/> <br> Would you like to continue? *(Yes / No?)*`;
      }
      if (lowerCaseMessage === "colour") {
        myLevel = 4;
        path = 0;
        return `Apex Legends is the game for you! Check out this <a href="https://www.ign.com/articles/apex-legends-review-2" target="_blank">link </a> <br> Would you like to continue? *(Yes / No?)*`;
      }
    }
  }

  if (myLevel === 4) {
    if (lowerCaseMessage === "yes") {
      return `GLHF ${rememberedGamerTag}!`;
    }
    if (lowerCaseMessage === "no") {
      myLevel = 2;
      return "Can you make your mind up at least, are you wanting to play FPS or RPG? *(FPS or RPG)*";
    }
  }
  return "Please place a valid input into the text box";
};
export { getBotReply };
