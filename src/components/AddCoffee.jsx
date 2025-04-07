import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e=>{
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        // 1.send data to the server
        
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  form.reset()
            }
        })
    }

  return (
    <div>
      <h2 className="text-2xl underline font-bold mt-12 text-amber-300 text-center">
        Add New Coffee
      </h2>
      <form onSubmit={handleAddCoffee} className="text-center w-[850px] mt-12 mx-auto">
        <div>
          <fieldset className="fieldset w-[850px] bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend font-semibold text-xl">Add Coffee</legend>

            <div className="my-3 md:grid grid-cols-2 gap-3">
              <div>
                <label className="my-2 font-bold fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="mr-20 input"
                  placeholder="Enter coffee Name"
                />

                <label className="my-2 font-bold fieldset-label">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="mr-20 input"
                  placeholder="Enter coffee supplier"
                />

                <label className=" my-2 font-bold fieldset-label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="mr-20 input"
                  placeholder="Enter coffee category"
                />
              </div>
              <div>
                <label className="my-2 font-bold fieldset-label">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="mr-20 input"
                  placeholder="Enter coffee chef"
                />

                <label className="my-2 font-bold fieldset-label">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="mr-20 input"
                  placeholder="Enter coffee taste"
                />

                <label className="my-2 font-bold fieldset-label">Details</label>
                <input
                  type="text"
                  name="details"
                  className="mr-20 input"
                  placeholder="Enter coffee details"
                />
              </div>
              <div className="md:flex justify-center items-center gap-2 my-2">
              <label className="font-bold fieldset-label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="Enter photo URL"
                />
              </div>
            </div>
              <input type="submit" value="Add Coffee" className="font-semibold text-xl bg-[#D2B48C] h-[50px] rounded-lg btn" />
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
