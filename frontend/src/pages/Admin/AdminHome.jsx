import React from 'react'
import Sidebar from '../../components/Admin/Sidebar.jsx/Sidebar'
import AdminAddBlog from '../../components/Admin/AddBlog.jsx/AdminAddBlog'

const AdminHome = () => {
  return (
    <div>
        <Sidebar />
        <AdminAddBlog/>
    </div>
  )
}
export default AdminHome
