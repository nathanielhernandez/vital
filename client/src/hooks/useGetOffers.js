import axios from "axios";
import { useEffect, useState } from "react";

const useGetOffers = (pageNumber, businessID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offers, setOffers] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    console.log(businessID);
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "/api/v1/offer/getoffers",
      params: { page: pageNumber, user: businessID },
    })
      .then((res) => {
        setOffers((prevOffers) => {
          return [...prevOffers, ...res.data.offers];
        });
        setHasMore(res.data.offers.length > 0);
        setLoading(false);
      })
      .catch((e) => console.log(e));
    console.log(offers);
  }, [pageNumber]);

  return { loading, error, offers, hasMore };
};

export default useGetOffers;
