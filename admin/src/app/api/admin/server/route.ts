import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock server status - in a real app, this would check actual server status
  const serverStatus = {
    system: {
      os: 'Ubuntu 20.04 LTS',
      uptime: '15 days, 3 hours',
      loadAverage: [0.5, 0.8, 1.2],
      cpu: {
        usage: '25%',
        cores: 4,
        temperature: '45°C',
      },
      memory: {
        total: '8GB',
        used: '6.2GB',
        free: '1.8GB',
        usage: '77%',
      },
      disk: {
        total: '100GB',
        used: '45GB',
        free: '55GB',
        usage: '45%',
      },
    },
    services: [
      {
        name: 'nginx',
        status: 'running',
        uptime: '15 days',
        port: 80,
      },
      {
        name: 'postgresql',
        status: 'running',
        uptime: '15 days',
        port: 5432,
      },
      {
        name: 'redis',
        status: 'running',
        uptime: '15 days',
        port: 6379,
      },
      {
        name: 'node',
        status: 'running',
        uptime: '2 hours',
        port: 3000,
      },
    ],
    network: {
      interfaces: [
        {
          name: 'eth0',
          status: 'up',
          ip: '192.168.1.100',
          speed: '1Gbps',
        },
      ],
      connections: {
        established: 45,
        listening: 12,
        timeWait: 8,
      },
    },
  };

  return NextResponse.json({ success: true, data: serverStatus });
}
