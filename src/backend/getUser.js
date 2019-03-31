import users from "./users";

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
    console.warn("The user " + user + " does not exist.");
    out = {}
  }
  if (!out.name) {
    console.warn("The user " + user + " has no name.");
    out.name = user;
  }
  if (!out.photo) {
    out.photo = "images/profiles/guest.png";
  }
  if (!out.pronoun) {
    out.pronoun = "they";
  }
  if (!out.possessivePronoun) {
    out.possessivePronoun = getPossessivePronoun(out.pronoun);
  }
  return out;
}

export default getUser;
