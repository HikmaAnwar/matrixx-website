import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const uploadedFiles = [];

    for (const file of files) {
      // In a real app, you would upload to cloud storage (AWS S3, Cloudinary, etc.)
      // For now, we'll simulate the upload
      const fileData = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        filename: file.name,
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        url: URL.createObjectURL(file), // This won't work in production
        alt: '',
        uploadedBy: 'admin',
        createdAt: new Date().toISOString(),
      };

      uploadedFiles.push(fileData);
    }

    return NextResponse.json({
      success: true,
      message: `${files.length} file(s) uploaded successfully`,
      data: uploadedFiles,
    });
  } catch (error) {
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}
