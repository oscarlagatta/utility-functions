/**
 * getURLSlug(words)
 */
function getURLSlugs(words){
    return words    
        .replace(/\s+/g, '-')
        .toLowerCase();
}