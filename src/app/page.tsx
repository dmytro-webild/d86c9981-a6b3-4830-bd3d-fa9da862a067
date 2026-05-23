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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Gomez Trees"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Houston's Trusted Tree Care Experts"
      description="Over 30 years of family-owned excellence in tree maintenance, landscaping, and emergency care. Get a free quote for your property today."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-lumberjack-woodcutter-standing-by-tree-trunk-woods-holding-chainsaw_342744-251.jpg?_wi=1",
          imageAlt: "Professional tree trimming",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-trimming-bough-brush-guy-works-backyard_1157-41449.jpg?_wi=1",
          imageAlt: "Tree removal services",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/walkway-tree_1150-12643.jpg",
          imageAlt: "Arborist services",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-prepares-climb-ropes-park_1304-4997.jpg",
          imageAlt: "Commercial landscaping",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cropped-view-gardening-worker-wearing-protective-gloves-while-trimming-plants_344912-2288.jpg",
          imageAlt: "Stump grinding",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-backyard-garden-digital-art-style_23-2151488214.jpg",
          imageAlt: "Residential tree care",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-operating-heavy-duty-leaf-blower_1153-7324.jpg",
          imageAlt: "Tree maintenance expert",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/darkhaired-man-using-portable-powered-leaf-blower-blow-beveled-leaves-from-footpath-back-yard_7502-10567.jpg",
          imageAlt: "Garden landscaping project",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gardener-garden-with-hut-cuts-tree-with-hedgehogs-against-sky_169016-10694.jpg",
          imageAlt: "Professional pruning",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/old-gardener-cuts-bush-with-large-metal-old-pruning-shears_169016-10697.jpg",
          imageAlt: "Sustainable lawn care",
        },
      ]}
      buttons={[
        {
          text: "Get Free Quote",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/asian-man-cutting-trees-using-electrical-chainsaw_1150-5896.jpg",
          alt: "Arborist 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-professional-gardener-holding-trimmer-yard_342744-539.jpg",
          alt: "Arborist 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-petrol-hedge-cutter-that-holding-afro-gardener_651396-1481.jpg",
          alt: "Arborist 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cropped-view-gardening-worker-wearing-protective-gloves-while-trimming-plants_344912-2285.jpg",
          alt: "Arborist 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/inspired-bearded-male-gardener-shaping-spiral-from-thuja-hedge-by-trimming-outside-side-view_7502-10568.jpg",
          alt: "Arborist 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Family Owned",
        },
        {
          type: "text",
          text: "24/7 Emergency Service",
        },
        {
          type: "text",
          text: "Serving Greater Houston",
        },
        {
          type: "text",
          text: "Free Estimates",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="A Legacy of Professional Care"
      description="For over 30 years, Gomez Trees & Landscaping has been serving the Houston community with unmatched expertise and a commitment to safety. As a family-owned business, we treat every lawn like our own, combining certified arborist techniques with personalized customer service."
      buttons={[
        {
          text: "Learn About Our History",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22881.jpg?_wi=1"
      imageAlt="Our arborist team"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Expert Solutions for Every Outdoor Need"
      description="From complex tree removal to pristine custom hardscaping, we provide comprehensive services backed by certification and insurance."
      accordionItems={[
        {
          id: "s1",
          title: "Tree Trimming & Pruning",
          content: "Enhance tree health and safety with our skilled pruning techniques.",
        },
        {
          id: "s2",
          title: "Safe Tree Removal",
          content: "Efficient removal of hazardous or unwanted trees by certified pros.",
        },
        {
          id: "s3",
          title: "Stump Grinding",
          content: "Complete restoration of your lawn by eliminating unsightly stumps.",
        },
        {
          id: "s4",
          title: "Lawn & Turf Care",
          content: "Top-quality maintenance for lush, green, healthy turf all year.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-cutting-plant-leaves_23-2148905278.jpg?_wi=1"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "30+",
          title: "Years Experience",
          description: "Serving Houston communities.",
          imageSrc: "http://img.b2bpic.net/free-photo/suburban-housing_53876-14307.jpg",
        },
        {
          id: "m2",
          value: "100%",
          title: "Licensed & Insured",
          description: "Safe, professional service.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-prepares-climb-ropes-park_1304-4993.jpg",
        },
        {
          id: "m3",
          value: "5k+",
          title: "Happy Clients",
          description: "Trusted by home & business owners.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-forest-wardens-measuring-distance_23-2149557266.jpg",
        },
      ]}
      title="Proven Performance"
      description="Years of dedication to the Houston landscape."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Tree Trimming",
          price: "Custom",
          variant: "Expert pruning for health",
          imageSrc: "http://img.b2bpic.net/free-photo/street-texture-retro-tuscany-city_1203-5049.jpg",
        },
        {
          id: "p2",
          name: "Emergency Care",
          price: "24/7",
          variant: "Rapid response storm cleanup",
          imageSrc: "http://img.b2bpic.net/free-photo/grass-background_1127-3418.jpg",
        },
        {
          id: "p3",
          name: "Stump Removal",
          price: "Flat Rate",
          variant: "Restore your lawn area",
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22888.jpg",
        },
        {
          id: "p4",
          name: "Turf Service",
          price: "Seasonal",
          variant: "Top-quality lawn maintenance",
          imageSrc: "http://img.b2bpic.net/free-photo/nature-lover-working-greenhouse_23-2149037240.jpg",
        },
        {
          id: "p5",
          name: "Irrigation Install",
          price: "Project",
          variant: "Sustainable water efficiency",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-exterior-hobbies_23-2149367019.jpg",
        },
        {
          id: "p6",
          name: "Hardscaping",
          price: "Custom",
          variant: "Durable, stunning features",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-works-garden-near-house_1157-23426.jpg",
        },
      ]}
      title="Our Specialized Service Options"
      description="Tailored maintenance packages designed for your specific property needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          date: "Oct 2023",
          title: "Homeowner",
          quote: "Reliable and fast tree service. My lawn looks pristine!",
          tag: "Recommended",
          avatarSrc: "http://img.b2bpic.net/free-photo/stylish-woman-wearing-yellow-bandana_273609-13336.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-lumberjack-woodcutter-standing-by-tree-trunk-woods-holding-chainsaw_342744-251.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "2",
          name: "Michael B.",
          date: "Sep 2023",
          title: "Business Owner",
          quote: "Professional team, always on time. Exceptional results.",
          tag: "Expert",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-walking-near-office-building-talking-mobile-phone_23-2147972945.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-trimming-bough-brush-guy-works-backyard_1157-41449.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "3",
          name: "Linda R.",
          date: "Aug 2023",
          title: "Residential Client",
          quote: "Expert pruning saved our aging oak trees.",
          tag: "Satisfied",
          avatarSrc: "http://img.b2bpic.net/free-photo/elderly-couples-playing-eating-some-fruit_1150-7847.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-working-sawmill-wood-manufacture_1303-22881.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "4",
          name: "Tom D.",
          date: "Jul 2023",
          title: "Property Manager",
          quote: "Excellent emergency response during the storms.",
          tag: "Reliable",
          avatarSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer-using-laptop_158595-7057.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-cutting-plant-leaves_23-2148905278.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "5",
          name: "Elena C.",
          date: "Jun 2023",
          title: "Homeowner",
          quote: "Great attention to detail. Cleanup was perfect.",
          tag: "Quality",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-young-handsome-man-sitting-cafe-table_1262-975.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/climber-looking-his-carabiners_23-2147665142.jpg?_wi=1",
          imageAlt: "happy home owner portrait",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by hundreds of homeowners and businesses throughout Houston."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are you licensed and insured?",
          content: "Yes, our team is fully licensed and insured for your complete peace of mind.",
        },
        {
          id: "f2",
          title: "Do you provide free quotes?",
          content: "Absolutely. We offer free, no-obligation estimates for all projects.",
        },
        {
          id: "f3",
          title: "What areas do you serve?",
          content: "We proudly serve the Greater Houston area including The Woodlands, Cypress, and Sugar Land.",
        },
        {
          id: "f4",
          title: "Do you handle emergency work?",
          content: "Yes, we are equipped for 24/7 emergency tree care and storm damage response.",
        },
      ]}
      title="Common Questions"
      description="Answers to help you understand our tree and landscaping processes."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get Your Free Quote Today"
      description="Ready for top-quality tree care? Fill out the form and our Houston-based team will contact you shortly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe your tree or landscaping project...",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/climber-looking-his-carabiners_23-2147665142.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Safety Policy",
              href: "#",
            },
          ],
        },
        {
          title: "Areas",
          items: [
            {
              label: "Houston",
              href: "#",
            },
            {
              label: "The Woodlands",
              href: "#",
            },
            {
              label: "Cypress",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Gomez Trees & Landscaping"
      bottomRightText="Licensed & Insured"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
