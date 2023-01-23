import * as yup from 'yup';

export const LocationSchema = yup.object().shape({
        locations: yup.array().of(yup.object().shape({
                type: yup.string().required('Required'),
                coordinates: yup.array().of(yup.object().shape({
                        0: yup.string().required('Required'),
                        1: yup.string().required('Required'),
                    })
                ),
                description: yup.string().required('Required'),
                day: yup.string().required('Required'),
            })
        ),
    });
