// function returning functions
const interviewQuestion = job => {
  switch (job) {
    case 'designer':
      return name => {
        console.log(`${name} can you please explain what UX design is?`);
      };
    case 'teacher':
      return name => {
        console.log(`What subject do you teach ${name}?`);
      };
    default:
      return name => {
        console.log(`What do you do ${name}?`);
      };
  }
};

let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Mark');
let designerQuestion = interviewQuestion('designer');
designerQuestion('John');
interviewQuestion()('Marius');

function retirement(retirementAge) {
  let msg = ' years left untile retirement';
  return function(yearOfBirth) {
    let age = new Date().getFullYear() - yearOfBirth;
    console.log(`${retirementAge - age} ${msg}`);
  };
}

let retirementUS = retirement(66);
retirementUS(1990);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

// retirementGermany(1990);
retirementIceland(1990);
