import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => (
  <div>
    {course.map((courses) => (
      <div key={courses.id}>
        <Header name={courses.name} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    ))}
  </div>
);

export default Course;
