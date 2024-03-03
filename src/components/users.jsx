import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

export default function Users() {
  // useState для массива users
  const [users, setUsers] = useState(api.users.fetchAll());
  const [counter, setCounter] = useState(1);
  // Функция изменения массива при нажатии на кнопку
  function handleDelete(userId) {
    setUsers(users.filter((user) => user._id !== userId));
  }
  // function handleCounter() {
  //     setCounter(prevState => prevState +1)
  // }

  return (
    <>
      <h2>
        <span
          className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}
        >
          {users.length > 0
            ? `Are you ready for the party? The ${users.length} of us ${
                users.length > 1 ? "are" : "is"
              }  waiting for you`
            : "You've got rid all of them"}
        </span>
      </h2>

      {users.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Personal qualities</th>
              <th scope='col'>Profession</th>
              <th scope='col'>Datings</th>
              <th scope='col'>Аssessment</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((quality) => (
                      <span
                        className={"badge m-1 bg-" + quality.color}
                        key={quality._id}
                      >
                        {quality.name + " "}
                      </span>
                    ))}
                  </td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => handleDelete(user._id)}
                    >
                      Get rid of
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
