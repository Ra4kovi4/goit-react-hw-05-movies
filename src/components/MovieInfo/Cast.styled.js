import styled from 'styled-components';
export const CastList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  padding: 15px;
`;
export const ListItem = styled.li`
  background-color: '#fff';
  border: 1px solid;
  border-radius: 5px;
  transition: transform 0.5s cubic-bezier(0.1, 0.7, 1, 0.1);
  padding: 10px;
  text-align: center;
  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const CastPoster = styled.img`
  max-width: 100%;
  display: block;
  width: 250px;
  height: auto;
`;
export const CastName = styled.h2`
  font-size: 16px;
`;
export const Character = styled.p`
  font-size: 14 px;
`;
