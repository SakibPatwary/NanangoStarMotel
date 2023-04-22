import React from 'react'
import { Container } from "react-bootstrap";

const Map = () => {
  return (
    <Container>
      <h2
        className="text-center py-2"
        style={{ backgroundColor: "#3459e6", color: "white" }}
      >
        Get Direction from Map
      </h2>

          <div>
              <div style={{ width: "100%" }}>
                  <iframe
                      width="100%"
                      height="400"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      title="map"
                      src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(nanango%20star%20motel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                      <a href="https://www.maps.ie/distance-area-calculator.html">
                      </a>
                  </iframe>
              </div>
          </div>
    </Container>
  )
}

export default Map