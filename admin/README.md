# Matrixx Admin Panel

A comprehensive admin panel for managing the Matrixx website content dynamically.

## Features

### Content Management
- **Hero Section**: Manage main hero content, titles, descriptions, and CTAs
- **Services**: Add, edit, and reorder service items with icons and descriptions
- **Products**: Manage product showcase with images, features, and descriptions
- **About Content**: Manage different sections of the About page
- **FAQ**: Add and organize frequently asked questions
- **Clients**: Manage client logos and information
- **Contact Information**: Manage contact details and social media links

### Media Management
- **Media Library**: Upload and manage images, documents, and other files
- **File Organization**: Organize media files with metadata and alt text

### System Management
- **Settings**: Configure company information and global settings
- **User Management**: Manage admin users and permissions
- **Analytics**: View website analytics and performance metrics
- **System Monitoring**: Monitor server health, performance, and alerts

### Advanced Features
- **API Management**: Manage API keys, rate limits, and webhooks
- **Email System**: Manage email templates, queue, and settings
- **Integrations**: Configure third-party integrations
- **Security**: Monitor security status and audit logs
- **Backup & Maintenance**: Automated backups and system maintenance

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the admin folder:
```bash
cd admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/admin](http://localhost:3000/admin) in your browser

### Default Login Credentials
- **Email**: admin@matrixx.com
- **Password**: admin123

## Project Structure

```
admin/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── page.tsx              # Dashboard
│   │   │   ├── hero/page.tsx         # Hero Section Management
│   │   │   ├── services/page.tsx     # Services Management
│   │   │   ├── products/page.tsx     # Products Management
│   │   │   ├── about/page.tsx        # About Content Management
│   │   │   ├── faq/page.tsx          # FAQ Management
│   │   │   ├── clients/page.tsx      # Clients Management
│   │   │   ├── contact/page.tsx      # Contact Info Management
│   │   │   ├── media/page.tsx        # Media Library
│   │   │   └── settings/page.tsx     # Settings
│   │   ├── api/
│   │   │   └── admin/
│   │   │       ├── route.ts          # Main API routes
│   │   │       ├── auth/             # Authentication endpoints
│   │   │       ├── upload/           # File upload endpoints
│   │   │       ├── analytics/        # Analytics endpoints
│   │   │       ├── monitoring/       # Monitoring endpoints
│   │   │       └── system/           # System management endpoints
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   └── layout/
│   │       └── AdminLayout.tsx       # Main admin layout
│   ├── lib/
│   │   └── utils.ts                  # Utility functions
│   └── types/
│       └── index.ts                  # TypeScript type definitions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## API Endpoints

### Authentication
- `POST /api/admin/auth/login` - Admin login

### Content Management
- `GET/POST/PUT/DELETE /api/admin` - CRUD operations for all content types
- `POST /api/admin/upload` - File upload

### System Management
- `GET /api/admin/dashboard/stats` - Dashboard statistics
- `GET /api/admin/system/status` - System status
- `GET /api/admin/system/logs` - System logs
- `GET/POST /api/admin/system/backup` - Backup management

### Analytics & Monitoring
- `GET /api/admin/analytics` - Website analytics
- `GET /api/admin/monitoring/metrics` - System metrics
- `GET /api/admin/monitoring/alerts` - System alerts

## Configuration

### Environment Variables
Create a `.env.local` file in the admin directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/matrixx_admin"

# Authentication
JWT_SECRET="your-jwt-secret-here"
NEXT_AUTH_SECRET="your-nextauth-secret"

# File Upload
UPLOAD_DIR="./uploads"
MAX_FILE_SIZE="10485760" # 10MB

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@domain.com"
SMTP_PASS="your-email-password"

# Third-party Integrations
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
MAILCHIMP_API_KEY="your-mailchimp-key"
```

### Database Setup
The admin panel uses mock data by default. To connect to a real database:

1. Set up your preferred database (PostgreSQL, MySQL, etc.)
2. Update the `DATABASE_URL` in your environment variables
3. Replace mock data in API routes with actual database queries
4. Consider using an ORM like Prisma or Drizzle for database management

### Authentication
The current implementation uses mock authentication. For production:

1. Implement proper JWT token generation and validation
2. Add password hashing (bcrypt)
3. Consider using NextAuth.js for OAuth integration
4. Add role-based access control

## Production Deployment

### Security Considerations
1. **Change default login credentials**
2. **Enable HTTPS**
3. **Set up proper authentication**
4. **Configure CORS appropriately**
5. **Set up rate limiting**
6. **Enable audit logging**
7. **Regular security updates**

### Performance Optimization
1. **Enable image optimization**
2. **Set up CDN for static assets**
3. **Configure caching strategies**
4. **Monitor performance metrics**
5. **Set up database indexing**

### Monitoring
1. **Set up error tracking (Sentry)**
2. **Configure uptime monitoring**
3. **Set up log aggregation**
4. **Monitor database performance**
5. **Set up backup strategies**

## Customization

### Adding New Content Types
1. Define types in `src/types/index.ts`
2. Create new API routes in `src/app/api/admin/`
3. Create management pages in `src/app/admin/`
4. Update navigation in `AdminLayout.tsx`

### Styling
The admin panel uses Tailwind CSS for styling. Customize:
- Colors and theme in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual components

### Adding Integrations
1. Create new API routes for the integration
2. Add configuration options in Settings
3. Implement the integration logic
4. Add monitoring and error handling

## Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Consistent naming conventions

### Testing
Add tests for:
- API endpoints
- Component functionality
- Integration testing
- End-to-end testing

## Support

For issues and feature requests, please refer to the main project documentation or contact the development team.

## License

This admin panel is part of the Matrixx website project. All rights reserved.
