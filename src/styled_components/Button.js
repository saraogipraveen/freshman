import styled from 'styled-components';

export default styled.button`
  font-size : 1.2rem;
  text-align: center;
  padding: 1rem 1.8rem;
  border-radius: .5rem;
  background: ${props => props.primary 
    ? 'transparent' : 'red'
  }
  color: white;
  border: 1px solid white;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: translateY(.3rem);
  }

  &:active {
    outline: none;
    transform: translateY(.1rem);
  }
`;