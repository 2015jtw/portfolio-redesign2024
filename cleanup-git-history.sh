#!/bin/bash

echo "🧹 Cleaning Git history to remove .env file..."

# Install git-filter-repo if not already installed
if ! command -v git-filter-repo &> /dev/null; then
    echo "📦 Installing git-filter-repo..."
    pip3 install git-filter-repo
fi

# Create a backup branch first
echo "💾 Creating backup branch..."
git branch backup-before-cleanup

# Remove .env.local from history
echo "🗑️  Removing .env.local from Git history..."
git filter-repo --path .env.local --invert-paths

# Force push to update remote
echo "🚀 Force pushing to remote..."
git push origin --force --all
git push origin --force --tags

echo "✅ Git history cleaned successfully!"
echo "📝 Your .env.local file has been removed from Git history"
echo "🔒 Make sure to update your .gitignore to prevent future commits"
