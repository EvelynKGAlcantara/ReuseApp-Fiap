import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";

interface ImageGalleryProps {
  query: string;
  category?: string;
  onSelect: (url: string) => void;
}

interface UnsplashImage {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
}

export default function ImageGallery({
  query,
  category,
  onSelect,
}: ImageGalleryProps) {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ACCESS_KEY = "kg5FjHgM7m41Xdd_2tOz3fbvupmUA7k7luriiSiE95M";

  const fetchImages = async () => {
    if (!query) return;
    try {
      setLoading(true);
      setError(null);

      const categoryTag = category ? `+${category}` : "";
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}${categoryTag}&per_page=10&client_id=${ACCESS_KEY}`
      );
      const data = await response.json();

      if (data.results) {
        setImages(data.results);
      } else {
        setError("Nenhuma imagem encontrada.");
      }
    } catch (err) {
      console.error("Erro ao buscar imagens:", err);
      setError("Erro ao carregar imagens.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query, category]);

  const handleSelect = (url: string) => {
    onSelect(url);
    setImages([]); // esconde as imagens depois da seleção
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#2A4BA0" />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.imageList}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSelect(item.urls.small)}>
          <Image
            source={{ uri: item.urls.small }}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageList: {
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
