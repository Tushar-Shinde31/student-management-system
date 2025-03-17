import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  UserPlus,
  BookOpen,
  GraduationCap,
  Calendar,
  MessageCircle,
  ClipboardCheck,
  PlusCircle
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/admin', icon: <Home /> },
    { label: 'Manage Staff', path: '/admin/manage-staff', icon: <Users /> },
    { label: 'Add Staff', path: '/admin/add-staff', icon: <UserPlus /> },
    { label: 'Manage Students', path: '/admin/manage-students', icon: <Users /> },
    { label: 'Add Student', path: '/admin/add-student', icon: <UserPlus /> },
    { label: 'Manage Courses', path: '/admin/manage-courses', icon: <BookOpen /> },
    { label: 'Add Course', path: '/admin/add-course', icon: <PlusCircle /> },
    { label: 'Manage Subjects', path: '/admin/manage-subjects', icon: <ClipboardCheck /> },
    { label: 'Add Subject', path: '/admin/add-subject', icon: <PlusCircle /> },
    { label: 'Manage Sessions', path: '/admin/manage-sessions', icon: <GraduationCap /> },
    { label: 'Add Session', path: '/admin/add-session', icon: <PlusCircle /> },
    { label: 'View Attendance', path: '/admin/view-attendance', icon: <Calendar /> },
    { label: 'Student Feedback', path: '/admin/student-feedback', icon: <MessageCircle /> },
    { label: 'Staff Feedback', path: '/admin/staff-feedback', icon: <MessageCircle /> },
    { label: 'Student Leave', path: '/admin/student-leave', icon: <ClipboardCheck /> },
    { label: 'Staff Leave', path: '/admin/staff-leave', icon: <ClipboardCheck /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <Link to="/admin" className="flex items-center p-4 border-b border-gray-800">
        <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        <span className="ml-3 text-xl font-semibold">Open University</span>
      </Link>

      <div className="flex-grow overflow-y-auto">
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition duration-300 hover:bg-blue-600 ${location.pathname === item.path ? 'bg-blue-600' : ''}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
