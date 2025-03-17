import { Link, useLocation } from 'react-router-dom';
import { Home, CalendarDays, ClipboardList, MailOpen, MessageSquare } from 'lucide-react';

const StudentSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/student/home', icon: <Home /> },
    { label: 'View Attendance', path: '/student/view-attendance', icon: <CalendarDays /> },
    { label: 'View Result', path: '/student/view-result', icon: <ClipboardList /> },
    { label: 'Apply for Leave', path: '/student/apply-leave', icon: <MailOpen /> },
    { label: 'Send Feedback', path: '/student/send-feedback', icon: <MessageSquare /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <Link to="/student/home" className="flex items-center p-4 border-b border-gray-800">
        <img src="/logo.png" alt="Open University Logo" className="h-10 w-10 rounded-full" />
        <span className="ml-3 text-xl font-semibold">Open University</span>
      </Link>

      {/* User Panel
      <div className="flex items-center p-4 border-b border-gray-800">
        <img src="/user-avatar.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
        <Link to="/student/profile" className="ml-3 text-sm font-medium">John Doe</Link>
      </div> */}

      <nav className="flex-grow overflow-y-auto mt-4">
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
    </aside>
  );
};

export default StudentSidebar;
