import React from 'react';
import { render } from '@testing-library/react-native';
import SellerRating from '../SellerRating';

describe('SellerRating', () => {
  it('renderiza corretamente com props padrão', () => {
    const { getByText } = render(<SellerRating />);
    
    // Verifica se o título está presente
    expect(getByText('Avaliações do Ofertante')).toBeTruthy();
    
    // Verifica se a nota está presente com uma casa decimal
    expect(getByText('4.9')).toBeTruthy();
    
    // Verifica se o texto "de 5" está presente
    expect(getByText('de 5')).toBeTruthy();
    
    // Verifica se o número de vendas avaliadas está presente
    expect(getByText('47 vendas avaliadas')).toBeTruthy();
  });
  
  it('renderiza corretamente com props personalizados', () => {
    const customProps = {
      rating: 3.7,
      maxRating: 5,
      totalRatings: 42,
      ratingDistribution: {
        star5: 50,
        star4: 20,
        star3: 15,
        star2: 10,
        star1: 5,
      },
      salesEvaluated: 30,
    };
    
    const { getByText } = render(<SellerRating {...customProps} />);
    
    // Verifica se a nota personalizada está presente com uma casa decimal
    expect(getByText('3.7')).toBeTruthy();
    
    // Verifica se o número personalizado de ratings está presente
    expect(getByText('42 ratings')).toBeTruthy();
    
    // Verifica se o número personalizado de vendas avaliadas está presente
    expect(getByText('30 vendas avaliadas')).toBeTruthy();
  });
  
  it('formata corretamente números inteiros para uma casa decimal', () => {
    const props = {
      rating: 4,
      maxRating: 5,
      totalRatings: 10,
      ratingDistribution: {
        star5: 90,
        star4: 10,
        star3: 0,
        star2: 0,
        star1: 0,
      },
      salesEvaluated: 5,
    };
    
    const { getByText } = render(<SellerRating {...props} />);
    
    // Verifica se a nota é formatada com uma casa decimal (4.0)
    expect(getByText('4.0')).toBeTruthy();
  });
}); 