import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  project_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
