This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


**ValueMe App Goals:
**
1. Create an app that anyone can access to search occupations given wage value based on input values from user (occupation, zip code, gender, age, race/ ethnicity, experience)
2. App will also show what that occupation should be valued at based on multiple factors (calculated value of labor versus overall profit of company, historic wage growth versus inflation, historic wage inequalities [CEO vs average earners wage discrepencies], etc)
3. Main search form will be geared towards occupations in for-profit companies. Alternative search can be created for not or non-profit companies and occupations therein. This is meaningful because wage discrepancies in these other sectors have different reasons and different solutions.
4. Who is this product being "sold" to?
5. What is the use of this product? What will clients use this product for?
6. What problem is this product solving?
7. What features will this app have? (Main page - header, logo, valueMe button -> main search form, Main Search Form -> input values then hit submit or reset -> searches BLS API and data.json or alternative API's to show client the "as it is now" data pertaining to the searched occupation within the search boundaries or their input && will show "what your value is" or the actual calculated value of their labor and time based on the factors listed above.
8. Alternative search idea (non-profit occupations): Search criteria can be the same or similar but calulation of value will be trickier, as many occupations in this sector do not have an immediate revenue outcome **EX: Teachers, fire fighters, police, other government workers, etc.**
