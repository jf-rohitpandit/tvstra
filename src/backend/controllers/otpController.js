const User = require('../database/schema')
const express = require('express');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF'
    
})

var verifyRequestId=null;
var number= null ;

async function changephoneOtp(req, res){
    const newPhone = req.body.number;
    if(!newPhone){
        req.flash('error', 'Enter the phone number');
        return res.redirect('/profile');
    }else{
        nexmo.verify.request({
            number: '91' + newPhone,
            brand: 'tvastra',
            workflow_id: 6,
            pin_expiry: '90'
        },(err, result)=>{
            if(err){
                return res.redirect('/profile');
            }else{
                verifyRequestId = result.request_id;
                console.log('request id', verifyRequestId);
                req.flash('info', 'OTP expires in 60s');
                return res.redirect('/otpVerifyPhone');   
                }  
            }
        )                           
    }
}

async function otpVerifyPhone(req, res){
    let code = req.body.code;
    console.log(code);
    if(!code){
        req.flash('error', 'Enter the code');
        res.redirect('/profile');
    }else{
        console.log('in the user section')
        nexmo.verify.check({
            request_id: verifyRequestId,
            code: req.body.code
        },async (err, result)=>{
            if(err){
                console.log(err);          
                res.redirect('/profile');
            }else{
                if(result.error_text !== 'The code provided does not match the expected value'){
                    req.flash('success', 'Successfully phone changed');
                    req.session.user.phone = newPhone;
                    

                }else{
                    req.flash('error', 'code invalid');
                    res.redirect('/profilt');
                }
                
            }
        })
    }
}





async function otp(req, res){
    let email = req.body.email;
    console.log(email);
    if(!email){
        req.flash('msg', 'Enter the email');
        return res.redirect('/login');
    }else{
        try{
            const user =await User.findOne({
                email: email
            });
            if(user === null){
                req.flash('error', 'Email not found');
                return res.redirect('/login');
            }else{
                    req.session.user = user;
                    console.log(req.session.user);
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
                            req.flash('info', 'OTP expires in 60s');
                            return res.redirect('/otpVerify');   
                            }  
                        }
                    )                
            }
        }catch{
            req.flash('error', 'some error occured retry')
            return res.redirect('/login');
        }
    }
      
}

async function otpVerify(req, res){
    let code = req.body.code;
    console.log(code);
    if(!code){
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

module.exports ={
    otp: otp,
    otpVerify: otpVerify,
    changephoneOtp: changephoneOtp,
    otpVerifyPhone: otpVerifyPhone
}
