import './courseList.css';
const Course = ( {courseData} ) =>{
    console.log(courseData);
 return (
    <div className = "card m-1 p-2 course-item" >
        {/* <h1>{courseData.term}</h1> */}
      <p>{courseData.term}, "CS", {courseData.number}, {courseData.title}</p>
      <div className = "card-body">
        <h2>{courseData.term} CS {courseData.number}</h2> 
        <p>{courseData.title}</p>
      </div>

      {/* <h1>console.log(courseData)</h1> */}
    </div>
    );
 }

export default Course;

/*<table>
    <tbody>
      <tr><th>Name</th><td>{user.firstName} {user.lastName}</td></tr>
      <tr><th>Email</th><td>{user.email}</td></tr>
      <tr><th>Phone</th><td>{user.phone}</td></tr>
      <tr>
        <th>Class</th>
        <td>
          {schedule.class.}, {user.address.city}, {user.address.state} {user.address.postalCode}
        </td>
      </tr>
    </tbody>
  </table> */