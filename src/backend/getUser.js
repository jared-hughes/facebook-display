const users = {
  britain: {
    name: "Great Britain",
    photo: "images/profiles/britain.png",
    pronoun: "it",
    possessivePronoun: "its"
  },
  germany: {
    name: "Germany"
  },
  france: {
    name: "France"
  },
  churchill: {
    name: "Winston Churchill"
  },
  italy: {
    name: "Italy"
  },
  su: {
    name: "Soviet Union"
  },
  theAllies: {
    name: "The Allies"
  }
}

function getPossessivePronoun(pronoun) {
  let possessive = ({
    it: "its",
    they: "their",
    he: "his",
    she: "her",
    we: "our"
  })[pronoun];
  if (!possessive) {
    throw new Error("The possessive for pronoun " + pronoun + " not added");
  }
  return possessive;
}

function getUser(user) {
  let out = users[user];
  if (!out) {
    throw new Error("The user " + user + " does not exist.");
  }
  if (!out.name) {
    throw new Error("The user " + user + " has no name.");
  }
  // no handling for photo
  if (!out.pronoun) {
    out.pronoun = "they";
  }
  if (!out.possessivePronoun) {
    out.possessivePronoun = getPossessivePronoun(out.pronoun);
  }
  return out;
}

export default getUser;
