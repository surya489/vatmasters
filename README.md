# VAT Masters

VAT Masters is a full-stack Next.js website for a VAT and tax consulting business. The site includes marketing sections, a contact form, API routes, MongoDB storage, and a users/submissions page where submitted contact messages can be viewed.

## What This Project Does

- Shows the VAT Masters marketing website at `/`
- Shows the contact form at `/contact`
- Validates contact form input on the client and server
- Saves successful contact submissions to MongoDB Atlas
- Redirects to `/users` after a successful form submission
- Lists saved contact submissions on the `/users` page

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- MongoDB Atlas
- Mongoose
- Zod validation
- Bootstrap-style CSS and custom public CSS files

## Project Structure

```text
app/
  api/contact/                 POST endpoint for form submission
  api/contact-submissions/     GET endpoint for submitted users/messages
  contact/                     Contact form page
  users/                       Submitted contacts page
components/
  ContactForm.tsx              Form UI and submit logic
  site/                        Homepage sections
lib/
  mongo.ts                     MongoDB connection helper
  validators/contact.ts        Shared contact form validation schema
models/
  ContactMessage.ts            MongoDB/Mongoose contact message model
public/
  vatmasters.css               Main imported site CSS
  site-section-fixes.css       Extra section fixes and overrides
```

## Clone And Run Locally

Clone the repository:

```bash
git clone https://github.com/surya489/vatmasters.git
cd vatmasters
```

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Add your MongoDB connection details to `.env`:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
MONGODB_DB_NAME=vatmaster
```

Run the development server:

```bash
npm run dev
```

Open the site:

```text
http://localhost:3000
```

## MongoDB Atlas Setup

The contact form will not work until MongoDB Atlas is configured.

1. Create or open a MongoDB Atlas cluster.
2. Create a database user from **Database Access**.
3. Copy the connection string from **Connect > Drivers**.
4. Paste it into `.env` as `MONGODB_URI`.
5. Go to **Network Access**.
6. Add your current IP address for local development.
7. Wait a minute for Atlas to apply the change.
8. Restart the dev server after changing `.env`.

For quick testing only, Atlas can allow all IPs:

```text
0.0.0.0/0
```

Use that carefully because it allows network access from anywhere. Never commit `.env` or real database credentials.

## How Form Submission Works

1. User opens `/contact`.
2. `components/ContactForm.tsx` validates the form with the shared Zod schema.
3. On submit, the form sends a `POST` request to `/api/contact`.
4. `app/api/contact/route.ts` validates the payload again on the server.
5. The API connects to MongoDB using `lib/mongo.ts`.
6. The contact message is saved using `models/ContactMessage.ts`.
7. If saving succeeds, the browser redirects to `/users`.
8. `/users` loads submissions from `/api/contact-submissions`.

## Test The Complete Flow

Start the app:

```bash
npm run dev
```

Open:

```text
http://localhost:3000/contact
```

Fill in the form and submit it. If MongoDB is configured correctly, the page redirects to:

```text
http://localhost:3000/users
```

The submitted contact should appear in the users/submissions list.

You can also open the users page directly:

```text
http://localhost:3000/users
```

## Environment Variables

`MONGODB_URI`

Required. MongoDB Atlas connection string used by the contact form API.

`MONGODB_DB_NAME`

Optional. Database name to use. If omitted, MongoDB uses the default database from the connection string.

Example `.env`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=vatmaster
```

## Common Errors

### Missing MONGODB_URI environment variable

Your `.env` file is missing or does not contain `MONGODB_URI`.

Fix:

```bash
cp .env.example .env
```

Then add your real MongoDB URI and restart the dev server.

### Could not connect to any servers in your MongoDB Atlas cluster

Atlas is usually blocking your IP address.

Fix:

1. Open MongoDB Atlas.
2. Go to **Network Access**.
3. Add your current IP address.
4. Restart the app.

### Form shows validation errors

The form requires:

- First name
- Last name
- Valid email
- Valid phone number
- Message with at least 10 characters

## Available Scripts

Start local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Deploying To Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add these environment variables in Vercel project settings:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
MONGODB_DB_NAME=vatmaster
```

4. Make sure MongoDB Atlas allows Vercel to connect.
5. Deploy.

Vercel should automatically detect Next.js and run:

```bash
npm run build
```

After deployment, test:

```text
https://your-vercel-domain.vercel.app/contact
```

Submit the form, then confirm the redirect and saved data at:

```text
https://your-vercel-domain.vercel.app/users
```

## Git Commands

First push:

```bash
git add .
git commit -m "Initial VAT Masters full stack site"
git branch -M main
git remote add origin https://github.com/surya489/vatmasters.git
git push -u origin main
```

Normal updates:

```bash
git add .
git commit -m "Update project"
git push
```

If the remote already has commits and Git says histories are unrelated:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Security Notes

- Do not commit `.env`.
- Keep real MongoDB credentials in `.env` locally and in Vercel environment variables for deployment.
- If a database password is exposed, rotate it in MongoDB Atlas.
- Do not leave `0.0.0.0/0` enabled unless you understand the risk.
