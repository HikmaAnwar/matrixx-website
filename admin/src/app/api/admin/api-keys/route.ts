import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock API keys - in a real app, this would come from database
  const apiKeys = [
    {
      id: '1',
      name: 'Frontend API Key',
      key: 'ak_********',
      permissions: ['read'],
      lastUsed: '2024-01-15T10:30:00Z',
      status: 'active',
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '2',
      name: 'Mobile App Key',
      key: 'ak_********',
      permissions: ['read', 'write'],
      lastUsed: '2024-01-15T09:15:00Z',
      status: 'active',
      createdAt: '2024-01-01T00:00:00Z',
    },
    {
      id: '3',
      name: 'Webhook Key',
      key: 'ak_********',
      permissions: ['webhook'],
      lastUsed: '2024-01-10T14:20:00Z',
      status: 'inactive',
      createdAt: '2024-01-01T00:00:00Z',
    },
  ];

  return NextResponse.json({ success: true, data: apiKeys });
}

export async function POST(request: NextRequest) {
  try {
    const { name, permissions } = await request.json();

    if (!name || !permissions || !Array.isArray(permissions)) {
      return NextResponse.json({ error: 'Name and permissions are required' }, { status: 400 });
    }

    // Mock API key creation - in a real app, you would generate and save to database
    const newApiKey = {
      id: Date.now().toString(),
      name,
      key: `ak_${Math.random().toString(36).substr(2, 9)}`,
      permissions,
      lastUsed: null,
      status: 'active',
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: 'API key created successfully',
      data: newApiKey,
    });
  } catch (error) {
    return NextResponse.json({ error: 'API key creation failed' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'API key ID is required' }, { status: 400 });
    }

    // Mock API key update - in a real app, you would update in database
    return NextResponse.json({
      success: true,
      message: 'API key updated successfully',
      data: { id, ...updateData, updatedAt: new Date().toISOString() },
    });
  } catch (error) {
    return NextResponse.json({ error: 'API key update failed' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'API key ID is required' }, { status: 400 });
    }

    // Mock API key deletion - in a real app, you would delete from database
    return NextResponse.json({
      success: true,
      message: 'API key deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({ error: 'API key deletion failed' }, { status: 500 });
  }
}
