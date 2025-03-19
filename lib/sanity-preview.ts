import { sanityClient } from './sanity';

// Helper function to fetch content for preview
export async function fetchPreviewContent(type: string, id: string) {
  return sanityClient.fetch(
    `*[_type == "${type}" && _id == "${id}"][0]`
  );
}

// Export a helper to check if we're in preview mode
export function isPreviewMode() {
  return typeof window !== 'undefined' && 
    window.location.search.includes('preview=true');
} 