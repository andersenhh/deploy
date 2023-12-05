import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import userImg from "../assets/profile.jpg"
import { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div>
        <Sidebar aria-label="Default sidebar example" className="h-screen w-80">
        <Sidebar.Logo href="#">
          <p>Welcome, {
       user?.displayName || 
       user?.email
       }</p>
       
      </Sidebar.Logo>
      <Sidebar.Items className='ml-4' >
        <Sidebar.ItemGroup>
          <Sidebar.Item  href="/admin/dashboard/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} >
            Manage Books
          </Sidebar.Item>
          {/* <Sidebar.Item href="/admin/dashboard/edit-books/:id" icon={HiUser}>
            Edit Book
          </Sidebar.Item> */}
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar