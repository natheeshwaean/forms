import './App.css';
import { useState } from 'react';
import 'react-time-picker/dist/TimePicker.css';
import { Form } from 'semantic-ui-react';
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const { register, control, handleSubmit, watch, formState: { errors } } = useForm();
  
  const [selectedDate, setSelectedDate] = useState(null);
  const maxDate = new Date("04/10/2023");
  const range2 = watch('range');
 

  const files = (file) => {
    const valid = 1000000;
    return file[0].size <= valid || "please upload your file";
  };
  
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  
  return (
    <div className="main-body">
      <h1>REGISTRATION FORM</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            type="text"
            {...register("firstName", {
              required: true,
              pattern: /^[a-zA-Z ]+$/,
              minLength: 3,
              maxLength: 20
            })}
          />
        </Form.Field>
        {errors.firstName && <p className='text-error'>This field is required</p>}
        {errors.firstName?.type === "pattern" && <span className='text-error'>Please enter only alphabet letters</span>}
        
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            type="text"
            {...register("lastName", {
              required: true,
              pattern: /^[a-zA-Z ]+$/,
              maxLength: 10
            })}
          />
        </Form.Field>
        {errors.lastName && <p className='text-error'>This field is required</p>}
        {errors.lastName?.type === "pattern" && <span className='text-error'>Please enter only alphabet letters</span>}
        
        <div className='email'>
  <Form.Field>
    <label htmlFor='email'>Email</label>
    <input
      placeholder='Email'
      id='email'
      type="email"
      {...register("email", {
        required: true,
        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      })}
    />
     {errors.email && <p className='text-error'>Please check the Email</p>}


        {/* <Form.Field>
          <label>Date of Birth:</label>
          <DatePicker name='dateOfBirth'   {...register('DOB', { required: true, DOB: true })} selected={selectedDate} maxDate={maxDate} onChange={date => setSelectedDate(date)} />
        </Form.Field>
        {/* {errors.DOB && <p className='text-error'>Please check the Date of Birth</p>} */}
        {/* {errors.dateOfBirth?.type === "required" && <span className='text-error'>Please check the Date of Birth</span>} */}
        
        <Form.Field>
          <label>Age limit</label>
          <div>
            <input type="range" className='age' id="volume" name="volume" min={15} max={60} {...register("range", { required: true, min: 18, max: 40 })} />
            <div>{range2}</div>
          </div>
        </Form.Field>
        {errors.range && <p className='text-error'>Please enter age between 18 to 40</p>}
        
        <div className='option'>
          <label htmlFor="mySelect">Select an option</label>
          <Controller
            name="mySelect"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select id="mySelect" {...field}>
                <option disabled value="">--Please choose a State--</option>
              <option value="TAMIL NADU">TAMIL NADU</option>
              <option value="KERALA">KERALA</option>
              <option value="BANGALORU">BANGALORU</option>
            </select>
          )}
        />
  {errors.mySelect && <p className='text-error'>Please select your state</p>}
 </div>

  </Form.Field>
 
</div>
<div className='determineTime'>
  <label htmlFor="appt">Time:</label>
  <input 
    type="time" 
    id="appt" 
    name="appt"
    min="09:00" 
    max="18:00" 
    {...register("time",{required:true})}
  />
  {errors.time && <p className='text-error'>Please check the appointment time</p>}
</div>
<div className='month'>
  <label htmlFor="start">Start month:</label>
  <input 
    type="month" 
    id="start" 
    name="start"
    min="2023-03" 
    max="2023-05"
    {...register('month',{required:true})}
  />
  {errors.month && <p className='text-error'>Please enter the month</p>}
</div>
<div className='week'>
  <label htmlFor="week">Choose a week in April or June:</label>
  <input  
    type="week" 
    name="week" 
    id="camp-week"
    min="2022-W18" 
    max="2023-W26" 
    {...register('week',{required:true})}
  />
  {errors.week && <p className='text-error'>Please enter the week</p>}
</div>
<div className="gender">
  <label>Gender:</label>
  <div className="gender-options">
    <input 
      type="radio" 
      name="gender" 
      id="male" 
      value="male" 
      {...register("gender",{required:true})}
    />
    <label htmlFor="male">Male</label>
    <input 
      type="radio" 
      name="gender" 
      id="female" 
      value="female" 
      {...register("gender",{required:true})}
    />
    <label htmlFor="female">Female</label>
  </div>
  {errors.gender && <p className='text-error'>Please enter the gender</p>}
</div>

   <div className='expNum'>
    <label htmlFor='mobile'>Experience</label>
    <input type='number' placeholder='Enter your Experience in year' min={0} max={60}  {...register('expNumber',{required:true,min:0,max:12})} />
    {errors.expNumber && <p className='text-error'>Please your Experience in years</p>}
    
   </div>
          <Form.Field>
            <label>Password</label>
            <input  
              placeholder='Password'
              type="password" id='password'
              {...register("password", {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
              })}
            />
          </Form.Field>
          <span>password must contain atleast 8 characters with number and symbols</span>
          {errors.password && <p className='text-error'>Please check the Password</p>}

          
      <div className='mob'>
        <label htmlFor="phone">Enter your phone number:</label>
        <input type="tel" id="phone" name="phone" {...register("phone", { 
          required: true,maxLength:12,minLength:8})} />
  {errors.phone && <p className='text-error'>Please check your phone number</p>}
      </div>

      <div className='file'>
       <label htmlFor='avatar'>Upload your resume</label>
       <input type='file' id="avatar" name="avatar"
        accept="image/png, image/jpeg" size={1000000} {...register('file',{required :true,validate:files})}/>
  {errors.file && <p className='text-error'>Please upload file between 1MP</p>} </div>

     <div className='colour'>
       <input type="color" id="head" name="head"/>
       <label htmlFor="head">color</label>
     </div>

    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="ok" id="flexCheck"{...register("agreed",{required:true,agreed:true})} />
      <label className="form-check-label" htmlFor="flexCheck">
        I agreed
     </label>
  {errors.agreed && <p className='text-error'>Please Select the checkbox </p>}
     </div>

  
    <div className='linked'>
     <label htmlFor="linked">website url</label>
     <input type='url'{...register('link',{required:true,link:true})}/>
  {errors.link && <p className='text-error'>please check the url</p>}
    </div>

    <div className='search'>
     <label htmlFor="search">Search</label>
     <input type='search' id='searchWeb'{...register("null",{required:true})}/>
     <button>Search</button>
 {errors.null && <p className='text-error'>please enter the search bar</p>}
    </div>
              <div className='butt'>
                
                <div className='sum'>
                <input type="submit"  id='sum' value='Submit'/>
                </div>


                <div className='but'>
                <input type="button" id='but' value='Button' onClick={handleSubmit(onSubmit)}/>
                  </div>


                <div className='res'>
                <input type="reset" id='res' value='Reset'/>
                  </div>


                </div>  

            </Form>
        </div>
  );
};

export default App;
