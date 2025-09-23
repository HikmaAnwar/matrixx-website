import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock system status - in a real app, this would check actual system health
  const systemStatus = {
    website: {
      status: 'online',
      uptime: '99.9%',
      responseTime: '120ms',
    },
    database: {
      status: 'connected',
      connections: 15,
      responseTime: '5ms',
    },
    api: {
      status: 'operational',
      requestsPerMinute: 150,
      errorRate: '0.1%',
    },
    storage: {
      status: 'available',
      used: '2.5GB',
      total: '10GB',
    },
  };

  return NextResponse.json({ success: true, data: systemStatus });
}
