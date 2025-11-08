'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DEFAULT_FEATURES = {
  badge: 'Core Features',
  mainTitle: 'Complete Warehouse Management',
  mainTitleHighlight: 'Built for Modern Logistics',
  mainDescription:
    'Streamline your warehouse operations with our comprehensive ERP solution designed specifically for logistics and manufacturing businesses.',
  feature1Title: 'Real-Time Inventory Tracking',
  feature1Description:
    'Monitor stock levels, locations, and movements in real-time with barcode scanning and RFID integration.',
  feature1Badge: 'Inventory',
  feature2Title: 'Advanced Security & Compliance',
  feature2Description:
    'SOC 2 compliant with role-based access controls and complete audit trails for regulatory requirements.',
  feature2Badge: 'Security',
  feature3Title: 'Mobile Warehouse App',
  feature3Description:
    'Empower your warehouse staff with native mobile apps for picking, packing, and inventory management.',
  feature3Badge: 'Mobile',
  feature4Title: 'Multi-Location Management',
  feature4Description:
    'Manage multiple warehouses, distribution centers, and retail locations from a single dashboard.',
  feature4Badge: 'Multi-Site',
  feature5Title: 'Advanced Reporting & KPIs',
  feature5Description:
    'Track warehouse efficiency, labor productivity, and inventory turnover with 50+ pre-built reports.',
  feature5Badge: 'Analytics',
  feature6Title: 'Custom Workflows',
  feature6Description:
    'Configure picking strategies, approval workflows, and automated reorder points to match your processes.',
  feature6Badge: 'Automation',
  feature7Title: 'API & Integrations',
  feature7Description:
    'Seamlessly connect with existing ERP, accounting, and e-commerce systems via REST APIs.',
  feature7Badge: 'Integration',
  feature8Title: '24/7 Expert Support',
  feature8Description:
    'Dedicated support team with warehouse management expertise and 99.9% uptime guarantee.',
  feature8Badge: 'Support',
  feature9Title: 'Data Privacy & Backup',
  feature9Description:
    'Your operational data is encrypted, backed up daily, and never shared with third parties.',
  feature9Badge: 'Privacy',
  ctaQuestion: 'Ready to optimize your warehouse operations?',
  primaryCTA: 'Start 30-Day Free Trial',
  primaryCTAHref: '/',
  secondaryCTA: 'Schedule Demo',
  secondaryCTAHref: '/',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Zap,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
    },
    {
      icon: Shield,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
    },
    {
      icon: Smartphone,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
    },
    {
      icon: Globe,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
    },
    {
      icon: BarChart3,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
    },
    {
      icon: Palette,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
    },
    {
      icon: Code2,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
    },
    {
      icon: Headphones,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
    },
    {
      icon: Lock,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const iconRotateVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={cardVariants} whileHover="hover">
                <motion.div variants={cardHoverVariants}>
                  <Card className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                    {/* Background Gradient - pointer-events-none allows clicks to pass through */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <CardHeader className="relative">
                      <div className="flex items-center gap-4 mb-2">
                        <motion.div
                          className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                          variants={iconRotateVariants}
                        >
                          <Icon className="size-6 text-primary" />
                        </motion.div>
                        <Badge variant="secondary" className="text-xs">
                          <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative">
                      <CardDescription className="text-base leading-relaxed">
                        <span data-editable={`feature${index + 1}Description`}>
                          {feature.description}
                        </span>
                      </CardDescription>
                    </CardContent>

                    {/* Hover Effect Border - pointer-events-none allows clicks to pass through */}
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
              <Button
                className="px-6 py-3"
                onClick={() => navigate(config.primaryCTAHref)}
                data-editable-href="primaryCTAHref"
                data-href={config.primaryCTAHref}
              >
                <span data-editable="primaryCTA">{config.primaryCTA}</span>
              </Button>
            </motion.div>
            <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
              <Button
                variant="outline"
                className="px-6 py-3"
                onClick={() => navigate(config.secondaryCTAHref)}
                data-editable-href="secondaryCTAHref"
                data-href={config.secondaryCTAHref}
              >
                <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
