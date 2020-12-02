
const readline = require('readline');
let userAnswers = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} \nNext Question:`);
  userAnswers['name'] = answer;
rl.question('What\'s an activity you like doing? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} \nNext Question:`);
  userAnswers['hobby'] = answer;
rl.question('What do you listen to while doing that? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} \nNext Question:`);
  userAnswers['music'] = answer;
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} \nNext Question:`);
  userAnswers['meal'] = answer;
rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
   console.log(`Thank you for your valuable feedback: ${answer} \nNext Question:`);
   userAnswers['food'] = answer;
rl.question('Which sport is your absolute favourite? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer} \nAlmost Done!`);
  userAnswers['sport'] = answer;
rl.question('What is your superpower? Or, in a few words, tell us what you are amazing at! ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  userAnswers['talent'] = answer;

rl.close();

console.log(`Here\'s your profile: ${userAnswers['name']} likes ${userAnswers['hobby']} and while doing that often listens to ${userAnswers['music']}!
${userAnswers['name']} most enjoys ${userAnswers['food']} for ${userAnswers['meal']} while catching up on the latest ${userAnswers['sport']} news.
If ${userAnswers['name']} had a superpower it would be ${userAnswers['talent']}!`);

});
});
});
});
});
});
});

