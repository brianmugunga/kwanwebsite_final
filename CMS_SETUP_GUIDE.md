# Decap CMS Setup Guide

## Overview
Your website now has **Decap CMS** (formerly Netlify CMS) integrated! This allows you to manage content through a user-friendly admin interface without needing to know Git commands or code.

## What's Been Set Up

### 1. Admin Interface
- Location: `https://brianmugunga.github.io/kwanbh-website/admin/`
- A simple, intuitive interface for managing all your content

### 2. Content Collections
The CMS is configured to manage:
- **Blog Posts** - Write and publish articles
- **Publications** - Manage academic papers, books, and articles
- **Research Projects** - Track current and completed research
- **Service & Community** - Document professional service activities
- **Teaching** - Manage course information
- **CV Data** - Update education, experience, awards, and skills
- **Site Settings** - Control homepage content, about page, and general settings

### 3. File Structure
```
public/
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
├── content/                 # All your content stored here
│   ├── blog/
│   ├── publications/
│   ├── research/
│   ├── service/
│   ├── teaching/
│   ├── cv/
│   └── settings/
└── uploads/                 # Media files (images, PDFs, etc.)
```

## Next Steps: Enable GitHub Authentication

To use the CMS, you need to set up GitHub authentication. Choose **ONE** of these methods:

---

## Option 1: Netlify Identity (Recommended - Easiest)

This is the simplest option and works perfectly with GitHub Pages.

### Steps:

1. **Sign up for Netlify** (free): https://netlify.com
   - You don't need to host your site on Netlify, just use their Identity service

2. **Enable Netlify Identity**:
   - In Netlify Dashboard, go to: Site Settings → Identity → Enable Identity
   - Under Registration preferences, select "Invite only" (recommended)
   - Under External providers, enable GitHub

3. **Enable Git Gateway**:
   - In Identity settings, scroll to "Services" → "Git Gateway" → Enable
   - Connect to your GitHub repository

4. **Update CMS config**:
   - The config is already set for `git-gateway`
   - No changes needed to `public/admin/config.yml`

5. **Add Netlify Identity Widget to your site**:
   Add this to your `index.html` in the `<head>` section:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

6. **Invite yourself**:
   - In Netlify Dashboard → Identity → Invite users
   - Enter your email
   - Click the invite link and set a password

7. **Access CMS**:
   - Visit: `https://brianmugunga.github.io/kwanbh-website/admin/`
   - Log in with your Netlify Identity credentials

---

## Option 2: GitHub OAuth App (More Advanced)

This requires setting up your own OAuth application.

### Steps:

1. **Create GitHub OAuth App**:
   - Go to: https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - Application name: `KWANBH Website CMS`
     - Homepage URL: `https://brianmugunga.github.io/kwanbh-website/`
     - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Click "Register application"
   - Save your Client ID and Client Secret

2. **Set up Netlify as OAuth provider**:
   - Sign up for Netlify (free)
   - Create a new site (can be empty)
   - Go to: Site Settings → Access control → OAuth
   - Click "Install provider"
   - Select "GitHub"
   - Enter your Client ID and Client Secret

3. **Update CMS config**:
   Replace the backend section in `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: brianmugunga/kwanbh-website
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```

---

## Option 3: Local Development Mode (Testing Only)

For testing the CMS locally before setting up authentication:

1. **Install Decap CMS Proxy Server**:
   ```bash
   npm install -g decap-server
   ```

2. **Update CMS config**:
   Uncomment this line in `public/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

3. **Run both servers**:
   ```bash
   # Terminal 1: Run your dev server
   npm run dev

   # Terminal 2: Run CMS proxy
   npx decap-server
   ```

4. **Access local CMS**:
   - Visit: `http://localhost:5173/admin/`
   - No authentication required in local mode

**Note**: This only works locally and won't work on the deployed site!

---

## How to Use the CMS

Once authentication is set up:

