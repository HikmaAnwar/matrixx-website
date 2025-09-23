import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock rate limits - in a real app, this would come from rate limiting configuration
  const rateLimits = [
    {
      id: '1',
      name: 'API Rate Limit',
      type: 'api',
      limit: 1000,
      window: '1h',
      current: 45,
      resetAt: '2024-01-15T11:00:00Z',
      status: 'active',
    },
    {
      id: '2',
      name: 'Login Rate Limit',
      type: 'auth',
      limit: 5,
      window: '15m',
      current: 2,
      resetAt: '2024-01-15T10:45:00Z',
      status: 'active',
    },
    {
      id: '3',
      name: 'Upload Rate Limit',
      type: 'upload',
      limit: 100,
      window: '1d',
      current: 23,
      resetAt: '2024-01-16T00:00:00Z',
      status: 'active',
    },
  ];

  return NextResponse.json({ success: true, data: rateLimits });
}

export async function PUT(request: NextRequest) {
  try {
    const { id, limit, window, status } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Rate limit ID is required' }, { status: 400 });
    }

    // Mock rate limit update - in a real app, you would update rate limiting configuration
    return NextResponse.json({
      success: true,
      message: 'Rate limit updated successfully',
      data: { id, limit, window, status, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Rate limit update failed' }, { status: 500 });
  }
}
