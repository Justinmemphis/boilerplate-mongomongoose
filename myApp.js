require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

var arrayOfPeople = [
  {name: "George", age: 52, favoriteFoods: ["turkey sandwich"]},
  {name: "Sue", age: 17, favoriteFoods: ["bubble tea"]},
  {name: "Vicky", age 48, favoriteFoods: ["cheese"]}
];

const createAndSavePerson = (done) => {
  const joeBiden = new Person({name: "Joe Biden", age: 78, favoriteFoods: ["pasta", "milk", "ice cream"]});

  joeBiden.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
