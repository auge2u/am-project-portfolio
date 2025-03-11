import React from 'react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

/**
 * DesignSystem component
 * 
 * This component serves as a living documentation of the design system.
 * It showcases all the design elements, colors, typography, and components
 * that should be used throughout the application.
 * 
 * Use this as a reference when implementing new features to ensure
 * consistency with the design guidelines.
 */
export const DesignSystem: React.FC = () => {
  return (
    <div className="container py-10 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Design System</h2>
        <p className="text-muted-foreground">
          This page showcases the design system elements used throughout the application.
          Refer to this guide when implementing new features to ensure consistency.
        </p>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorCard name="background" variable="--background" className="bg-background text-foreground" />
          <ColorCard name="foreground" variable="--foreground" className="bg-foreground text-background" />
          <ColorCard name="primary" variable="--primary" className="bg-primary text-primary-foreground" />
          <ColorCard name="secondary" variable="--secondary" className="bg-secondary text-secondary-foreground" />
          <ColorCard name="muted" variable="--muted" className="bg-muted text-muted-foreground" />
          <ColorCard name="accent" variable="--accent" className="bg-accent text-accent-foreground" />
          <ColorCard name="destructive" variable="--destructive" className="bg-destructive text-destructive-foreground" />
          <ColorCard name="border" variable="--border" className="bg-border text-foreground border" />
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Typography</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Page Title (text-2xl font-bold)</h1>
            <h2 className="text-xl font-semibold">Section Heading (text-xl font-semibold)</h2>
            <h3 className="text-lg font-semibold">Card Title (text-lg font-semibold)</h3>
            <p className="text-base">Body Text (text-base)</p>
            <p className="text-sm text-muted-foreground">Secondary Text (text-sm text-muted-foreground)</p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Components */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Components</h3>
        
        {/* Buttons */}
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Buttons</h4>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-2 pt-4">
          <h4 className="text-lg font-medium">Cards</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Card Action</Button>
              </CardFooter>
            </Card>
            
            <Card className="border-primary">
              <CardHeader className="bg-primary/10">
                <CardTitle>Featured Card</CardTitle>
                <CardDescription>With primary border and header background</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has a primary border and header background.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Primary Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Spacing</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Gap Sizes</h4>
            <div className="flex flex-col space-y-4">
              <SpacingExample size="2" label="gap-2 (8px)" />
              <SpacingExample size="4" label="gap-4 (16px)" />
              <SpacingExample size="6" label="gap-6 (24px)" />
              <SpacingExample size="8" label="gap-8 (32px)" />
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Border Radius</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BorderRadiusExample size="sm" label="rounded-sm" />
          <BorderRadiusExample size="md" label="rounded-md" />
          <BorderRadiusExample size="lg" label="rounded-lg" />
        </div>
      </section>
    </div>
  );
};

interface ColorCardProps {
  name: string;
  variable: string;
  className?: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, variable, className }) => {
  return (
    <div className={cn("p-4 rounded-md", className)}>
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span>{variable}</span>
      </div>
    </div>
  );
};

interface SpacingExampleProps {
  size: string;
  label: string;
}

const SpacingExample: React.FC<SpacingExampleProps> = ({ size, label }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground mb-2">{label}</span>
      <div className={`flex gap-${size}`}>
        <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground">1</div>
        <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground">2</div>
        <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center text-primary-foreground">3</div>
      </div>
    </div>
  );
};

interface BorderRadiusExampleProps {
  size: 'sm' | 'md' | 'lg';
  label: string;
}

const BorderRadiusExample: React.FC<BorderRadiusExampleProps> = ({ size, label }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-muted-foreground mb-2">{label}</span>
      <div className={`w-32 h-32 bg-primary rounded-${size} flex items-center justify-center text-primary-foreground`}>
        {size}
      </div>
    </div>
  );
};

export default DesignSystem;