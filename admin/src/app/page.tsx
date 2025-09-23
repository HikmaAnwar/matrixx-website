// This is the main entry point for the admin panel
// All admin routes should be under /admin/*

export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Matrixx Admin Panel</h1>
          <p className="mt-2 text-sm text-gray-600">
            Please navigate to <a href="/admin" className="text-primary-600 hover:text-primary-500">/admin</a> to access the dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
