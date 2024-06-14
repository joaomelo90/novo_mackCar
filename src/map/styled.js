import styled from 'styled-components'

export const Container = styled.div`
.leaflet-container{
    height:50vh;
    width:25vw;
    border-radius:1rem;
}

@media (min-width: 320px) {
    .leaflet-container{
    height: 37vh;
    width: 50vw;
    }

}

@media (min-width: 501px) {
    .leaflet-container{
        
    height: 47vh;
    width: 34vw;
    }
}
`

