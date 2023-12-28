import { useState } from "react";
import styled from "styled-components";
import { HiCodeBracket } from "react-icons/hi2";

import Loader from "../components/Loader";
import Button from "../components/Button";
import ToastMessage from "../components/ToastMessage";
import Select from "../components/Select";

import { useGetCountriesAndCities } from "../hooks/location/useGetCountriesAndCities";
import { useSetUserLocation } from "../hooks/location/useSetUserLocation";

import { getCoordinatesFromLocation } from "../api/location";
import { useFetchAuthUser } from "../hooks/user/useFetchAuthUser";

type CountryProps = {
  country: string;
  iso2: string;
};

const Welcome = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryProps>({
    country: "",
    iso2: "",
  });
  const [errorMessage, setErrorMessage] = useState({ message: "" });
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const { countries, isPending: isLoadingCountries } =
    useGetCountriesAndCities();
  const mappedCountries = countries?.map((country: CountryProps) => ({
    value: country.country,
    label: country.country,
    defaultValue: "Select a country",
  }));

  const mappedCities = cities?.map((city: string) => ({
    value: city,
    label: city,
  }));

  const { isPending, mutate, setLocationError } = useSetUserLocation();
  const isLoading = isLoadingCountries || isPending;
  const error = setLocationError || errorMessage;

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorMessage({ message: "" });
    if (e.target.value) {
      const selectedCountryObject = countries.filter(
        (country: CountryProps) => country.country === e.target.value
      );
      setSelectedCountry({
        country: selectedCountryObject[0]["country"],
        iso2: selectedCountryObject[0]["iso2"],
      });

      const cities = selectedCountryObject[0].cities;
      if (cities.length > 0) setCities(cities);
    } else {
      setSelectedCountry({ country: "", iso2: "" });
      setSelectedCity("");
      setCities([]);
    }
  };

  const handleCitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrorMessage({ message: "" });
    setSelectedCity(e.target.value);
  };

  const handleStart = async () => {
    const { lat, lon } = await getCoordinatesFromLocation(
      selectedCity,
      selectedCountry.iso2
    );

    console.log(errorMessage);
    if (lat === 0 && lon === 0)
      return setErrorMessage({
        message: "Error fetching location, try another city",
      });

    mutate({
      location: {
        lat,
        lon,
        city: selectedCity,
        country: selectedCountry.country,
      },
    });
  };

  return (
    <Loader isLoading={isLoading}>
      {error && <ToastMessage text={error.message} />}
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
          {/* <SelectContainer onChange={handleCountrySelect}>
            <option value="">Select a country</option>
            {countries?.map((country: CountryProps, idx: number) => (
              <option key={idx} value={country.country}>
                {country.country}
              </option>
            ))}
          </SelectContainer> */}
          <Select
            defaultValue="Select a country"
            data={mappedCountries}
            handleOnChange={handleCountrySelect}
          />
          {selectedCountry.country && (
            <Select
              defaultValue="Select a city"
              data={mappedCities}
              handleOnChange={handleCitySelect}
            />
          )}
          {/* {Object.keys(selectedCountry).length > 0 && (
            <SelectContainer onChange={handleCitySelect}>
              <option value="">Select a city</option>
              {cities?.map((city: string, idx: number) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </SelectContainer>
          )} */}
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
  background-color: ${({ theme }) => theme.colors.primaryLight};
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
  font-size: ${({ theme }) => theme.font.body.base};
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
  font-size: ${({ theme }) => theme.font.heading.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
`;

const WelcomeText = styled.p`
  font-size: ${({ theme }) => theme.font.body.base};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

