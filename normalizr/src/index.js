import { schema, normalize } from "normalizr";

const instructorSchema = new schema.Entity("instructors");
const courseSchema = new schema.Entity("courses", {
  instructors: [instructorSchema]
});
const studentSchema = new schema.Entity("students", {
  courses: [courseSchema]
});

fetch("https://api.myjson.com/bins/y355u")
  .then(res => res.json())
  .then(res => {
    console.log(res);
    const data = normalize(res, [studentSchema]);
    console.log(data);
  });
