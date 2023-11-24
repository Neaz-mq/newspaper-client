

const Plans = () => {
    return (
        <div>
            <div>
            <h2 className="text-5xl font-bold p-14 mb-5 text-center">Our Plans</h2>
            </div>

            <div className="flex justify-between items-center flex-wrap mx-10 gap-5">

<div className="card w-96  border-2 border-rose-200 ">
  <div className="card-body">
  <input type="checkbox" aria-label="Free for 1 month" className="btn bg-red-200" />
  </div>
  <div className="card-body">
  <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">Premium Individual</h1>
    <h1 className="text-xl font-semibold">Free for 1 month</h1>
  </div>
  </div>
  <div className="card-body text-lg font-semibold ">
    <p>• 1 Premium account</p>
    <p>• Cancel anytime</p>
    <p>• 15 hours/month of listening time from our audiobooks subscriber catalog</p>
  </div>

  <div className="card-body">
  <input type="checkbox" aria-label="Free for 1 month" className="btn bg-red-200 rounded-full" />
  </div>
  <div className="card-body">
   
    <p className="text-lg font-semibold">Free for 1 month, then $10.99 per month. after, Offer only available if you haven't Premium before. <span className="underline underline-offset-1 ">Terms apply</span></p>
   
  </div>
</div>

<div className="card w-96  border-2 border-orange-200">
  <div className="card-body">
    <div className="flex justify-between items-center ">
<h1 className="text-2xl font-bold">Premium Duo</h1>
<h1 className="text-lg font-semibold mt-6">$14.99 <br /> Per Month</h1>


</div>

  </div>

  <div className="card-body text-lg font-semibold mt-16 mb-2">
    <p>• 2 Premium account</p>
    <p>• Block explicit </p>
    <p>• Access to spotify kids</p>
    <p>• Cancel anytime</p>
    <p>• 15 hours/month of listening time from our audiobooks subscriber catalog (Plan manager only)</p>
  </div>

  <div className="card-body">
  <input type="checkbox" aria-label="Get Premium Duo" className="btn bg-orange-300 rounded-full" />
  </div>
  <div className="card-body">
   
    <p className="text-lg font-semibold">For couples who reside at the same address. <span className="underline underline-offset-1 ">Terms apply</span></p>
   
  </div>
</div>

<div className="card w-96  border-2 border-blue-200">
  <div className="card-body">
    <div className="flex justify-between items-center ">
<h1 className="text-2xl font-bold">Premium Family</h1>
<h1 className="text-lg font-semibold mt-6">$16.99 <br /> Per Month</h1>


</div>

  </div>
  <div className="card-body">
  
  </div>
  <div className="card-body text-lg font-semibold mt-2 ">
    <p>• Up to 6 Premium or Kids account</p>
    <p>• Block explicit music</p>
    <p>• Access to spotify kids</p>
    <p>• Cancel anytime</p>
    <p>• 15 hours/month of listening time from our audiobooks subscriber catalog (Plan manager only)</p>
  </div>

  <div className="card-body">
  <input type="checkbox" aria-label="Get Premium Family" className="btn bg-blue-300 rounded-full" />
  </div>
  <div className="card-body">
   
    <p className="text-lg font-semibold">For up to 6 family members residing at the same address. <span className="underline underline-offset-1 ">Terms apply</span></p>
   
  </div>
</div>
</div>
            </div>
        
    );
};

export default Plans;