import styled from "styled-components";

export const CreatingOptionWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px 30px;
  background-color: aliceblue;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: space-between;
  &:not(:last-child){
    padding-bottom: 15px;
  }
  
  &:before{
    content: "";
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 12px solid #0073FF;
    transform: rotate(90deg);
    margin-right: 10px;
  }
`

export const ItemContent = styled.span`
 max-width: 600px;
  
  &:after{
    content: ", ";
  }
`
