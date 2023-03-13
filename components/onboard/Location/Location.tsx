import Text from "@/components/shared/Text/Text";
import { locations } from "@/mocks/mockData/location";
import useOnboardStore from "@/store/onboard";
import * as S from "./Location.styled";

function Location() {
  const { location, setLocation } = useOnboardStore();

  const handleClick = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <S.LocationContainer>
      {locations.map(locationItem => (
        <button
          key={locationItem.id}
          className={location.includes(locationItem.name) ? "isSelected" : ""}
          onClick={() => handleClick(locationItem.name)}
        >
          <Text weight={500} size={15}>
            {locationItem.name}
          </Text>
          <Text weight={500} size={12}>{`(${locationItem.storeCounts}개)`}</Text>
          {locationItem.label && (
            <S.LabelTag type="single" label={locationItem.label}>
              {locationItem.label}
            </S.LabelTag>
          )}
        </button>
      ))}
    </S.LocationContainer>
  );
}

export default Location;
