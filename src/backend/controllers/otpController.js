const User = require('../database/schema')
const express = require('express');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF'
    
})

var verifyRequestId=null;
var number= null ;


async function otp(req, res){
    let email = req.body.email;
    console.log(email);
    if(!email){
        // msg = 'Enter the email';
        // console.log(msg);
        // req.session.error = msg;
        req.flash('msg', 'Enter the email');
        return res.redirect('/login');
    }else{
        try{
            const user =await User.findOne({
                email: email
            });
            if(user === null){
                // msg = "Email not found";
                // console.log(msg);
                // req.session.error = msg;
                req.flash('error', 'Email not found');
                return res.redirect('/login');
            }else{
                    // msg= 'welocm'
                    // console.log(msg);
                    req.session.user = user;
                    console.log(req.session.user);
                    // req.session.success = msg;
                    nexmo.verify.request({
                        number: '918130459580',
                        brand: 'tvastra',
                        workflow_id: 6,
                        pin_expiry: '90'
                    },(err, result)=>{
                        if(err){
                            console.log(err);
                            return res.redirect('/login');
                        }else{
                            verifyRequestId = result.request_id;
                            console.log('request id', verifyRequestId);
                            // req.session.info = 'OTP expires in 60s'
                            req.flash('info', 'OTP expires in 60s');
                            return res.redirect('/otpVerify');   
                            }  
                        }
                    )                
            }
        }catch{
            // msg= 'some error occured, please try agian in some time';
            // console.log(msg);
            req.flash('error', 'some error occured retry')
            return res.redirect('/login');
        }
    }
      
}

async function otpVerify(req, res){
    let code = req.body.code;
    console.log(code);
    if(!code){
        // console.log('Enter the code')
        req.flash('error', 'Enter the code');
        res.redirect('/otpVerify');
    }else{
        nexmo.verify.check({
            request_id: verifyRequestId,
            code: req.body.code
        },(err, result)=>{
            if(err){
                console.log(err);
                req.session.destroy(err=>{
                    console.log(err);
                })            
                res.redirect('/login');
            }else{
                // console.log(result)
                // msg = 'sucessfully login';
                // res.session.success = msg;
                console.log(result);
                if(result.error_text !== 'The code provided does not match the expected value'){
                    req.flash('success', 'Successfully login');
                    res.redirect('/')
                }else{
                    req.flash('error', 'code invalid');
                    res.redirect('/login');
                }
                
            }
        })

    }
}

// function otpVerify(req,res){
//     nexmo.verify.check({
//         request_id: verifyRequestId,
//         code: req.body.code
//     },(err, result)=>{
//         if(err){
//             console.log(err);
//             res.redirect('login');
//         }else{
//             console.log(result)
//             req.session.user = user;
//             res.redirect('/')
//         }
//     })
// }
module.exports ={
    otp: otp,
    otpVerify: otpVerify
}
