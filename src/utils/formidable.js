import formidable from 'formidable'

export const form = formidable({
    keepExtensions: true,
    uploadDir: "uploads",
  });