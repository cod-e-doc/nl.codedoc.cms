import type { Schema, Struct } from '@strapi/strapi';

export interface CardsLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_link_cards';
  info: {
    description: '';
    displayName: 'Regular Card';
    icon: 'grid';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    content: Schema.Attribute.String;
    highlighted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.Enumeration<['sample']>;
    link: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CardsLogoCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_logo_cards';
  info: {
    description: '';
    displayName: 'Counterparty Card';
    icon: 'handHeart';
  };
  attributes: {
    altText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface CardsTestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_testimonials_cards';
  info: {
    description: '';
    displayName: 'Testimonials Card';
    icon: 'grid';
  };
  attributes: {
    author: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    quote: Schema.Attribute.Text;
    referenceUrl: Schema.Attribute.String;
  };
}

export interface GeneralSeo extends Struct.ComponentSchema {
  collectionName: 'components_general_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    description: Schema.Attribute.String;
    illustration: Schema.Attribute.Media<'images'>;
    metas: Schema.Attribute.Component<'general.seo-meta', true>;
    title: Schema.Attribute.String;
  };
}

export interface GeneralSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_general_seo_metas';
  info: {
    displayName: 'SEO Meta';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SectionsCardsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_sections';
  info: {
    description: '';
    displayName: 'Regular Cards Section';
    icon: 'apps';
  };
  attributes: {
    anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }>;
    cards: Schema.Attribute.Component<'cards.link-card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 1;
      }>;
  };
}

export interface SectionsContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_form_sections';
  info: {
    description: '';
    displayName: 'Contact Form Section';
    icon: 'envelop';
  };
  attributes: {
    anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'contact-us'>;
    destination: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'info@codedoc.nl'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 1;
      }>;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
    icon: 'alien';
  };
  attributes: {
    ctaAnchor: Schema.Attribute.String;
    ctaLink: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    ctaText: Schema.Attribute.String;
    ctaURL: Schema.Attribute.String;
    headline: Schema.Attribute.String;
    illustration: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    subheadline: Schema.Attribute.String;
  };
}

export interface SectionsHtmlSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_html_sections';
  info: {
    description: '';
    displayName: 'HTML Section';
    icon: 'code';
  };
  attributes: {
    anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }>;
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 1;
      }>;
  };
}

export interface SectionsPartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners_sections';
  info: {
    description: '';
    displayName: '\u0421ounterparties Section';
    icon: 'user';
  };
  attributes: {
    Anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }>;
    Counterparties: Schema.Attribute.Component<'cards.logo-card', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 1;
      }>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    description: '';
    displayName: 'Rich Text Section';
    icon: 'write';
  };
  attributes: {
    anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }>;
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 80;
      }>;
  };
}

export interface SectionsTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials_sections';
  info: {
    description: '';
    displayName: 'Testimonials Section';
    icon: 'star';
  };
  attributes: {
    anchor: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
        minLength: 1;
      }>;
    testimonials: Schema.Attribute.Component<'cards.testimonials-card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
        minLength: 1;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.link-card': CardsLinkCard;
      'cards.logo-card': CardsLogoCard;
      'cards.testimonials-card': CardsTestimonialsCard;
      'general.seo': GeneralSeo;
      'general.seo-meta': GeneralSeoMeta;
      'sections.cards-section': SectionsCardsSection;
      'sections.contact-form-section': SectionsContactFormSection;
      'sections.hero-section': SectionsHeroSection;
      'sections.html-section': SectionsHtmlSection;
      'sections.partners-section': SectionsPartnersSection;
      'sections.rich-text': SectionsRichText;
      'sections.testimonials-section': SectionsTestimonialsSection;
    }
  }
}
