"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Gift, Mail, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Saba Beauty Salon"
      button={{
        text: "Book Appointment",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "radial-gradient"}}
      title="✨ Where Beauty Becomes an Experience"
      description="Premium bridal makeup, luxury hair treatments, and personalized beauty care in the heart of Lahore."
      buttons={[
        {
          text: "📞 Book Appointment",          href: "#contact"},
        {
          text: "💄 View Services",          href: "#services"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/luxury-retro-wall-lamp-cafe_1150-10890.jpg"
      imageAlt="Elegant salon interior with beauty products and golden accents"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-business-office-business-center_1303-20365.jpg",          alt: "Satisfied client smiling"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-shot-successful-beautiful-confident-senior-businesswoman-her-fifties-with-gray-hair-blue-wise-eyes-posing-indoors-keeping-arms-folded-looking-with-charming-smile_344912-1851.jpg",          alt: "Happy customer testimonial"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-attractive-africanamerican-woman-smiling-looking-happy-standing-yellow-backgroun_1258-137772.jpg",          alt: "Glamorous client portrait"},
        {
          src: "http://img.b2bpic.net/free-photo/blonde-senior-woman-looking-away_23-2148286459.jpg",          alt: "Radiant woman smiling"},
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-smiling-confident-standing-street_839833-33403.jpg",          alt: "Beautiful customer review"},
      ]}
      avatarText="Trusted by 1000+ Happy Clients"
      marqueeItems={[
        {
          type: "text",          text: "Bridal Makeup"},
        {
          type: "text",          text: "Hair Styling"},
        {
          type: "text",          text: "Facial Treatments"},
        {
          type: "text",          text: "Manicures & Pedicures"},
        {
          type: "text",          text: "Luxury Skincare"},
      ]}
      marqueeSpeed={30}
      showMarqueeCard={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Crafting Confidence Since 2018"
      description={[
        "Saba Beauty Salon is a trusted beauty destination located in Garhi Shahu, Lahore. Since 2018, we have been helping women look and feel their best through expert care, premium products, and personalized consultations.",        "Our experienced team specializes in bridal transformations, modern hair treatments, and skincare solutions tailored to every client’s unique beauty.",        "💖 Because every woman deserves to feel luxurious."]}
      buttons={[
        {
          text: "Learn More",          href: "#about"},
        {
          text: "View Our Story",          href: "#"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "👰 Bridal & Party Makeup",          description: "Flawless, long-lasting makeup designed for your most special moments.",          imageSrc: "http://img.b2bpic.net/free-photo/set-makeup-brushes_23-2147710656.jpg",          imageAlt: "Bridal makeup palette and brushes"},
        {
          title: "💇‍♀️ Hair Services",          description: "Haircuts & styling, Hair coloring, Keratin / Rebonding / Extenso.",          imageSrc: "http://img.b2bpic.net/free-photo/high-view-shot-accessories-barber-shop_23-2148256926.jpg",          imageAlt: "Hair salon tools and styling"},
        {
          title: "✨ Skin & Beauty",          description: "Facials, Advanced skincare treatments, Waxing.",          imageSrc: "http://img.b2bpic.net/free-photo/young-man-doing-pedicure-salon-beauty-concept_1301-3372.jpg",          imageAlt: "Skincare products and spa treatment"},
        {
          title: "💅 Nails & Care",          description: "Manicure, Pedicure, Nail grooming.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-swimming-pool-spa_23-2148000366.jpg",          imageAlt: "Manicure tools and nail polish"},
      ]}
      title="Our Signature Services"
      description="Discover a world of personalized beauty treatments designed to make you shine."
      tag="Expert Care"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Explore All Services",          href: "#services"},
      ]}
    />
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Why Clients Love Us"
      tag="Our Promise"
      metrics={[
        {
          id: "m1",          value: "✔",          description: "Personalized consultations"},
        {
          id: "m2",          value: "✔",          description: "Hygienic & relaxing environment"},
        {
          id: "m3",          value: "✔",          description: "Skilled, experienced artists"},
        {
          id: "m4",          value: "✔",          description: "Premium-quality products"},
        {
          id: "m5",          value: "✔",          description: "Trusted by hundreds of happy clients"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Flawless Bridal Makeup!",          quote: "Amazing bridal makeup! I felt so confident and beautiful on my wedding day. The team was incredibly professional and attentive to every detail.",          name: "Aisha R.",          role: "Satisfied Bride",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-excited-hopeful-blond-girl-making-wish-crossed-fingers-good-luck-close-eyes-smiling-putting-all-effort-into-pray-pleading-dream-come-true-anticipating-pink-background_1258-92901.jpg",          imageAlt: "Aisha R. smiling"},
        {
          id: "2",          title: "Exceptional Service",          quote: "Very professional staff and relaxing environment. Every visit feels like a luxury retreat. Highly recommend their hair treatments!",          name: "Fatima Z.",          role: "Regular Client",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-happy-bride-wearing-veil_23-2149722033.jpg",          imageAlt: "Fatima Z. smiling"},
        {
          id: "3",          title: "Best Salon Experience",          quote: "Hands down the best salon experience in Lahore! From facials to manicures, every service is top-notch. I always leave feeling pampered.",          name: "Hina K.",          role: "Happy Customer",          imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-tourist-woman-smiling-happy-drinking-coffee-city_839833-25789.jpg",          imageAlt: "Hina K. smiling"},
        {
          id: "4",          title: "Truly Luxurious",          quote: "Saba Beauty Salon provides a truly luxurious experience. The attention to hygiene and personalized care sets them apart. My skin has never looked better!",          name: "Zainab S.",          role: "Skincare Enthusiast",          imageSrc: "http://img.b2bpic.net/free-photo/blonde-lady-talking-phone-with-copy-space_23-2148286527.jpg",          imageAlt: "Zainab S. smiling"},
        {
          id: "5",          title: "My Go-To Salon",          quote: "This is my go-to place for all beauty needs. The artists are incredibly skilled, and the products are premium. Always satisfied with the results!",          name: "Sara M.",          role: "Loyal Patron",          imageSrc: "http://img.b2bpic.net/free-photo/happy-positive-female-customer-touching-chin_74855-3520.jpg",          imageAlt: "Sara M. smiling"},
      ]}
      title="What Our Clients Say"
      description="Hear from our happy customers who experienced premium beauty care."
      tag="Client Feedback"
      tagIcon={Star}
    />
  </div>

  <div id="bridal-promo" data-section="bridal-promo">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "classic-bridal",          badge: "Popular",          badgeIcon: Sparkles,
          price: "Starting from PKR 50,000",          subtitle: "Perfect for an elegant, timeless look.",          buttons: [
            {
              text: "Book Consultation",              href: "#contact"},
          ],
          features: [
            "Professional Makeup",            "Hair Styling",            "Skin Preparation",            "Pre-bridal Consultation"],
        },
        {
          id: "luxury-bridal",          badge: "Premium",          badgeIcon: Award,
          price: "Starting from PKR 75,000",          subtitle: "For a truly unforgettable, opulent experience.",          buttons: [
            {
              text: "Book Consultation",              href: "#contact"},
          ],
          features: [
            "Premium Makeup & Hair",            "Advanced Skin Prep",            "Pre-bridal Trial",            "Extended Session Time"],
        },
      ]}
      title="Bridal Packages Available"
      description="Make your big day unforgettable with our exclusive bridal packages."
      tag="Special Offers"
      tagIcon={Gift}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Get in Touch"
      title="Visit Us Today"
      description="📍 Allama Iqbal Road, Garhi Shahu, Lahore\n📞 +92 334 4124458\n🕒 Open Daily: 9 AM – 9 PM"
      inputPlaceholder="Enter your email"
      buttonText="Send Message"
      termsText="By sending a message, you're confirming that you agree with our Terms and Conditions."
      tagIcon={Mail}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/blurred-restaurant_1203-65.jpg"
      imageAlt="Elegant salon interior for footer background"
      logoText="Saba Beauty Salon"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Bridal Makeup",              href: "#services"},
            {
              label: "Hair Treatments",              href: "#services"},
            {
              label: "Skincare",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reviews",              href: "#reviews"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Saba Beauty Salon. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
