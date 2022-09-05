/* Write an object user with the attributes:

hobby: Calligraphy
favoriteSport: Hockey
astrologicalSign: Aries
firstName: Buillaume
lastName: Ialva
location: Telaviv
occupation: Engineer
Create a function named logWelcomeUser:

It takes one argument welcomeString (String)
It logs to the console <welcomeString>, <firstName>. Your occupation is: <occupation>
Create a variable named bindLogWelcomeUser. It binds the logWelcomeUser function to the user object. */


let user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
}

function logWelcomeUser(welcomeString) {
  console.log(`${welcomeString}, ${user.firstName}.
  Your occupation is: ${user.occupation}`);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Hello');
