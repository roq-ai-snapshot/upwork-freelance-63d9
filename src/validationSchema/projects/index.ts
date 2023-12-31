import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  client_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
