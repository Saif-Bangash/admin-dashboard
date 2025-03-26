import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {   createUser } from '../store/userSlice';
import UserForm from '../component/users/UserForm';
import UserList from '../component/users/UserList';
 

export default function Users() {
  const dispatch = useDispatch();
  const { list: users, status } = useSelector(state => state.users);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCreateUser = async (userData) => {
    await dispatch(createUser(userData));
    setIsFormOpen(false);
  };

  return (
    <div className="p-6 w-5xl sm:ml-0 lg:ml-64 ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className=" px-2 py-2 sm:px-6 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      {isFormOpen && (
        <UserForm
          onSubmit={handleCreateUser}
          onClose={() => setIsFormOpen(false)}
          isLoading={status === 'loading'}
        />
      )}

      <UserList users={users} />
    </div>
  );
}