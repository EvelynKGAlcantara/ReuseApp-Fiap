const UNSPLASH_ACCESS_KEY = "kg5FjHgM7m41Xdd_2tOz3fbvupmUA7k7luriiSiE95M";

export const fetchUnsplashImages = async (query: string) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=10&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar imagens do Unsplash:", error);
    return [];
  }
};
