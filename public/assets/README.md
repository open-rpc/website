# Assets Directory

This directory contains static assets for the Open-RPC website.

## Directory Structure

### `/logos`
Company logos for the "Used By" section on the landing page.
- Format: SVG or PNG (recommended)
- Size: 120x60px (or proportional)
- Style: Should work on both light and dark backgrounds
- Naming: Use kebab-case, e.g., `company-name.svg`

### `/sponsors`
Sponsor logos displayed in the sponsors section.
- Format: SVG or PNG (recommended)
- Sizes:
  - Gold: 192x96px
  - Silver: 144x80px
  - Bronze: 112x64px
- Style: Should work on both light and dark backgrounds
- Naming: Use kebab-case, e.g., `sponsor-name.svg`

### `/icons`
Feature icons and other UI elements.
- Format: SVG (preferred)
- Size: 48x48px (or scalable)
- Style: Should support dark mode
- Naming: Use kebab-case, e.g., `feature-name.svg`

## Usage

To add a new logo or asset:

1. Add the file to the appropriate directory
2. Update the corresponding configuration in `src/app/config/site.ts`
3. Reference using the path `/assets/{category}/{filename}`

Example:
```typescript
{
  name: 'Company Name',
  logo: '/assets/logos/company-name.svg',
  url: 'https://company.com'
}
```

## Guidelines

- Use SVG format when possible for better scalability
- Optimize files before adding them (use tools like SVGO)
- Ensure logos are readable at small sizes
- Test in both light and dark modes
- Keep file sizes reasonable (< 50KB per logo)

