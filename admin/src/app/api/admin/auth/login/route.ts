import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Mock authentication - in a real app, you would verify credentials against a database
    if (email === 'admin@matrixx.com' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: '1',
            email: 'admin@matrixx.com',
            name: 'Admin User',
            role: 'admin',
          },
          token: 'mock-jwt-token', // In a real app, generate a proper JWT
        },
      });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
