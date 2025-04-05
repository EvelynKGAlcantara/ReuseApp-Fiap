import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface LocationMapProps {
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  number: string;
}

const LocationMap = ({
  address,
  neighborhood,
  city,
  state,
  number,
}: LocationMapProps) => {
  const fullAddress = `${address}, n ${number} - ${neighborhood}`;
  const cityState = `${city}/${state}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localização do ofertante</Text>
      <View style={styles.mapContainer}>
        {/* Background do mapa */}
        <View style={styles.mapBackground} />
        
        {/* Grid principal de ruas */}
        <View style={styles.mapGrid}>
          {/* Ruas horizontais principais */}
          <View style={[styles.mainStreet, styles.horizontalStreet, { top: '40%' }]} />
          <View style={[styles.mainStreet, styles.horizontalStreet, { top: '60%' }]} />
          
          {/* Ruas verticais principais */}
          <View style={[styles.mainStreet, styles.verticalStreet, { left: '35%' }]} />
          <View style={[styles.mainStreet, styles.verticalStreet, { left: '65%' }]} />
          
          {/* Ruas secundárias */}
          {[...Array(8)].map((_, index) => (
            <View
              key={`secondary-street-${index}`}
              style={[
                styles.secondaryStreet,
                index < 4 
                  ? { ...styles.horizontalStreet, top: `${20 + (index * 20)}%` }
                  : { ...styles.verticalStreet, left: `${20 + ((index - 4) * 20)}%` }
              ]}
            />
          ))}
          
          {/* Círculo da rotatória */}
          <View style={styles.roundabout}>
            <View style={styles.roundaboutInner} />
          </View>
          
          {/* Blocos simulando construções */}
          {[...Array(25)].map((_, index) => {
            const row = Math.floor(index / 5);
            const col = index % 5;
            return (
              <View
                key={`block-${index}`}
                style={[
                  styles.block,
                  {
                    top: `${row * 20 + 2}%`,
                    left: `${col * 20 + 2}%`,
                    opacity: Math.random() * 0.2 + 0.1,
                    transform: [{ scale: Math.random() * 0.3 + 0.7 }],
                  },
                ]}
              />
            );
          })}
        </View>
        
        {/* Marcador de localização */}
        <View style={styles.markerContainer}>
          <View style={styles.markerOuter}>
            <View style={styles.marker}>
              <View style={styles.markerDot} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>{fullAddress}</Text>
        <Text style={styles.cityStateText}>{cityState}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  mapContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#E8EEF4',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 12,
  },
  mapBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E8EEF4',
  },
  mapGrid: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  mainStreet: {
    position: 'absolute',
    backgroundColor: '#D0D9E3',
  },
  secondaryStreet: {
    position: 'absolute',
    backgroundColor: '#D8E0E9',
  },
  horizontalStreet: {
    width: '100%',
    height: 3,
  },
  verticalStreet: {
    width: 3,
    height: '100%',
  },
  roundabout: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D0D9E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundaboutInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E8EEF4',
  },
  block: {
    position: 'absolute',
    width: '16%',
    height: '16%',
    backgroundColor: '#D8E0E9',
    borderRadius: 2,
  },
  markerContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12 }, { translateY: -12 }],
    zIndex: 2,
  },
  markerOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(234, 67, 53, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marker: {
    width: 14,
    height: 14,
    backgroundColor: '#EA4335',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  markerDot: {
    width: 4,
    height: 4,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  addressContainer: {
    marginTop: 4,
  },
  addressText: {
    fontSize: 15,
    color: '#333333',
    marginBottom: 2,
    fontWeight: '400',
  },
  cityStateText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default LocationMap; 