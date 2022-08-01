import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    margin-top: 20px;
`;

export const LinkContainer = styled(Link)`
    text-decoration: none;
    color: white;
`;
