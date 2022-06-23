import { CollectionConfig } from 'payload/types';
import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    create: (): boolean => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [
      async ({ doc }): Promise<string> => {
        if (doc.condition) {
          const recaptcha = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${doc.recaptcha}`);
          const recaptchaData = await recaptcha.json();
          if (recaptchaData.success) {
            await payload.sendEmail({
              from: doc.email,
              to: 'contact@laemmer.fr',
              subject: `Contact via le site - ${doc.subject}`,
              html: `${doc.email} <br><br> ${doc.message}`,
            });
            return 'OK';
          }
        }
        throw new Error('Une erreur est survenue...');
      },
    ],
  },
  fields: [
    {
      type: 'text',
      name: 'recaptcha',
      required: true,
      admin: {
        disabled: true,
      },
    },
    {
      type: 'text',
      name: 'name',
      label: 'Nom',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'email',
      name: 'email',
      label: 'Depuis l\'email',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'text',
      name: 'subject',
      label: 'Sujet',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'checkbox',
      name: 'condition',
      label: 'Condition',
      required: true,
      admin: {
        hidden: true,
        readOnly: true,
      },
    },
  ],
};

export default Contact;
