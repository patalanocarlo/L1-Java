class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
  }
}

let user1 = new User("Carlo", "Patalano", 30, "Roma");
let user2 = new User("Luigi", "Verdi", 25, "Milano");

console.log(user1.compareAge(user2));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}
let pet1 = new Pet("tommy", "Carlo", "Cane", "Labrador");
let pet2 = new Pet("Giò", "Luigi", "Gatto", "Persiano");
const pet3 = new Pet("Buddy", "Carlo", "Cane", "Golden Retriever");
console.log(pet1.sameOwner(pet2));
console.log(pet1.sameOwner(pet3));
