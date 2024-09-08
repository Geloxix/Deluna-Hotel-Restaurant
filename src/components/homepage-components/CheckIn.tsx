
const CheckIn = () => {
    return(
        <div className="flex items-center justify-center absolute bg-transparent bottom-[-300px] w-full font-poppins">
            <form action="" className="flex items-center gap-10 px-[60px] py-[50px] bg-white rounded-xl shadow-lg">
                <div className="form-divs">
                    <label htmlFor="">Check in</label>
                    <input type="date" name="checkIn" id="checkIn" className="form-divs-input" />
                </div>
                
                <div className="form-divs">
                    <label htmlFor="checkOut">Check Out</label>
                    <input type="date" name="checkOut" id="checkOut" className="form-divs-input" />
                </div>

                <div className="form-divs">
                    <label htmlFor="room">Room</label>
                    <select name="room" id="room" className="form-divs-select">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                    </select>
                </div>

                <div className="form-divs">
                    <label htmlFor="adult">Adult</label>
                    <select name="adult" id="adult" className="form-divs-select">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                    </select>
                </div>

                <div className="form-divs">
                    <label htmlFor="children">Children</label>
                    <select name="children" id="children" className="form-divs-select">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                    </select>
                </div>

                <button type="submit" className="px-[5rem] mb-[-22px]  py-[1rem] bg-color-1  text-white hover:text-color-1 hover:bg-white hover:shadow-2xl transition-all duration-700ms">Check Availability</button>
            </form>
        </div>
    );
};

export default CheckIn;
