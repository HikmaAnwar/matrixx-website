'use client';

import { useState, useEffect } from 'react';
import { 
  UsersIcon, 
  CogIcon, 
  CubeIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalUsers: number;
  totalServices: number;
  totalProducts: number;
  totalFAQs: number;
  totalClients: number;
  recentActivity: Activity[];
}

interface Activity {
  id: string;
  type: 'create' | 'update' | 'delete';
  entity: string;
  entityId: string;
  userId: string;
  userName: string;
  timestamp: string;
  changes?: Record<string, any>;
}

const stats = [
  { name: 'Total Services', value: '12', icon: CogIcon, change: '+2', changeType: 'positive' },
  { name: 'Total Products', value: '8', icon: CubeIcon, change: '+1', changeType: 'positive' },
  { name: 'FAQ Items', value: '15', icon: DocumentTextIcon, change: '+3', changeType: 'positive' },
  { name: 'Active Clients', value: '24', icon: UsersIcon, change: '+4', changeType: 'positive' },
];

const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'create',
    entity: 'Service',
    entityId: 'service-1',
    userId: 'admin',
    userName: 'Admin User',
    timestamp: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    type: 'update',
    entity: 'Product',
    entityId: 'product-2',
    userId: 'admin',
    userName: 'Admin User',
    timestamp: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    type: 'delete',
    entity: 'FAQ',
    entityId: 'faq-3',
    userId: 'admin',
    userName: 'Admin User',
    timestamp: '2024-01-15T08:45:00Z',
  },
];

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchStats = async () => {
      // In a real app, this would be an API call
      setTimeout(() => {
        setStats({
          totalUsers: 5,
          totalServices: 12,
          totalProducts: 8,
          totalFAQs: 15,
          totalClients: 24,
          recentActivity: recentActivities,
        });
      }, 1000);
    };

    fetchStats();
  }, []);

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'create':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'update':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'delete':
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to the Matrixx Admin Panel. Manage your website content efficiently.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="card-body">
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                            {getActivityIcon(activity.type)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              <span className="font-medium text-gray-900">{activity.userName}</span>{' '}
                              {activity.type}d a {activity.entity.toLowerCase()}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time dateTime={activity.timestamp}>
                              {formatTimestamp(activity.timestamp)}
                            </time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <button className="w-full btn-primary">
                <DocumentTextIcon className="mr-2 h-5 w-5" />
                Add New Service
              </button>
              <button className="w-full btn-secondary">
                <CubeIcon className="mr-2 h-5 w-5" />
                Add New Product
              </button>
              <button className="w-full btn-secondary">
                <DocumentTextIcon className="mr-2 h-5 w-5" />
                Update Hero Section
              </button>
              <button className="w-full btn-secondary">
                <UsersIcon className="mr-2 h-5 w-5" />
                Manage Clients
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="card">
        <div className="card-header">
          <h3 className="text-lg font-medium text-gray-900">System Status</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Website Status</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Database</p>
                <p className="text-sm text-gray-500">Connected</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">API Status</p>
                <p className="text-sm text-gray-500">Operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
