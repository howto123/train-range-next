
import dynamic from "next/dynamic";
import { MapsProps } from "./CustomMap";

const Wrapper = ( props: MapsProps ) => {
    const CustomMap = dynamic(() => import("@/components/CustomMap"), {
        loading: () => <p>loading...</p>,
        ssr: false
    })

    // TODO possibly export this dependency


      const mapProps = {
        ...props,
      }

    return <CustomMap { ...mapProps } />

}

export default Wrapper;