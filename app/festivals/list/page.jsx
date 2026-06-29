import { fetchAPI } from "@/lib/api";
import FestivalList from "@/Components/Festival/FestivalList";

export default async function FestivalListPage() {

    const response = await fetchAPI(
        "/temple-events?populate=*"
    );

    return (
        <FestivalList
            festivals={response.data}
        />
    );

}