const yup = require('yup')

const productSchema = yup.object().shape({
    product_name: yup
        .string()
        .strict(true)
        .trim()
        .required('Product name is required field'),
    category_id: yup
        .number()
        .strict(true)
        .required('category ID is required field'),
    product_inventory: yup
        .number()
        .strict(true)
        .min(0, 'inventory has to be equal or greater than 0'),
    product_price: yup
        .number()
        .strict(true)
        .required('Price is required field'),
    product_description: yup
        .string()
        .strict(true)
        .trim()
        .required('Description is required field')
        .max(250, 'description should be at most 250 characters'),
    image_url: yup
        .string()
        .strict(true)
        .trim()
        .required('Image is required field'),
    active: yup
        .boolean()
})
module.exports = { productSchema }
