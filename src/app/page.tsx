"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSupportClick = () => {
    const element = document.getElementById('faq');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Gomez Trees"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Houston's Trusted Tree Care Experts"
      description="Over 30 years of family-owned excellence in tree maintenance, landscaping, and emergency care. Get a free quote for your property today."
      leftCarouselItems={[{ imageSrc: "http://img.b2bpic.net/free-photo/portrait-lumberjack-woodcutter-standing-by-tree-trunk-woods-holding-chainsaw_342744-251.jpg?_wi=1" }]}
      rightCarouselItems={[{ imageSrc: "http://img.b2bpic.net/free-photo/view-backyard-garden-digital-art-style_23-2151488214.jpg?_wi=1" }]}
      buttons={[{ text: "Get Free Quote", onClick: handleContactClick }]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="A Legacy of Professional Care"
      description="For over 30 years, Gomez Trees & Landscaping has been serving the Houston community."
      buttons={[{ text: "Learn More", onClick: handleContactClick }]}
      imageSrc="http://img.b2bpic.net/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22881.jpg?_wi=1"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      title="Expert Solutions"
      description="Comprehensive services backed by certification."
      accordionItems={[]}
      videoSrc="http://img.b2bpic.net/free-photo/view-backyard-garden-digital-art-style_23-2151488214.jpg?_wi=2"
      mediaAnimation="none"
      useInvertedBackground={false}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "30+", title: "Years Experience", description: "Serving Houston.", imageSrc: "http://img.b2bpic.net/free-photo/suburban-housing_53876-14307.jpg" }
      ]}
      title="Proven Performance"
      description="Years of dedication."
      buttons={[{ text: "View Our Work", onClick: handleContactClick }]}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      title="Our Services"
      description="Professional tree care services tailored to your needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      title="What Our Clients Say"
      description="Trusted by homeowners."
      testimonials={[]}
      buttons={[{ text: "Get a Quote", onClick: handleContactClick }]}
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      faqs={[]}
      title="Common Questions"
      description="Everything you need to know about our services."
      faqsAnimation="slide-up"
      buttons={[{ text: "Need more info?", onClick: handleContactClick }]}
      textboxLayout="default"
      useInvertedBackground={false}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Get Your Free Quote Today"
      description="Contact us for expert tree care."
      inputs={[{ name: "name", type: "text", placeholder: "Name" }, { name: "email", type: "email", placeholder: "Email" }]}
      onSubmit={(data) => console.log(data)}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      bottomLeftText="© 2024 Gomez Trees"
      bottomRightText="All Rights Reserved"
      columns={[
        { title: "Support", items: [{ label: "FAQ", onClick: handleSupportClick }, { label: "Contact", onClick: handleContactClick }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}