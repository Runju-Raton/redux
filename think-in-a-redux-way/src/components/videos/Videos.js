import Video from "./Video";
import {useGetVideosQuery} from "../../features/api/apiSlice";

export default function Videos() {
    const {data:videos, isLoading,isError,} = useGetVideosQuery();
    let content = '';
    if(isLoading){
        console.log('Loading :'+isLoading);
    }
    if(!isLoading && isError){
        console.log('Error :'+ isError);
    }

    if(!isLoading && !isError && videos.length > 0){
        content = videos.map((video) => <Video key={video.id} video={video}></Video>);
    }
    return content;
}
