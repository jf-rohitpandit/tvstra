const db = require('../database/schema')
const express = require('express');
const Nexmo = require('nexmo');
const User = db.User;

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF'
    
})

var verifyRequestId;

async function otp(req, res){
    var msg = '';
    const {number} = req.body;
    if(!number){
        msg = "Enter all the details";
        console.log(msg);
        return res.render('phoneLogin');
    }else{
        try{
            const user = User.findOne({
                phone: number
            });
            if(user === null){
                msg = "phone number not found";
                console.log(msg);
                return res.render('phoneLogin');
            }else{
                nexmo.verify.request({
                    number:req.body.number,
                    brand: 'tvastra',
                    workflow_id: 6
                },(err, result)=>{
                    if(err){
                        console.log(err);
                        return res.redirect('/login');
                    }else{
                        verifyRequestId = result.request_id;
                        console.log('request id', verifyRequestId);
                        return res.redirect('/otpVerify');   
                        }  
                    }
                )  
            }
        }catch{
            msg= 'some error occured, please try agian in some time';
            console.log(msg);
            return res.render('login',{msg: msg});
        }
    }
}

// async function otp(req, res){
//     nexmo.verify.request({
//         number:req.body.number,
//         brand: 'tvastra',
//         workflow_id: 6
//     },(err, result)=>{
//         if(err){
//             console.log(err);
//             return res.redirect('login');
//         }else{
//             try{
//                 const user = User.findOne({
//                     where: {
//                         phone:req.body.number
//                     }
//                 })
//                 if(user !== null){
//                     verifyRequestId = result.request_id;
//                     console.log('request id', verifyRequestId);
//                     return res.redirect('/otpVerify');
//                 }else{
//                     console.log('phone number not found');
//                     return res.redirect('login');
//                 }
                
//             }
//             catch{
//                 console.log('some error occured in getting the user details')
//             }
            
//         }
//     })
// }

function otpVerify(req,res){
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
module.exports ={
    otp: otp,
    otpVerify: otpVerify
}
