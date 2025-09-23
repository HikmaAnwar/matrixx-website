import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock performance metrics - in a real app, this would come from monitoring tools
  const performanceMetrics = {
    responseTime: {
      average: '120ms',
      p95: '250ms',
      p99: '500ms',
    },
    throughput: {
      requestsPerSecond: 150,
      requestsPerMinute: 9000,
      requestsPerHour: 540000,
    },
    errorRate: {
      current: '0.1%',
      last24h: '0.2%',
      last7d: '0.15%',
    },
    uptime: {
      current: '99.9%',
      last24h: '99.95%',
      last7d: '99.8%',
    },
  };

  return NextResponse.json({ success: true, data: performanceMetrics });
}
