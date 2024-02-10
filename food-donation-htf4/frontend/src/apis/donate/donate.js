const donate = (formdata)=>{
    try {
        const { foodname, donorname, phone, description } = formdata;
        if (!foodname || !donorname || !phone || !description) {
            return res.status(400).json({ error: 'Please fill all the fields' });
        } else {
            const alluserdetails = localStorage.getItem('BHOJNA_user');
            const userID = alluserdetails.id;
            const response = await fetch('https://ap-south-1.aws.neurelo.com/rest/foodDonor/__one', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": NeurosNeureloAPI
                },
                body: JSON.stringify({
                    foodname: foodname,
                    description: description,
                    phone: phone,
                    donorname: donorname,
                    userID: userID
                })
            })
            res.status(200).json({ "message": 'Donation done' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}