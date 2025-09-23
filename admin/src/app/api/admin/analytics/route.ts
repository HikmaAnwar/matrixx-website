import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock analytics data - in a real app, this would come from Google Analytics or similar
  const analytics = {
    overview: {
      totalVisitors: 12543,
      pageViews: 45678,
      bounceRate: '45%',
      avgSessionDuration: '2m 30s',
    },
    topPages: [
      { path: '/', views: 12345, visitors: 5432 },
      { path: '/about', views: 8765, visitors: 3210 },
      { path: '/services', views: 6543, visitors: 2345 },
      { path: '/products', views: 4321, visitors: 1876 },
      { path: '/contact', views: 2109, visitors: 987 },
    ],
    trafficSources: [
      { source: 'Direct', visitors: 5432, percentage: '43%' },
      { source: 'Google', visitors: 3210, percentage: '26%' },
      { source: 'Social Media', visitors: 1876, percentage: '15%' },
      { source: 'Referral', visitors: 1234, percentage: '10%' },
      { source: 'Other', visitors: 791, percentage: '6%' },
    ],
    deviceBreakdown: [
      { device: 'Desktop', visitors: 6789, percentage: '54%' },
      { device: 'Mobile', visitors: 4567, percentage: '36%' },
      { device: 'Tablet', visitors: 1187, percentage: '10%' },
    ],
  };

  return NextResponse.json({ success: true, data: analytics });
}
