// here in the (API) folder:
// first:
// IMP = we will basically get the data from (API) for our application:
// we are using the ('https://dummyjson.com') api:

// second:
// we need to get the different type of data from the diff (url's) of this (api):
// acc to the components.which we have created in our application:

// third:
// so for doing that we need to create the different functions.
// each function basically get the (data) of particular (url) from the (api):
// we will create these functions. acc to the components which we have created in our application:

// fourth:
// last we need to pick the method or way:
// through which we are getting the data from the (api):
// we are using the (fetch) method:for getting the data from the (api):

// code here:

// 1:
// create the variable in which we will add the base-url of the (api):
// so that we need to have write that base url again and agian for the every fucntion which we create to get data of the particular from the (api):
const BASE_URL = "https://dummyjson.com";

// 2:
// create the functions: acc the  different urls of the (api):we use the (arrow) functions:
// create them with the (export) property:so that we did not have to write the (export) statement differenlty for all them:

// 3:
// first function is get all the products from (api):
export const getProducts = () => fetch(`${BASE_URL}/products`).then((response) => response.json());
  


// second function is get all the product categories:
export const getProductCategories = () =>
    fetch(`${BASE_URL}/products/categories`).then((response) => response.json());

// third function is search a specific product by its category:
export const getProductByCategory = (category) => 
    fetch(`${BASE_URL}/products/category/${category}`).then((response)=> response.json());

// fourth function we will get the details of hole-product by giving its unique-id to the (api):
export const getProductById = (id) => 
    fetch(`${BASE_URL}/products/${id}`).then((response) => response.json());
