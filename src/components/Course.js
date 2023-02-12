
const Course = ( {courseData} ) =>{
    console.log(courseData);
 return (
    <header>
        {/* <h1>{courseData.term}</h1> */}
      <h1>{courseData.term}, "CS", {courseData.number}, {courseData.title}</h1>
      {/* <h1>console.log(courseData)</h1> */}
    </header>
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