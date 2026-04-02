import { execSync } from 'child_process';

try {
  // Stage all files
  console.log('Staging all files...');
  execSync('git add -A', { cwd: process.cwd(), stdio: 'inherit' });

  // Check if there are changes to commit
  const status = execSync('git status --porcelain', { cwd: process.cwd() }).toString().trim();
  
  if (!status) {
    console.log('No changes to commit.');
    process.exit(0);
  }

  // Create initial commit
  console.log('Creating initial commit for deployment...');
  execSync('git commit -m "Initial commit: Deploy evolvNex clinic website\n\n- Set up Next.js project structure\n- Configure Tailwind CSS and styling\n- Create clinic website components and pages\n- Set up API routes\n- Configure deployment ready for Vercel"', { 
    cwd: process.cwd(), 
    stdio: 'inherit' 
  });

  console.log('✓ Initial commit created successfully!');
  console.log('Ready for deployment to Vercel.');
  
} catch (error) {
  console.error('Error creating commit:', error.message);
  process.exit(1);
}