1. **Access the CMS**: Visit `https://brianmugunga.github.io/kwanbh-website/admin/`

2. **Log in** with your configured authentication method

3. **Create/Edit Content**:
   - Click on any collection (Blog, Publications, etc.)
   - Click "New [Collection Name]" to create
   - Or click on existing items to edit
   - Use the rich text editor for content
   - Upload images and files directly

4. **Editorial Workflow** (optional):
   - Draft → In Review → Ready → Published
   - Great for collaborating or reviewing changes
   - To disable and publish directly, change in `config.yml`:
     ```yaml
     publish_mode: simple
     ```

5. **Publish Changes**:
   - Click "Publish" (or "Publish now" in workflow mode)
   - Changes are committed to your GitHub repository automatically
   - GitHub Pages will rebuild your site automatically

---

## Connecting Content to Your React Site

After setting up the CMS, you'll need to update your React components to read from the content files:

### Example: Reading Publications

```typescript
// In your Publications component
import { useEffect, useState } from 'react';

interface Publication {
  title: string;
  authors: string;
  year: number;
  abstract: string;
  // ... other fields
}

function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    // Fetch all publication files
    const loadPublications = async () => {
      // You'll need to implement a way to fetch these
      // Option 1: Import them statically
      // Option 2: Use a build-time script to generate an index
      // Option 3: Use Vite's import.meta.glob feature
    };
    loadPublications();
  }, []);

  return (
    <div>
      {publications.map(pub => (
        <article key={pub.title}>
          <h2>{pub.title}</h2>
          <p>{pub.authors}</p>
          <p>{pub.abstract}</p>
        </article>
      ))}
    </div>
  );
}
```

### Using Vite's import.meta.glob

```typescript
// Load all markdown/JSON files at build time
const publicationFiles = import.meta.glob('/public/content/publications/*.md', {
  as: 'raw',
  eager: true
});

// Parse frontmatter from markdown files
// Or if using JSON directly, parse JSON
```

---

## Important Notes

1. **Repository Permissions**:
   - Ensure the authentication method has write access to your repository
   - For Netlify Identity, this is handled automatically

2. **Branch**:
   - Check your default branch name (main or master)
   - Update in `config.yml` if needed

3. **Media Files**:
   - Images and files are stored in `/public/uploads/`
   - These will be committed to your repository
   - Accessible via `/uploads/filename.jpg` in your site

4. **Build Time**:
   - After publishing, GitHub Pages takes 1-5 minutes to rebuild
   - Refresh your site to see changes

5. **Content Format**:
   - Blog posts and text content: Markdown (.md)
   - Structured data (CV, settings): JSON
   - Both are committed to your repo

---

## Troubleshooting

### "Error: Failed to load config.yml"
- Check that `public/admin/config.yml` exists
- Verify YAML syntax is correct

### "Error: Authentication failed"
- Verify GitHub OAuth app credentials
- Check that callback URL is correct
- Ensure Netlify Identity is properly configured

### "Changes not appearing on site"
- Wait 2-5 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status
- Clear browser cache

### "Cannot upload images"
- Ensure `public/uploads/` directory exists
- Check repository permissions

---

## Next Steps

1. **Choose and complete authentication setup** (Option 1 recommended)
2. **Test the CMS** by creating a test blog post
3. **Update your React components** to read from content files
4. **Customize the CMS config** as needed for your workflow
5. **Consider adding a "What You See Is What You Get" preview** in the CMS config

---

## Resources

- **Decap CMS Documentation**: https://decapcms.org/docs/
- **Netlify Identity Guide**: https://docs.netlify.com/visitor-access/identity/
- **GitHub Pages + CMS Tutorial**: https://decapcms.org/docs/github-backend/

---

## Support

If you need help:
1. Check the Decap CMS documentation
2. Review GitHub repository issues
3. Test in local development mode first

**Your CMS is ready to use once you complete the authentication setup!**
