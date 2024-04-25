import { createClient } from 'contentful';

export default function useContentful() {
  const client = createClient({
    // Temporarily API keys, We generate a new one and hide it when she gets her own account.
    space: import.meta.env.VITE_contentful_space_id,
    accessToken: import.meta.env.VITE_contentful_preview_access_token, // development key, switch to client key for deployment
    host: 'preview.contentful.com', // cdn.contentful.com when deploying
  });


  /**
   * @returns {Array<Object>}
   * @property {String} name
   */
  async function getComposers() {
    try {
      const entries = await client.getEntries({
        content_type: 'composer',
      });

      //clean up the messy object and returns only the necessary information, in this case --> name
      const sanitizedEntries = entries.items.map((item) => {
        const names = item.fields;
        return names;
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching composers: ${error}`);
    }
  }

  /**
   * @returns {Array<Object>}
   * @property {String} client
   * @property {Array<String>} composer
   * @property {String} vimeoLink
   */
  async function getAllProjects() {
    try {
      const entries = await client.getEntries({
        content_type: 'project',
      });

      const sanitizedEntries = entries.items.map((item) => {
        const projects = item.fields;
        return projects;
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching composers: ${error}`);
    }
  }

  /**
   * @returns {Object}
   * @property {String} URL
   * @property {String} Tagline
   */
  async function getLandingPage() {
    try {
      const entries = await client.getEntries({
        content_type: 'landingpage',
      });

      const sanitizedEntries = entries.items.map((item) => {
        const fields = item.fields;
        return fields;
      });

      const landingPageData = {
        showReelURL: sanitizedEntries[0].showreel.fields.file.url,
        tagline: sanitizedEntries[0].tagline,
      };

      return landingPageData;
    } catch (error) {
      console.log(`Error fetching landing pages: ${error}`);
    }
  }

  return {
    getComposers,
    getAllProjects,
    getLandingPage,
  };
}
