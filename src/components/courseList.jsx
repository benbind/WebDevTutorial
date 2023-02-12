import './courseList.css';
//import schedule from './UserContact';
import Course from './Course';
const CourseList = ({schedule}) => {
  console.log(Object.entries(schedule.courses));
  return (
    <div className="courselist">
    
      {Object.entries(schedule.courses).map(([id,data]) => <Course key={id} courseData={data} />)}
      {/* console.log(Object.entries(schedule)); */}
      {/* { Object.entries(schedule).map(([]) => <Course key={schedule.courses.id} />) } */}
      {/* { Object.entries(schedule).map((elem) => console.log(elem)) } */}
    </div>
  );
}

export default CourseList;