const users = {
  britain: {
    name: "Great Britain",
    photo: "images/profiles/britain.png"
  },
  theAllies: {
    name: "The Allies"
  }
}

function getUser(user) {
  return users[user];
}

export default getUser;
