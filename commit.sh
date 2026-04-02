#!/bin/bash

# Check git status
echo "Current git status:"
git status

# Add all files
echo ""
echo "Adding all files..."
git add -A

# Create initial commit
echo ""
echo "Creating initial commit..."
git commit -m "Initial commit: Deploy evolvNex web application

- Set up Next.js clinic website project
- Configure styling and components
- Add API routes and backend setup
- Ready for production deployment"

# Show the commit
echo ""
echo "Commit created successfully!"
git log --oneline -1
