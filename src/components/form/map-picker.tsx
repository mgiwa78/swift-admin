import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "../../constants/api";
import { formatToNaira } from "../../utils/helpers";
import { post } from "../../lib/methods";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/selectors/auth";

type GoogleMapPickerProps = {
  onPickLocation: (
    pickupLocation: any,
    dropoffLocation: any,
    price?: any
  ) => void;
};

const libraries = ["places"] as any;
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 9.0579, // Abuja coordinates
  lng: 7.4951,
};

const bounds = {
  north: 9.1579, // Adjust this value for northern limit of Abuja
  south: 8.9579, // Adjust this value for southern limit of Abuja
  east: 7.6951, // Adjust this value for eastern limit of Abuja
  west: 7.2951, // Adjust this value for western limit of Abuja
};
const GoogleMapPicker: React.FC<GoogleMapPickerProps> = ({
  onPickLocation,
}) => {
  const token = useSelector(selectUserToken);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [pickupMarkers, setPickupMarkers] = useState<any>([]);
  const [dropoffMarkers, setDropoffMarkers] = useState<any>([]);
  const [pickupLocation, setPickupLocation] = useState<any>(null);
  const [dropoffLocation, setDropoffLocation] = useState<any>(null);
  const [autocompletePickup, setAutocompletePickup] = useState<any>(null);
  const [autocompleteDropoff, setAutocompleteDropoff] = useState<any>(null);
  const [errandPrice, setErrandPrice] = useState<number | null>(null);

  const onLoadPickup = (autocomplete: any) =>
    setAutocompletePickup(autocomplete);
  const onLoadDropoff = (autocomplete: any) =>
    setAutocompleteDropoff(autocomplete);

  const handlePickupSelect = () => {
    const place = autocompletePickup.getPlace();
    const location = place.geometry.location;

    setPickupMarkers([{ lat: location.lat(), lng: location.lng() }]);
    setPickupLocation({ lat: location.lat(), lng: location.lng() });

    // Call the parent component with the selected pickup location
    onPickLocation(
      { lat: location.lat(), lng: location.lng() },
      dropoffLocation,
      0
    );
  };

  const handleDropoffSelect = () => {
    const place = autocompleteDropoff.getPlace();
    const location = place.geometry.location;

    setDropoffMarkers([{ lat: location.lat(), lng: location.lng() }]);
    setDropoffLocation({ lat: location.lat(), lng: location.lng() });

    // Call the parent component with the selected dropoff location
    onPickLocation(
      pickupLocation,
      {
        lat: location.lat(),
        lng: location.lng(),
      },
      0
    );

    // Calculate distance and price when dropoff is selected
    // calculateDistance(pickupLocation, {
    //   lat: location.lat(),
    //   lng: location.lng(),
    // });
  };

  const calculateDistance = async (pickup: any, dropoff: any) => {
    if (pickup && dropoff) {
      const response: any = await post(
        "errands/calculate-distance",
        {
          pickupLocation,
          dropoffLocation,
        },
        token || ""
      );
      console.log(response);

      const distance = response.distance;
      const price = response.price;

      onPickLocation(pickupLocation, dropoffLocation, price);
      setErrandPrice(price);
    }
  };
  useEffect(() => {
    if (pickupLocation && dropoffLocation) {
      calculateDistance(pickupLocation, dropoffLocation);
    }
  }, [pickupLocation, dropoffLocation]);

  const calculatePrice = (distance: number) => {
    const pricePerKm = 3000;
    return (distance / 1000) * pricePerKm;
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <Autocomplete
          className=" col-span-2"
          onLoad={onLoadPickup}
          onPlaceChanged={handlePickupSelect}
          options={{ bounds }}
        >
          <input type="text" placeholder="Pickup location" className="input" />
        </Autocomplete>
        <Autocomplete
          className=" col-span-2"
          onLoad={onLoadDropoff}
          options={{ bounds }}
          onPlaceChanged={handleDropoffSelect}
        >
          <input type="text" placeholder="Dropoff location" className="input" />
        </Autocomplete>
      </div>
      {errandPrice !== null && (
        <div className="errand-price mt-2 mb-2">
          <h3 className=" form-label text-xl">
            Estimated Errand Price: {formatToNaira(errandPrice)}
          </h3>
        </div>
      )}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {pickupMarkers.map((marker: any, index: any) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
        {dropoffMarkers.map((marker: any, index: any) => (
          <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default GoogleMapPicker;
