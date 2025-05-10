import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

interface Props {
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  remove?: boolean;
}

const GOOGLE_MAPS_API_KEY = "AIzaSyBFLLWPsj2lsutXtbG_MrDLroV6c5ZPkcA";

export default function LocationMap({
  address,
  number,
  neighborhood,
  city,
  state,
  remove,
}: Props) {
  const [coords, setCoords] = useState<null | {
    latitude: number;
    longitude: number;
  }>(null);
  const [loading, setLoading] = useState(true);

  const fullAddress = `${address}, ${number}, ${neighborhood}, ${city}, ${state}`;

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          fullAddress
        )}&key=${GOOGLE_MAPS_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK" && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoords({ latitude: lat, longitude: lng });
        } else {
          console.warn("Endereço não encontrado:", data.status);
        }
      } catch (error) {
        console.error("Erro na API do Google Maps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [fullAddress]);

  return (
    <View style={styles.container}>
      {!remove && <Text style={styles.title}>Localização do ofertante</Text>}

      <View style={styles.mapContainer}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : coords ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              ...coords,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={coords} title="Localização" />
          </MapView>
        ) : (
          <Text>Não foi possível carregar o mapa.</Text>
        )}
      </View>

      <View style={styles.addressInfo}>
        <Text
          style={styles.addressText}
        >{`${address}, ${number} - ${neighborhood}`}</Text>
        <Text style={styles.cityText}>{`${city}/${state}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  mapContainer: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  addressInfo: {
    marginTop: 10,
  },
  addressText: {
    fontSize: 14,
    color: "#333",
  },
  cityText: {
    fontSize: 13,
    color: "#666",
  },
});
