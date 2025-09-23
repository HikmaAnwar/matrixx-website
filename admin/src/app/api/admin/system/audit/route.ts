import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock audit logs - in a real app, this would come from audit logging system
  const auditLogs = [
    {
      id: '1',
      timestamp: '2024-01-15T10:30:00Z',
      userId: 'admin',
      userName: 'Admin User',
      action: 'LOGIN',
      resource: 'auth',
      resourceId: 'admin',
      details: 'Successful login from IP 192.168.1.100',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    {
      id: '2',
      timestamp: '2024-01-15T10:25:00Z',
      userId: 'admin',
      userName: 'Admin User',
      action: 'CREATE',
      resource: 'services',
      resourceId: 'service-1',
      details: 'Created new service "Our Services 01"',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    {
      id: '3',
      timestamp: '2024-01-15T10:20:00Z',
      userId: 'admin',
      userName: 'Admin User',
      action: 'UPDATE',
      resource: 'products',
      resourceId: 'product-2',
      details: 'Updated product "Advanced Technology Solutions"',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
    {
      id: '4',
      timestamp: '2024-01-15T10:15:00Z',
      userId: 'admin',
      userName: 'Admin User',
      action: 'DELETE',
      resource: 'faq',
      resourceId: 'faq-3',
      details: 'Deleted FAQ "What technologies do you work with?"',
      ipAddress: '192.168.1.100',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  ];

  return NextResponse.json({ success: true, data: auditLogs });
}
