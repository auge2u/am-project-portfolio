#!/bin/bash

# This script installs all the required shadcn/ui components for the portfolio project
# It ensures that the design system is properly implemented with consistent components

echo "Installing shadcn/ui components..."

# Initialize shadcn/ui if not already initialized
if [ ! -f "components.json" ]; then
  echo "Initializing shadcn/ui..."
  npx shadcn-ui@latest init --yes
fi

# Install required components
echo "Installing UI components..."

# Layout components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add separator

# Form components
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
npx shadcn-ui@latest add slider

# Navigation components
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add dropdown-menu

# Feedback components
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add toaster
npx shadcn-ui@latest add progress

# Overlay components
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tooltip

# Data display components
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add scroll-area

echo "All UI components have been installed successfully!"
echo "You can now use these components to build your application following the design guide."