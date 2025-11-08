'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSmartNavigation } from '@/hooks/useSmar
const navigation = [
  {
    name: "Home",
    href: "#hero",
    textEditableId: "text-nav-home",
    hrefEditableId: "link-nav-home"
  },
  {
    name: "Features",
    href: "#features",
    textEditableId: "text-nav-features",
    hrefEditableId: "link-nav-features"
  }
];
tNavigation';

const DEFAULT_HERO = {
  badge: '🚀 New: AI-Powered Development Tools',
  title: 'Build Modern Web Apps',
  titleHighlight: '10x Faster',
  subtitle:
    'Create stunning, responsive websites with our cutting-edge development platform. From concept to deployment in minutes, not months.',
  primaryCta: 'Start Building Free',
  primaryCtaHref: '/signup',
  secondaryCta: 'Watch Demo',
  secondaryCtaHref: '/demo',
  productImage: '/api/placeholder/600/400',
  productImageAlt: 'Modern web development platform interface',
  stats: [
    { value: '50K+', label: 'Developers' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ],
  features: [
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Users, text: 'Team Collaboration' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Navigation(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
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
      ref={ref}
      data-editable="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary"
            >
              <span data-editable="badge">{config.badge}</span>
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                variants={titleVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span data-editable="title" className="text-foreground">
                  {config.title}
                </span>
              </motion.h1>

              <motion.div
                variants={highlightVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span
                  data-editable="titleHighlight"
                  className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                >
                  {config.titleHighlight}
                </span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={titleVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              <span data-editable="subtitle">{config.subtitle}</span>
            </motion.p>

            {/* Features */}
            <motion.div variants={titleVariants} className="flex flex-wrap gap-6">
              {config.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="size-4 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={titleVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                <Button
                  size="lg"
                  className="group px-8 py-6 text-base"
                  onClick={() => navigate(config.primaryCtaHref)}
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                >
                  <span data-editable="primaryCta">{config.primaryCta}</span>
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
                <Button
                  variant="outline"
                  size="lg"
                  className="group px-8 py-6 text-base"
                  onClick={() => navigate(config.secondaryCtaHref)}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                >
                  <Play className="mr-2 size-5" />
                  <span data-editable="secondaryCta">{config.secondaryCta}</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={titleVariants}
              className="flex gap-8 pt-8 border-t border-border/50"
            >
              {config.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product Image */}
          <motion.div variants={floatingVariants} animate="animate" className="relative">
            <div className="relative z-10">
              <img
                src={config.productImage}
                alt={config.productImageAlt}
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/50"
                data-editable="productImage"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: 'linear' },
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/30 rounded-full blur-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
