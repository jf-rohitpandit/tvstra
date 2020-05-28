const User = require('../database/schema')
const express = require('express');
const Nexmo = require('nexmo');
// const User = db.User;

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF'
    
})

var verifyRequestId;
var number= null ;


async function otp(req, res){
    
    var msg = '';
    number = req.body.number;
    if(!number){
        msg = "Enter all the details";
        console.log(msg);
        return res.render('phoneLogin');
    }else{
        try{
            const user = await User.findOne({
                phone: number
            });
            if(user === null){
                msg = "phone number not found";
                console.log(msg);
                return res.redirect('phoneLogin');
            }else{
                nexmo.verify.request({
                    number: '91'+req.body.number,
                    brand: 'tvastra',
                    workflow_id: 6
                },(err, result)=>{
                    if(err){
                        console.log(err);
                        return res.redirect('/login');
                    }else{
                        verifyRequestId = result.request_id;
                        console.log('request id', verifyRequestId);
                        req.session.info = 'OTP expires in 60s'
                        return res.redirect('/otpVerify');   
                        }  
                    }
                )  
            }
        }catch{
            msg= 'some error occured, please try agian in some time';
            console.log(msg);
            return res.redirect('login');
        }
    }
}

async function otpVerify(req, res){
    let code = req.body.code;
    console.log(code);
    if(!code){
        console.log('Enter the code')
        res.redirect('login');
    }else{
        try{
            const user = await User.findOne({
                phone: number
            })
            if(user){
                nexmo.verify.check({
                    request_id: verifyRequestId,
                    code: req.body.code
                },(err, result)=>{
                    if(err){
                        console.log(err);
                        res.redirect('login');
                    }else{
                        console.log(result)
                        req.session.user = user;
                        res.redirect('/')
                    }
                })
            }
        }catch{
            console.log('some error occured');
            return res.redirect('login');
        }
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
