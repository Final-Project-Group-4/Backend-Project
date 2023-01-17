import CreateTour from './CreateTour';
import {useFormContext} from '../../hooks/useFormContext';
import Locations from './Locations';
import Days from './Days';

export default function FormInputs() {

    const { page } = useFormContext();

    const display = {
        0: <CreateTour />,
        1: <Locations />,
        2: <Days />

    }
    const content = (
        <div>
            {display[page]}
        </div>

    )

return content

}