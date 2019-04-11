import React from 'react'
import gasworksPin from '../images/gasworks-pin.svg'

export interface IGoogleMapProps {
  title: string
  apiKey: string
  lat: Number
  lng: Number
  classes?: any
}

export interface IGoogleMapState {
  mapIsReady: boolean
  map: any
}

class GoogleMap<T extends IGoogleMapProps> extends React.Component<
  T,
  IGoogleMapState
> {
  public state: IGoogleMapState
  constructor(props) {
    super(props)
    this.state = {
      mapIsReady: false,
      map: React.createRef(),
    }
  }

  public map = null

  componentDidMount() {
    const ApiKey = this.props.apiKey
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&language=da&region=DK`
    script.async = true
    script.defer = true
    script.addEventListener('load', () => {
      this.setState({ mapIsReady: true })
    })

    document.body.appendChild(script)
  }

  componentDidUpdate() {
    if (this.state.mapIsReady) {
      // Display the map
      this.map = new window.google.maps.Map(this.state.map.current, {
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: true,
        styles: this.mapStyles,
      })

      const icon = {
        url: gasworksPin,
        fillColor: '#222',
        fillOpacity: 0.6,
        anchor: new window.google.maps.Point(0, 71),
        size: new window.google.maps.Size(48, 71),
        origin: new window.google.maps.Point(0, 0),
        strokeWeight: 0,
        scale: 1,
      }

      const marker = new window.google.maps.Marker({
        position: { lat: this.props.lat, lng: this.props.lng },
        title: this.props.title,
        map: this.map,
        icon,
	  })
	  
	  const center = new window.google.maps.LatLng(this.props.lat, this.props.lng);
	  this.map.panTo(center);
    }
  }

  render() {
    return (
      <div ref={this.state.map} style={{ height: '50vh', width: '100%' }} />
    )
  }

  private mapStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ]
}

export default GoogleMap
