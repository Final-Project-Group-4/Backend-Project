import * as yup from 'yup';

export const Days = yup.object().shape({
            days: yup.array().of(yup.object().shape({
                                    number: yup.number().required('Required'),
                                    title: yup.string().title('Please enter a title').required('Required'),
                                    description: yup.string().description('Please enter a description').required('Required'),
                                    elevation: yup.string(),
                                    altitudeGained: yup.string(),
                                    altitudeLost: yup.string(),
                                    descentTo: yup.string(),
                                    note: yup.string(),
                                    hikingTime: yup.string(),
                                    })
                                ),
});