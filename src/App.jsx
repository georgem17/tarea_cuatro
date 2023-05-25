import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import { getAllUsers } from './services/getAllUser';
import UserList from './components/UserList/UserList';
import Modal from './components/Modal/Modal';
import UserForm from './components/UserForm/UserForm';
import { createUser } from './services/createUser';
import { updateUser } from './services/updateUser';
import { deleteUser } from './services/deleteUser';

function App() {
  const [users, setusers] = useState([]);
  const [isVisibleModal, setisVisibleModal] = useState(false);
  const [editingUserData, seteditingUserData] = useState(null);

  const loadUsers = async () => {
      const usersData = await getAllUsers();
      setusers(usersData);
  };
  const handleCloseModal = () => {
    seteditingUserData(null);
    setisVisibleModal(false);
  }

  const handleCreate = () => {
    setisVisibleModal(true);   
  };

  const handleSend = async (data) => {
    if (data.id) await updateUser(data.id, data);
    else await createUser(data);
    
    await loadUsers();
    setisVisibleModal(false);
  };

  const handleEditUser = (dataUser) => {
    setisVisibleModal(true);
    seteditingUserData(dataUser);
  }

  const handleDelete = async (id) =>{
    await deleteUser(id);
    await loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header onCreate={handleCreate} />

      <UserList users={users} onEditUser={handleEditUser} onDelete={handleDelete}  />

      <Modal isVisible={isVisibleModal}>
        <UserForm
          onClose={handleCloseModal}
          onSend={handleSend}
          initialData={editingUserData}
        />
      </Modal>
    </>
  );
}

export default App;
