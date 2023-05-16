/* eslint-disable no-case-declarations */
import { useSearchParams } from "next/navigation";
import { TCategory, TPlatform, TRecieveMethod } from "@/types/api";
import { generateFilterPriceRangeOption } from "@/utils/util";
import { IFilterPayload, IFilterStore, IMappingPayloadToStoreObject } from "@/types/store/filter";

const MAPPING_PAYLOAD_TO_FILTERSTORE: IMappingPayloadToStoreObject = {
  keys: {
    categories: "카테고리",
    minPrice: "가격",
    maxPrice: "가격",
    platforms: "주문플랫폼",
    receive: "수령방법",
  },
  platforms: {
    KAKAO: "카카오톡 채널",
    INSTAGRAM: "인스타그램",
    WEBSITE: "업체 홈페이지",
    IDIUS: "아이디어스",
    NAVER: "네이버스토어",
  },
  receive: {
    canDelivery: "택배로 배송",
    canPickup: "매장에서 픽업",
  },
};

const initialPayload: IFilterPayload = {
  categories: [],
  minPrice: -1,
  maxPrice: -1,
  platforms: [],
  receive: "",
  search: "",
  sort: "",
  page: -1,
};

const initialFilterStore: IFilterStore = {
  카테고리: [],
  가격: "",
  주문플랫폼: [],
  수령방법: "",
};

function useCustomSearchParam() {
  const searchParams = useSearchParams();

  const urlToPayload = () => {
    const payload = { ...initialPayload };

    Object.keys(payload).forEach(key => {
      switch (key) {
        case "platforms":
          payload[key] = searchParams.getAll(key) as TPlatform[];
          break;
        case "categories":
          payload[key] = searchParams.getAll(key) as TCategory[];
          break;
        case "minPrice":
        case "maxPrice":
        case "page":
          payload[key] = Number(searchParams.get(key) || -1);
          break;
        case "search":
        case "receive":
        case "sort":
          payload[key] = searchParams.get(key) || "";
          break;
        default:
      }
    });

    return payload;
  };

  const payloadToFilterStore = (payload: IFilterPayload) => {
    const filterStoreObject = { ...initialFilterStore };
    let minPrice = -1;
    let maxPrice = -1;

    Object.keys(payload).forEach(payloadKey => {
      const mappedKey =
        MAPPING_PAYLOAD_TO_FILTERSTORE.keys[
          payloadKey as keyof IMappingPayloadToStoreObject["keys"]
        ];

      switch (payloadKey) {
        case "page":
        case "sort":
        case "search":
          break;
        case "platforms":
          (filterStoreObject[mappedKey as keyof IFilterStore] as TPlatform[]) = [] as TPlatform[];
          payload[payloadKey].forEach(platform => {
            const mappedValue = MAPPING_PAYLOAD_TO_FILTERSTORE[payloadKey][platform];
            (filterStoreObject[mappedKey as keyof IFilterStore] as TPlatform[]).push(
              mappedValue as TPlatform,
            );
          });
          break;
        case "receive":
          const value = payload[payloadKey];
          const mappedValue =
            MAPPING_PAYLOAD_TO_FILTERSTORE[payloadKey][
              value as keyof IMappingPayloadToStoreObject["receive"]
            ];
          (filterStoreObject[mappedKey as keyof IFilterStore] as TRecieveMethod | string) =
            mappedValue;
          break;
        case "categories":
          (filterStoreObject[mappedKey as keyof IFilterStore] as TCategory[]) = payload[payloadKey];
          break;
        case "minPrice":
          minPrice = payload[payloadKey];
          break;
        case "maxPrice":
          maxPrice = payload[payloadKey];
          break;
        default:
      }
    });

    if (minPrice >= 0 && maxPrice >= 0) {
      filterStoreObject["가격"] = generateFilterPriceRangeOption(minPrice, maxPrice);
    }

    return filterStoreObject;
  };

  return { urlToPayload, payloadToFilterStore };
}

export default useCustomSearchParam;
