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
