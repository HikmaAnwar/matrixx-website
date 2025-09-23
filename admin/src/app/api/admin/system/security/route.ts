import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock security status - in a real app, this would check actual security status
  const securityStatus = {
    ssl: {
      enabled: true,
      expiry: '2024-12-31T23:59:59Z',
      grade: 'A+',
    },
    firewall: {
      enabled: true,
      blockedRequests: 1234,
      lastIncident: '2024-01-10T15:30:00Z',
    },
    updates: {
      system: 'up-to-date',
      packages: 'up-to-date',
      lastUpdate: '2024-01-15T02:00:00Z',
    },
    backups: {
      enabled: true,
      lastBackup: '2024-01-15T02:00:00Z',
      retention: '30 days',
    },
  };

  return NextResponse.json({ success: true, data: securityStatus });
}
