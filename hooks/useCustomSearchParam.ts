/* eslint-disable no-case-declarations */
import { useSearchParams } from "next/navigation";
import { TCategory, TPlatform, TRecieveMethod } from "@/types/api";
import { generateFilterPriceRangeOption, parsePriceRangeToMinAndMaxPrice } from "@/utils/util";
import {
  IFilterPayload,
  IFilterStore,
  IMappingPayloadToStoreObject,
  IMappingStoreToPayloadObject,
} from "@/types/store/filter";

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

const MAPPING_FILTERSTORE_TO_PAYLOAD: IMappingStoreToPayloadObject = {
  keys: {
    카테고리: "categories",
    주문플랫폼: "platforms",
    수령방법: "receive",
  },
  주문플랫폼: {
    "카카오톡 채널": "KAKAO",
    인스타그램: "INSTAGRAM",
    "업체 홈페이지": "WEBSITE",
    아이디어스: "IDIUS",
    네이버스토어: "NAVER",
  },
  수령방법: {
    "택배로 배송": "canDelivery",
    "매장에서 픽업": "canPickup",
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
  page: 0,
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

  const filterStoreToPayload = (filterStore: IFilterStore) => {
    const payload: IFilterPayload = { ...initialPayload };

    Object.keys(filterStore).forEach(storeKey => {
      const mappedKey =
        MAPPING_FILTERSTORE_TO_PAYLOAD.keys[storeKey as keyof IMappingStoreToPayloadObject["keys"]];
      switch (storeKey) {
        case "주문플랫폼":
          (payload[mappedKey as keyof IFilterPayload] as TPlatform[]) = [] as TPlatform[];
          filterStore[storeKey].forEach(platform => {
            const mappedValue =
              MAPPING_FILTERSTORE_TO_PAYLOAD[storeKey][
                platform as keyof IMappingStoreToPayloadObject["주문플랫폼"]
              ];
            (payload[mappedKey as keyof IFilterPayload] as TPlatform[]).push(
              mappedValue as TPlatform,
            );
          });
          break;
        case "수령방법":
          const value = filterStore[storeKey];
          const mappedValue =
            MAPPING_FILTERSTORE_TO_PAYLOAD[storeKey][
              value as keyof IMappingStoreToPayloadObject["수령방법"]
            ];
          (payload[mappedKey as keyof IFilterPayload] as TRecieveMethod | string) = mappedValue;
          break;
        case "카테고리":
          (payload[mappedKey as keyof IFilterPayload] as TCategory[]) = filterStore[storeKey];
          break;
        case "가격":
          const [minPrice, maxPrice] = parsePriceRangeToMinAndMaxPrice(filterStore[storeKey]);
          if (minPrice < 0 || maxPrice < 0) return;
          payload.minPrice = minPrice;
          payload.maxPrice = maxPrice;
          break;
        default:
      }
    });

    return payload;
  };

  const payloadToUrl = (filterPayload: IFilterPayload) => {
    const params = new URLSearchParams(searchParams);

    Object.keys(filterPayload).forEach(key => {
      params.delete(key);
      const value = filterPayload[key as keyof IFilterPayload];

      if (Array.isArray(value)) {
        if (!value.length) return;
        value.forEach(item => params.append(key, item));
      } else if (typeof value === "number") {
        if (value < 0) return;
        params.set(key, String(value));
      } else {
        if (!value) return;
        params.set(key, value);
      }
    });

    return params.toString();
  };

  return { urlToPayload, payloadToFilterStore, filterStoreToPayload, payloadToUrl };
}

export default useCustomSearchParam;
