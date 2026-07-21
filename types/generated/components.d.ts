import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedLanguage extends Struct.ComponentSchema {
  collectionName: 'components_shared_languages';
  info: {
    displayName: 'Language';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedNewsletterCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_cards';
  info: {
    displayName: 'Newsletter Card';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    technologies: Schema.Attribute.Relation<
      'oneToMany',
      'api::technology.technology'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedSocmedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_socmed_cards';
  info: {
    displayName: 'Socmed Card';
  };
  attributes: {
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    type: Schema.Attribute.Enumeration<
      [
        'github',
        'linkedIn',
        'instagram',
        'threads',
        'email',
        'phone',
        'facebook',
        'x',
        'whatsapp',
        'tiktok',
        'spotify',
        'pinterest',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedWorkExperience extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_experiences';
  info: {
    displayName: 'Work Experience';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
    team_role: Schema.Attribute.Relation<
      'oneToOne',
      'api::team-role.team-role'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.education': SharedEducation;
      'shared.footer': SharedFooter;
      'shared.language': SharedLanguage;
      'shared.media': SharedMedia;
      'shared.newsletter-card': SharedNewsletterCard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.skill': SharedSkill;
      'shared.slider': SharedSlider;
      'shared.socmed-card': SharedSocmedCard;
      'shared.work-experience': SharedWorkExperience;
    }
  }
}
