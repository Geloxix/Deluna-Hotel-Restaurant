import  Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface BookNowModalProps {
    open: boolean;
};

const BookNowModal = ({ open } : BookNowModalProps) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700',
        p: 4,
    };

    return (

        <div>
            <Modal
                open={open}
            >
                <Box sx={style}>
                    <h1>Make A Reservation</h1>
                    <form action="">

                        <label htmlFor="checkIn">Check in</label>
                        <input type="date" name="checkIn" id="checkIn" />

                        <label htmlFor="checkOut">Check out</label>
                        <input type="date" name="checkOut" id="checkOut" />

                        <button type="submit">Book</button>
                        <button>cancel</button>
                    </form>
                </Box>
            </Modal> 
        </div>
    );
};

export default BookNowModal;
