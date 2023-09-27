import styled from "styled-components";
import { HiCodeBracket } from "react-icons/hi2";

import Loader from "../components/Loader";
import { useGetCountriesAndCities } from "../hooks/location/useGetCountriesAndCities";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useSetUserLocation } from "../hooks/location/useSetUserLocation";
import { getCoordinatesFromLocation } from "../api/location";
import { fetchCredentials } from "../utils/userUtils";
import { UserLocation } from "../types/location";

type CountryProps = {
  country: string;
  iso2: string;
};

const Welcome = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryProps>({});
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [location, setLocation] = useState<UserLocation>({});
  const userID = fetchCredentials();
  const { countries, isLoading: isLoadingCountries } =
    useGetCountriesAndCities();
  const { isLoading: isLoadingLocation, mutate } = useSetUserLocation(
    location,
    userID
  );
  const isLoading = isLoadingCountries || isLoadingLocation;

  useEffect(() => {
    if (Object.keys(location).length > 0) {
      mutate(location, userID);
    }
  }, [location, userID, mutate]);

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      const selectedCountryObject = countries.filter(
        (country: CountryProps) => country.country === e.target.value
      );
      setSelectedCountry(selectedCountryObject[0]);

      const cities = selectedCountryObject[0].cities;
      if (cities.length > 0) setCities(cities);
    } else {
      setSelectedCountry({});
      setSelectedCity("");
      setCities([]);
    }
  };

  const handleCitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const handleStart = async () => {
    const { lat, lon } = await getCoordinatesFromLocation(
      selectedCity,
      selectedCountry.iso2
    );
    setLocation({ lat, lon });
  };
  return (
    <Loader isLoading={isLoading}>
      <WelcomWrapper>
        <Logo>
          FELLOW <HiCodeBracketStyle /> CODERS
        </Logo>
        <WelcomeInnerWrapper>
          <WelcomeHeader>Welcome to the community! 🌟</WelcomeHeader>
          <WelcomeText>
            Share your location, so fellow developers can connect and
            collaborate with you more easily. 📍🤝
          </WelcomeText>
          <SelectContainer onChange={handleCountrySelect}>
            <option value="">Select a country</option>
            {countries?.map((country: CountryProps, idx: number) => (
              <option key={idx} value={country.country}>
                {country.country}
              </option>
            ))}
          </SelectContainer>
          {Object.keys(selectedCountry).length > 0 && (
            <SelectContainer onChange={handleCitySelect}>
              <option value="">Select a city</option>
              {cities?.map((city: string, idx: number) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </SelectContainer>
          )}
          {selectedCity && (
            <Button
              title="LET'S GO! 🚀"
              customStyle={{ width: "130px", marginTop: "2rem" }}
              onClick={handleStart}
            />
          )}
        </WelcomeInnerWrapper>
      </WelcomWrapper>
    </Loader>
  );
};

export default Welcome;

const WelcomWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryTransparent};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`;

const Logo = styled.h1`
  position: absolute;
  left: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const HiCodeBracketStyle = styled(HiCodeBracket)`
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 900;
`;
const WelcomeInnerWrapper = styled.div`
  width: 100%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20vh;
  gap: 1rem;
`;

const WelcomeHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const WelcomeText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SelectContainer = styled.select`
  width: 50%;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

