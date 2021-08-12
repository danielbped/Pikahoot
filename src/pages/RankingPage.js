import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Rank = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: hsl(216, 53%, 9%);
  opacity: 0.75;

  &:nth-of-type(2n) {
    background-color: hsl(217, 28%, 15%);
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 62.5%);
  }
  
  & img {
    width: 2.5rem;
    margin-right: 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.785rem;
  margin-top: 1rem;
`;

const Back = styled.button`
  background-color: transparent;
  border: none;
  color: hsla(0, 0%, 100%, 62.5%);
  margin-left: auto;
  display: block;
  margin-top: 0.625rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const BackContainer = styled.div`
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  font-size: 1.125rem;
`;

class RankingPage extends Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));

    return (
      <main>
        <Title data-testid="ranking-title">Ranking</Title>

        <Container>
          {ranking
            .sort((a, b) => b.score - a.score)
            .map(({ name, score, picture }, index) => (
              <Rank key={ index }>
                <img src={ picture } alt={ name } />
                <p>
                  <span data-testid={ `player-name-${index}` }>{name}</span>
                  {' - '}
                  <span data-testid={ `player-score-${index}` }>{score}</span>
                  {' '}
                  points
                </p>
              </Rank>
            ))}
        </Container>

        <BackContainer>
          <Link to="/">
            <Back
              type="button"
              data-testid="btn-go-home"
            >
              Back
            </Back>
          </Link>
        </BackContainer>
      </main>
    );
  }
}

export default RankingPage;
