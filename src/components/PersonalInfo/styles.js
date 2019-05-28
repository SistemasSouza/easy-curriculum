import styled from 'styled-components'
import background from '../../assets/img/background.jpg'

export const ProfileSection = styled.section`
    background-image:url(${background});
    height: 500px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:space-around;
`
export const ImageProfile = styled.div`
    align-items:center;
    
    img {
        border-radius:50%
    }
    h1{
        color: #fff;
        text-align:center;
    }
    h3 {
        color: #fff;
        text-align:center;
    }
`

export const InfoProfile = styled.div`
   width: 40%;

   p {
       font-weight:bold;
       font-size: 16px;

       span{
           color:#fff;
       }
   }
`

export const ObjectiveProfile = styled.div`
    height: 120px;

    h1{
        font-weight:bold;
        color: #fff;
    }
    span{
        color: #fff;
        font-style:italic;
    }
` 
export const InfoContact = styled.div`
    display: flex;
    ul{
        list-style-type: none;
        margin: 0;
        padding:0;
    }

    li{
        color:#fff;
        font-weight: bold;
        margin-right: 25px;
        padding-top: 10px;

        span {
            font-weight:normal;
            font-style: italic;
        }
    }
`