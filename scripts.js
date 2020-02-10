const me = {
    name: "Joshua James Gray",
    dob: "11-05-1975",
    family: {
      brother: "Wesley",
      sister: "Madria",
      mother: "Pamela",
      father: "Ralph (deceased)",
      uncle: "Charles",
      aunt: "Emmylou",
      fiance: "Mary (deceased)"
    }
};
  
  console.log(me.family.fiance);
  
  // create a new key value pair
  me.age = 44;
  
  me.name = "Cygnus Starion";
  
  // References the key 'name' inside of OBJECT me.
  console.log(me.name);
  
  // References all keys within OBJECT me.
  console.log(me);