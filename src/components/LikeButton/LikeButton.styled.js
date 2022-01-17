import styled from 'styled-components'

export const Button = styled.button`
    font-size: 2em;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: ${props => props.pressed ? 'red' : 'var(--p-border-neutral-subdued)'};
    background-color: var(--p-surface);
    border: none;

    cursor: pointer;
    
    :hover{
        background-color: #F3F4F6;;
    }
`
