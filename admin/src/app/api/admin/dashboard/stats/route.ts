import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock dashboard stats - in a real app, this would come from database queries
  const stats = {
    totalUsers: 5,
    totalServices: 12,
    totalProducts: 8,
    totalFAQs: 15,
    totalClients: 24,
    recentActivity: [
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
    ],
  };

  return NextResponse.json({ success: true, data: stats });
}
