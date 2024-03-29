import styled from 'styled-components';

export const MenuWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    list-style:none;
    gap:30px;
    padding:0px;
    @media screen and (max-width:1220px){
        margin-top:10px;

        }
    }
`

export const HeaderMenuWrapper = styled.ul`
display:flex;
flex-direction:row;
list-style:none;
gap:3vw;
position:absolute;
top: 10px;
left: 10vw;
@media screen and (max-width:750px){
    left:12vw;
    }
}
@media screen and (max-width:600px){
    left:14vw;
    }
}
@media screen and (max-width:500px){
    left:16vw;
    }

}
@media screen and (max-width:450px){
    top:0px;
    }

}
`
export const HeaderMenuWrapper2 = styled.ul`
display:flex;
flex-direction:row;
list-style:none;
gap:30px;
padding:0px;
@media screen and (max-width:1220px){
    margin-top:10px;
    margin-right:30px
    }
}
`

