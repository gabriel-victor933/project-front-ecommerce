import Questions from '../sections/home/Questions'
import CancellationPolicy from '../sections/support/CancellationPolicy'
import OfficesInfos from '../sections/support/OfficesInfos'
import ReturnPolicy from '../sections/support/ReturnPolicy'
import SupportCover from '../sections/support/SupportCover'
export default function Support(){

    return (
        <>
            <SupportCover />
            <OfficesInfos />
            <ReturnPolicy />
            <CancellationPolicy />
            <Questions />
        </>
    )
}