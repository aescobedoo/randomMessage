// Databases:
const openers = [
  "hi", "hello", "greetings", "good to see you", "howdy", "hey there",
  "what's up", "nice to meet you", "welcome", "good morning", "good afternoon",
  "good evening", "how's it going", "long time no see", "how have you been",
  "how's everything", "how's your day", "how are you doing", "nice weather, isn't it",
  "beautiful day, isn't it", "how's the family", "good to have you here",
  "thanks for stopping by", "hope you're well", "nice to see you again",
  "how's work", "how's school", "how's life treating you", "what's new",
  "any plans for the weekend", "enjoying the day", "keep smiling", "have a great day",
  "have a good one", "take care", "see you later", "bye", "farewell", "until next time",
  "catch you later", "so long", "goodbye for now", "peace out", "adios", "later gator",
  "bye bye", "take it easy"
];

const verbs = [
  "run", "jump", "skip", "hop", "walk", "dance", "sing", "laugh", "cry", "smile",
  "frown", "wave", "hug", "kiss", "shout", "whisper", "talk", "listen", "hear",
  "see", "look", "watch", "observe", "notice", "feel", "touch", "taste", "smell",
  "eat", "drink", "sleep", "dream", "wake", "work", "play", "rest", "relax",
  "exercise", "meditate", "study", "learn", "teach", "read", "write", "create",
  "imagine", "explore", "discover"
];

const athletes = [
  "Michael Jordan", "Serena Williams", "Cristiano Ronaldo", "Usain Bolt",
  "Lionel Messi", "Muhammad Ali", "Roger Federer", "Tiger Woods", "Kobe Bryant",
  "Tom Brady", "LeBron James", "Michael Phelps", "Rafael Nadal", "Megan Rapinoe",
  "Simone Biles", "Lewis Hamilton", "Novak Djokovic", "Serena Williams", "Derek Jeter",
  "Wayne Gretzky", "Mia Hamm", "Pele", "Diego Maradona", "Ronaldinho", "Zinedine Zidane",
  "David Beckham", "Michael Schumacher", "Lance Armstrong", "Mike Tyson", "Manny Pacquiao",
  "Floyd Mayweather Jr.", "Ronda Rousey", "Shaun White", "Kelly Slater", "Lindsey Vonn",
  "Danica Patrick", "Allyson Felix", "Katie Ledecky", "Michael Johnson", "Carl Lewis",
  "Jackie Joyner-Kersee", "Usain Bolt", "Florence Griffith-Joyner", "Nadia Comaneci",
  "Mark Spitz", "Babe Ruth", "Muhammad Ali", "Pelé"
];

const foods = [
  "pizza", "burger", "sushi", "pasta", "salad", "sandwich", "taco", "burrito",
  "steak", "chicken", "fish", "shrimp", "lobster", "crab", "sashimi", "tempura",
  "ramen", "pho", "pad thai", "curry", "samosa", "biryani", "kebab", "falafel",
  "hummus", "guacamole", "quesadilla", "tortilla", "enchilada", "empanada", "arepa",
  "ceviche", "poke", "sushi roll", "spring roll", "dumplings", "noodles", "rice",
  "soba", "yakisoba", "onigiri", "bento", "hot dog", "fries", "onion rings", "wings",
  "ribs", "soup", "stew", "chili"
];

const prepositions = [
  "about", "above", "across", "after", "against", "along", "amid", "among",
  "around", "as", "at", "before", "behind", "below", "beneath", "beside",
  "between", "beyond", "but", "by", "concerning", "considering", "despite",
  "down", "during", "except", "for", "from", "in", "inside", "into", "like",
  "near", "of", "off", "on", "onto", "out", "outside", "over", "past",
  "regarding", "round", "since", "through", "throughout", "to", "toward",
  "under", "underneath", "until", "up", "upon", "with", "within", "without"
];

const adjectives = [
  "happy", "sad", "angry", "excited", "bored", "tired", "energetic", "lazy",
  "smart", "dumb", "clever", "stupid", "brave", "cowardly", "kind", "mean",
  "generous", "selfish", "friendly", "hostile", "calm", "nervous", "confident",
  "doubtful", "honest", "dishonest", "loyal", "disloyal", "patient", "impatient",
  "polite", "rude", "quiet", "loud", "shy", "outgoing", "serious", "silly",
  "strong", "weak", "beautiful", "ugly", "clean", "dirty", "hard", "soft",
  "smooth", "rough"
];

const closers = [
  "goodbye", "bye", "see you later", "see you soon", "take care", "farewell",
  "until next time", "have a great day", "have a good one", "have a nice day",
  "have a good day", "have a great weekend", "take it easy", "catch you later",
  "so long", "later gator", "bye bye", "cheers", "peace out", "adios", "toodles",
  "later", "ciao", "sayonara", "arrivederci", "auf Wiedersehen", "bon voyage",
  "until we meet again", "keep in touch", "keep smiling", "stay safe",
  "take care of yourself", "fare thee well", "Godspeed",
  "parting is such sweet sorrow", "until next time, my friend",
  "I bid you adieu", "until we meet again, take care",
  "may the road rise up to meet you", "may the wind be always at your back",
  "until we meet again, stay well", "may your days be full of joy",
  "may your path be filled with light", "may your heart be at peace",
  "may you find success in all you do", "may your dreams come true",
  "wishing you all the best", "fare thee well, my friend",
  "may our paths cross again"
];
const places = [
  "Paris", "New York City", "Tokyo", "London", "Rome", "Sydney", "Dubai", "Los Angeles", "Barcelona", "Hong Kong",
  "Moscow", "Rio de Janeiro", "Cape Town", "Berlin", "Amsterdam", "Istanbul", "Singapore", "Mumbai", "Toronto", "Florence",
  "Venice", "Prague", "Seoul", "Kyoto", "San Francisco", "Madrid", "Vienna", "Bangkok", "Dublin", "Cairo",
  "Santorini", "Bali", "Hawaii", "Cancun", "Machu Picchu", "Zurich", "Edinburgh", "Vancouver", "Montreal", "Budapest",
  "Barbados", "Maldives", "Bora Bora", "Phuket", "Reykjavik", "Athens", "Jerusalem", "Dubrovnik", "Granada"
];



//Array of the arrays:
const master = [openers, verbs, athletes, foods, prepositions, adjectives, closers, places];
let work = [...master];

//Functions
const randomPicker = array => {
  picker = Math.floor(Math.random() * array.length)
  return picker
}


const random = () => {
  let message = ""

  for (i = 0; i < 4; i++) {
    let arrSelected = work.splice(randomPicker(work), 1)[0];
    let messageAppend = arrSelected[randomPicker(arrSelected)];
    message = message + messageAppend + " ";
  }

  return message;
}


console.log(random());
