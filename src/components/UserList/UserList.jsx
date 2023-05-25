import "./UserList.css";

const UserList = ({ users,onDelete, onEditUser }) => {
  if (!users.length) return <p>Without users</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <article>
            <div className="userdata">
              <h2>{user.first_name}</h2>

              <h3>Email</h3>
              <p>{user.email}</p>
            </div>

            <div className="user-list__btns_cont">
              <button onClick={() => onEditUser(user)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>
                <p className="fa-solid fa-trash-can">Delete</p>
              </button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
