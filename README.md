# The Coffee Seeker ☕️

A modern web application to discover the best coffee shops anywhere. Built with Next.js, TypeScript, React, and integrated with Hygraph GraphQL API and Mapbox for interactive mapping.

## Features

- 🗺️ **Interactive Map**: View coffee shops on an interactive Mapbox map
- 🔍 **Advanced Search**: Search by name, address, description, or specialties
- 📍 **Location Filtering**: Filter by state and city with dynamic dropdowns
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- 🌙 **Dark/Light Theme**: Toggle between themes
- 📊 **Rich Data**: Display ratings, price ranges, specialties, and more
- ⚡ **Fast Performance**: Built with Next.js static generation

## Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: CSS Modules with SCSS
- **API**: Hygraph GraphQL API
- **Maps**: Mapbox GL JS
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Hygraph account (for content management)
- Mapbox account (for maps)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd thecoffeeseeker
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

```env
# Mapbox Access Token
# Get your free token from: https://account.mapbox.com/
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_access_token_here
```

4. Update your Hygraph GraphQL schema:
   Add these fields to your CoffeeShop content type:

- `latitude` (Number)
- `longitude` (Number)
- `state` (Text)
- `city` (Text)
- `description` (Rich Text)
- `rating` (Number)
- `priceRange` (Text)
- `specialties` (Text List)

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Setup

### Hygraph Configuration

1. Create a new project in Hygraph
2. Create a CoffeeShop content type with the following fields:

   - `title` (Text, required)
   - `website` (Text, required)
   - `directions` (Text, required)
   - `address` (Text, required)
   - `latitude` (Number)
   - `longitude` (Number)
   - `state` (Text)
   - `city` (Text)
   - `description` (Rich Text)
   - `rating` (Number)
   - `priceRange` (Text)
   - `specialties` (Text List)

3. Update the GraphQL endpoint in `src/pages/api/shops.ts` and `src/pages/index.tsx`

### Mapbox Setup

1. Sign up for a free account at [Mapbox](https://account.mapbox.com/)
2. Create an access token
3. Add the token to your `.env.local` file

## Data Structure

```typescript
interface CoffeeShop {
  title: string
  website: string
  directions: string
  address: string
  latitude?: number
  longitude?: number
  state?: string
  city?: string
  description?: string
  rating?: number
  priceRange?: string
  specialties?: string[]
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run storybook` - Start Storybook

## Deployment

The app is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository.
