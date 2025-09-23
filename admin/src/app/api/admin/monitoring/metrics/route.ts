import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock monitoring metrics - in a real app, this would come from monitoring system
  const metrics = {
    system: {
      cpu: {
        current: 25,
        average: 30,
        peak: 85,
        trend: 'stable',
      },
      memory: {
        current: 77,
        average: 75,
        peak: 90,
        trend: 'increasing',
      },
      disk: {
        current: 45,
        average: 43,
        peak: 60,
        trend: 'stable',
      },
      network: {
        inbound: '125MB/s',
        outbound: '98MB/s',
        packets: 1500,
        errors: 2,
      },
    },
    application: {
      responseTime: {
        current: '120ms',
        average: '115ms',
        peak: '500ms',
        trend: 'stable',
      },
      throughput: {
        requestsPerSecond: 150,
        requestsPerMinute: 9000,
        requestsPerHour: 540000,
        trend: 'increasing',
      },
      errorRate: {
        current: '0.1%',
        average: '0.15%',
        peak: '2.5%',
        trend: 'decreasing',
      },
      uptime: {
        current: '99.9%',
        last24h: '99.95%',
        last7d: '99.8%',
        trend: 'stable',
      },
    },
    database: {
      connections: {
        current: 15,
        max: 100,
        average: 12,
        trend: 'stable',
      },
      queryTime: {
        current: '5ms',
        average: '8ms',
        peak: '50ms',
        trend: 'stable',
      },
      slowQueries: {
        current: 2,
        average: 3,
        peak: 15,
        trend: 'decreasing',
      },
    },
  };

  return NextResponse.json({ success: true, data: metrics });
}
