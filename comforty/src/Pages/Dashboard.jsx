import withSidebar from './withSidebar';
import CategorySidebar from './CategorySidebar';
import NavSidebar from './NavSidebar';
import ProfileSidebar from './ProfileSidebar';

// Wrap the components with the HOC
const EnhancedCategorySidebar = withSidebar(CategorySidebar, 'left');
const EnhancedNavSidebar = withSidebar(NavSidebar, 'right');
const EnhancedProfileSidebar = withSidebar(ProfileSidebar, 'right');

const Dashboard = () => {
  return (
    <div>
      {/* Buttons to toggle sidebars */}
      <button onClick={() => EnhancedCategorySidebar.toggleSidebar()}>
        Toggle Categories
      </button>
      <button onClick={() => EnhancedNavSidebar.toggleSidebar()}>
        Toggle Nav Sidebar
      </button>
      <button onClick={() => EnhancedProfileSidebar.toggleSidebar()}>
        Toggle Profile Sidebar
      </button>

      {/* Render the sidebars */}
      <EnhancedCategorySidebar />
      <EnhancedNavSidebar />
      <EnhancedProfileSidebar />
    </div>
  );
};

export default Dashboard;
