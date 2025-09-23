import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock monitoring alerts - in a real app, this would come from monitoring system
  const alerts = [
    {
      id: '1',
      type: 'warning',
      severity: 'medium',
      title: 'High Memory Usage',
      message: 'Server memory usage is above 80%',
      source: 'system',
      timestamp: '2024-01-15T10:30:00Z',
      status: 'active',
      acknowledged: false,
    },
    {
      id: '2',
      type: 'error',
      severity: 'high',
      title: 'Database Connection Failed',
      message: 'Failed to connect to database server',
      source: 'database',
      timestamp: '2024-01-15T10:25:00Z',
      status: 'resolved',
      acknowledged: true,
    },
    {
      id: '3',
      type: 'info',
      severity: 'low',
      title: 'SSL Certificate Expiring',
      message: 'SSL certificate will expire in 30 days',
      source: 'security',
      timestamp: '2024-01-15T10:20:00Z',
      status: 'active',
      acknowledged: false,
    },
    {
      id: '4',
      type: 'warning',
      severity: 'medium',
      title: 'Slow Query Detected',
      message: 'Query taking longer than 5 seconds',
      source: 'database',
      timestamp: '2024-01-15T10:15:00Z',
      status: 'active',
      acknowledged: false,
    },
  ];

  return NextResponse.json({ success: true, data: alerts });
}

export async function PUT(request: NextRequest) {
  try {
    const { id, status, acknowledged } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Alert ID is required' }, { status: 400 });
    }

    // Mock alert update - in a real app, you would update in monitoring system
    return NextResponse.json({
      success: true,
      message: 'Alert updated successfully',
      data: { id, status, acknowledged, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Alert update failed' }, { status: 500 });
  }
}
