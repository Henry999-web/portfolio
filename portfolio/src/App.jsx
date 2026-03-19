import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import BlogListing from './pages/Blog/BlogListing';
import BlogPost from './pages/Blog/BlogPost';
import Dashboard from './pages/Admin/Dashboard';
import EditPost from './pages/Admin/EditPost';
import Login from './pages/Admin/Login';
import Register from './pages/Admin/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<BlogListing />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Admin Routes */}
      <Route path="/admin" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/admin/create" element={
        <ProtectedRoute>
          <EditPost />
        </ProtectedRoute>
      } />
      <Route path="/admin/edit/:slug" element={
        <ProtectedRoute>
          <EditPost />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
