import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

try {
  console.log('Initializing git repository...');
  execSync('git init', { cwd: projectRoot, stdio: 'inherit' });

  console.log('Adding git remote...');
  execSync('git remote add origin https://github.com/Ankurking11/evolvNex_web_gen.git', { 
    cwd: projectRoot, 
    stdio: 'inherit' 
  });

  console.log('Staging all files...');
  execSync('git add -A', { cwd: projectRoot, stdio: 'inherit' });

  console.log('Creating initial commit...');
  execSync('git commit -m "Initial commit: evolvNex clinic website deployment ready" --allow-empty', { 
    cwd: projectRoot, 
    stdio: 'inherit' 
  });

  console.log('\n✅ Initial commit created successfully!');
  console.log('Ready for deployment to Vercel.');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
