import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banner_sections';
  info: {
    displayName: 'BannerSection';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.image', false>;
    sub_heading: Schema.Attribute.String;
  };
}

export interface BlocksCallCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_call_cta_sections';
  info: {
    displayName: 'CallCtaSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_sections';
  info: {
    description: '';
    displayName: 'FAQSection';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'cards.faq-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksServiceCardSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_card_sections';
  info: {
    displayName: 'ServiceCardSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    service_cards: Schema.Attribute.Component<'cards.service-card', true>;
  };
}

export interface BlocksTableOfContents extends Struct.ComponentSchema {
  collectionName: 'components_blocks_table_of_contents';
  info: {
    displayName: 'TableOfContents';
  };
  attributes: {
    contents: Schema.Attribute.Component<'shared.text', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_faq_cards';
  info: {
    displayName: 'FaqCard';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CardsListCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_list_cards';
  info: {
    displayName: 'ListCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.text', true>;
    sub_heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface CardsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_service_cards';
  info: {
    description: '';
    displayName: 'ServiceCard';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    btn_id: Schema.Attribute.String;
    href: Schema.Attribute.String;
    radius: Schema.Attribute.Enumeration<['none', 'full']>;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      [
        'primary',
        'light_primary',
        'yellow',
        'black',
        'white',
        'link',
        'outline',
      ]
    >;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    altText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'MetaSocial';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['facebook', 'linkedin', 'twitter_x']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    cannonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    mail: Schema.Attribute.String;
    twitter_x: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    description: '';
    displayName: 'Text';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner-section': BlocksBannerSection;
      'blocks.call-cta-section': BlocksCallCtaSection;
      'blocks.faq-section': BlocksFaqSection;
      'blocks.service-card-section': BlocksServiceCardSection;
      'blocks.table-of-contents': BlocksTableOfContents;
      'cards.faq-card': CardsFaqCard;
      'cards.list-card': CardsListCard;
      'cards.service-card': CardsServiceCard;
      'shared.button': SharedButton;
      'shared.image': SharedImage;
      'shared.media': SharedMedia;
      'shared.meta-social': SharedMetaSocial;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-media': SharedSocialMedia;
      'shared.text': SharedText;
    }
  }
}
