import { ChapterData, ChapterMetadata } from "@/types/transcript";
import introChapters from './chapters/introduction-to-fossda-index.json';
import debChapters from './chapters/deb-goodkin-index.json';
import heatherChapters from './chapters/heather-meeker-index.json';
import bruceChapters from './chapters/bruce-perens-index.json';
import larryChapters from './chapters/larry-augustin-index.json';

// Define the raw metadata type from JSON
interface RawChapterMetadata {
  title: string;
  timecode: string;
  time: {
    start: number;
    end: number | null;
  };
  synopsis: string;
  keywords?: string;
}

// Helper function to process chapter metadata
function processChapterMetadata(metadata: RawChapterMetadata[]): ChapterMetadata[] {
  return metadata.map(chapter => ({
    ...chapter,
    // Convert keywords string to array of tags
    tags: chapter.keywords ? chapter.keywords.split(', ') : []
  }));
}

// Export the complete chapterData record with all interviews
export const chapterData: Record<string, ChapterData> = {
  "introduction-to-fossda": {
    title: "Introduction to FOSSDA",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
    metadata: processChapterMetadata(introChapters.metadata)
  },
  "deb-goodkin": {
    title: "Deb Goodkin Interview",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
    metadata: processChapterMetadata(debChapters.metadata)
  },
  "heather-meeker": {
    title: "Heather Meeker Interview",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
    metadata: processChapterMetadata(heatherChapters.metadata)
  },
  "bruce-perens": {
    title: "Bruce Perens Interview",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
    metadata: processChapterMetadata(bruceChapters.metadata)
  },
  "larry-augustin": {
    title: "Larry Augustin Interview",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
    metadata: processChapterMetadata(larryChapters.metadata)
  }
}; 