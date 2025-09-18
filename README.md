# Nuxt 4 + Vuetify 3 + SQLite + Authentication Boilerplate

A modern, full-stack boilerplate with authentication system built on the latest technologies.

## 🚀 What's New in This Version

### ⬆️ **Major Upgrades**
- **Nuxt 4.1.2** - Latest version with improved performance and new features
- **Vuetify 3.10.2** - Updated to latest Material Design components
- **Vue 3.5.11** - Latest Vue with better reactivity and performance
- **SQLite Database** - Lightweight, file-based database perfect for development
- **Modern SASS** - Updated to use `@use` instead of deprecated `@import`

### 🔐 **Complete Authentication System**
- **User Registration & Login** - Full auth flow with validation
- **Password Encryption** - Custom AES-256-GCM encryption for secure password storage
- **Session Management** - Persistent login sessions with sessionStorage
- **Route Protection** - Global middleware protecting authenticated routes
- **Beautiful UI** - Vuetify-based login/register forms with validation
- **API Security** - Server-side middleware for API endpoint protection

### 🛠️ **Technical Improvements**
- **TypeScript Support** - Fully typed authentication system
- **Custom Encryption** - Replaced problematic third-party encryption with reliable custom solution
- **Error Handling** - Comprehensive error handling throughout the application
- **Clean Architecture** - Well-organized code structure with separation of concerns
- **Modern Dependencies** - All packages updated to latest compatible versions

## 📋 Requirements

- **Node.js**: >=22.0.0
- **Package Manager**: Yarn 4.x (recommended) or npm

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Using Yarn (recommended)
yarn install

# Using npm
npm install
```

### 2. Environment Setup
The `.env` file is automatically created with:
```env
DATABASE_URL="file:./dev.db"
PRISMA_FIELD_ENCRYPTION_KEY="your-encryption-key"
```

### 3. Initialize Database
```bash
# Generate Prisma client and create database
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start Development Server
```bash
# Using Yarn
yarn dev

# Using npm
npm run dev
```

Visit `http://localhost:3000` - you'll be redirected to the authentication page.

## 🎯 Features

### 🔐 Authentication
- **Registration**: Create new user accounts with email, username, and full name
- **Login**: Secure authentication with encrypted password verification
- **Session Management**: Persistent login sessions across browser refreshes
- **Automatic Redirects**: Smart routing between auth and protected pages
- **Logout**: Clean session termination

### 🎨 UI/UX
- **Responsive Design**: Mobile-first Vuetify components
- **Form Validation**: Real-time validation with helpful error messages
- **Loading States**: Visual feedback during API operations
- **Success/Error Alerts**: Clear user feedback for all operations
- **Toggle Login/Register**: Seamless switching between auth modes

### 🔒 Security
- **Password Encryption**: AES-256-GCM encryption for stored passwords
- **Input Validation**: Both client and server-side validation
- **API Protection**: Middleware preventing unauthorized API access
- **Secure Sessions**: sessionStorage-based session management
- **Error Security**: No sensitive data exposed in error messages

### 🗄️ Database
- **SQLite**: Lightweight, file-based database
- **Prisma ORM**: Type-safe database operations
- **Migration System**: Database schema versioning
- **User Model**: Complete user management with encrypted passwords

## 📁 Project Structure

```
├── server/
│   ├── api/auth/           # Authentication API endpoints
│   ├── middleware/         # Server-side middleware
│   └── utils/
│       ├── encryption.ts   # Custom encryption utilities
│       └── user/          # User management logic
├── composables/
│   └── useAuth.ts         # Authentication composable
├── middleware/
│   └── auth.global.ts     # Route protection middleware
├── pages/
│   ├── auth/index.vue     # Login/Register page
│   └── index.vue          # Protected home page
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
└── types/
    └── user.ts            # TypeScript type definitions
```

## 🛠️ Development

### Database Operations
```bash
# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma migrate reset

# Generate new migration
npx prisma migrate dev --name migration_name
```

### Build & Deploy
```bash
# Build for production
yarn build

# Preview production build
yarn preview
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Example Usage
```javascript
// Registration
const response = await $fetch('/api/auth/register', {
  method: 'POST',
  body: {
    email: 'user@example.com',
    password: 'securepassword',
    username: 'username',
    fullname: 'Full Name'
  }
})

// Login
const response = await $fetch('/api/auth/login', {
  method: 'POST',
  body: {
    email: 'user@example.com',
    password: 'securepassword'
  }
})
```

## 🎨 Customization

### Styling
- Modify `assets/styles/_variables.scss` for theme customization
- Update Vuetify theme in `plugins/vuetify.js`
- Custom styles in `assets/styles/main.scss`

### Authentication
- Extend user model in `prisma/schema.prisma`
- Modify validation rules in `pages/auth/index.vue`
- Customize encryption in `server/utils/encryption.ts`

## 🔧 Configuration

### Nuxt Configuration
Key configurations in `nuxt.config.ts`:
- Vuetify integration
- SASS preprocessing
- Pinia state management
- Compatibility date for Nuxt 4

### Database Configuration
SQLite database configured in:
- `prisma/schema.prisma` - Schema definition
- `.env` - Database URL configuration

## 📖 Documentation

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Nuxt 4, Vue 3, Vuetify, and modern web technologies.**
