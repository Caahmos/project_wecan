import React from "react";

import {
    Container
} from './styles';

interface IImgItem {
    img: string;
}

const ImgItem: React.FC<IImgItem> = ({ img }) => {

    return (
        <Container>
            <img src={img} alt="" width="250px" />
        </Container>
    )
}

export default ImgItem;