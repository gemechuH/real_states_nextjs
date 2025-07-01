'use server'
async function addProperty(formData) {
    // get the name from the form data on console log
    const name = formData.get('');
    console.log(name);
}
export default addProperty