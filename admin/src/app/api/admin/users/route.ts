import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock user management data - in a real app, this would come from a database
  const users = [
    {
      id: '1',
      email: 'admin@matrixx.com',
      name: 'Admin User',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-15T10:30:00Z',
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      email: 'editor@matrixx.com',
      name: 'Content Editor',
      role: 'editor',
      status: 'active',
      lastLogin: '2024-01-15T09:15:00Z',
      createdAt: '2024-01-05T00:00:00Z',
    },
    {
      id: '3',
      email: 'viewer@matrixx.com',
      name: 'Content Viewer',
      role: 'viewer',
      status: 'inactive',
      lastLogin: '2024-01-10T14:20:00Z',
      createdAt: '2024-01-08T00:00:00Z',
    },
  ];

  return NextResponse.json({ success: true, data: users });
}

export async function POST(request: NextRequest) {
  try {
    const { email, name, role, password } = await request.json();

    if (!email || !name || !role || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Mock user creation - in a real app, you would create in database
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      role,
      status: 'active',
      lastLogin: null,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      data: newUser,
    });
  } catch (error) {
    return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Mock user update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'User updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'User update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Mock user deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'User deletion failed' }, { status: 500 });
  }
}
