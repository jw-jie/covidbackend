const {connection} = require('../database/db');
//const { sendEmailWithNodemailer } = require("../helpers/email");
const { encrypt } = require("../helpers/function");
const QRCode = require('qrcode');
const moment =require('moment');

//function for registering vaccine
module.exports.register = (req, res) => {
    const { lastName,
            firstName, 
            middleName,
            suffix,
            birthDate,
            sex,
            email,
            contactNumber,
            streetSubdivision,
            barangay,
            municipality,
            serialCode,
            employment,
            pwd,
            civilStatus
     } = req.body;

     let sqlInsert = 'INSERT INTO vaccine_reg (first_name, middle_name, last_name, suffix, birth_date, sex, email, contact_number, street, barangay, municipality, serial_code, employment, pwd, civil_status, residency) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
     connection.query(sqlInsert,[ firstName, middleName, lastName, suffix, birthDate, sex, email, contactNumber, streetSubdivision, barangay, municipality, serialCode, employment, pwd, civilStatus, 'No'  ], function(err, result) {
        
        if (err){
            return res.status(400).json({
               message: 'Error Registering. Try again.'
           })
         }else{
            const dataQR= `${serialCode}/${lastName}/${firstName}/${middleName}/${suffix}/${birthDate}/${employment}/${sex}/${civilStatus}/${pwd}/${email}/${contactNumber}/${streetSubdivision} ${barangay} ${municipality}/${moment().format('MMMM-DD-YYYY')}`;
            QRCode.toDataURL(`${encrypt(dataQR)}`, function (err, url) {
                if(err){
                    return res.status(401).json({
                        message: 'Error Registering. Try again.'
                    })
                } else {
                    // const emailData = {
                    //     from: "lgudagupan@gmail.com", 
                    //     to: email, 
                    //     subject: "Covid-19 Vacinne Registration",
                    //     html: `
                    //               <h1>COVID-19 Vaccine </h1>
                    //               <p>Please present this QR Code to LGU DAGUPAN</p>
                    //               <hr />
                    //               <p>This email may contain sensitive information</p>
                    //           `,
                    //     attachments: [
                    //             {   // utf-8 string as an attachment
                    //                 path: `${url}`
                    //             }
                    //         ]
                    //   };
                      
                        // sendEmailWithNodemailer(req, res, emailData)

                        return res.status(200).json({
                            message: `Registered Successfully.`,
                          });
                     
                }
   
              })
         }  
       })
    }

    //function for registering vaccine
    module.exports.residency = (req, res) => {
    const { residency, serialNumber } = req.body;

    let sqlUpdate =`UPDATE vaccine_reg SET residency = '${residency}' WHERE serial_code = '${serialNumber}'`;
    connection.query(sqlUpdate, (err, result)=>{
        if(err){
            return res.status(401).json({
                message: `Error Registering. Try again.${err}`
            })
        } else {
            return res.status(200).json({
                message: `Residency verified successfully`,
              });
        }
    })
    
    }
