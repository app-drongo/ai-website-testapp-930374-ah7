'use client';

import { Zap, Shield, Users, Code, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  badge: 'Features',
  title: 'Everything you need to build amazing apps',
  subtitle:
    'Our comprehensive platform provides all the tools and features you need to create, deploy, and scale modern web applications with confidence.',
  ctaText: 'Explore All Features',
  ctaHref: '/features',
  features: [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description:
        'Optimized for speed with advanced caching, CDN integration, and performance monitoring built-in.',
      benefits: ['99.9% uptime guarantee', 'Global CDN network', 'Real-time monitoring'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.',
      benefits: ['SOC 2 Type II certified', 'GDPR compliant', 'Advanced threat detection'],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'Built for teams with real-time collaboration, role-based permissions, and integrated communication tools.',
      benefits: ['Real-time editing', 'Role management', 'Team analytics'],
    },
    {
      icon: Code,
      title: 'Developer Experience',
      description:
        'Streamlined workflows with powerful APIs, comprehensive documentation, and developer-friendly tools.',
      benefits: ['RESTful APIs', 'SDK libraries', 'Extensive documentation'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description:
        'Responsive design and mobile-first approach ensuring perfect experience across all devices.',
      benefits: ['Progressive Web App', 'Touch optimized', 'Offline support'],
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description:
        'Deploy worldwide with multi-region support, automatic scaling, and localization features.',
      benefits: ['Multi-region deployment', 'Auto-scaling', 'i18n support'],
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Footer(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const featureVariants = {
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

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={ref}
      data-editable="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={headerVariants} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              <span data-editable="badge">{config.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span data-editable="title">{config.title}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {config.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  whileHover="hover"
                  className="group"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <Icon className="size-7 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>

                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                      {/* Benefits */}
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="size-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div variants={headerVariants} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="group px-8 py-6 text-base"
                onClick={() => navigate(config.ctaHref)}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
