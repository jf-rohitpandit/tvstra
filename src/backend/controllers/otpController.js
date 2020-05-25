const db = require('../database/schema')
const express = require('express');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey:'ca344c09',
    apiSecret: 'DaCTpIzPZPfuj3GF'
    
})

var verifyRequestId;

function otp(req, res){
    nexmo.verify.request({
        number:req.body.number,
        brand: 'tvastra',
        workflow_id: 6
    },(err, result)=>{
        if(err){
            console.log(err);
            return res.redirect('login');
        }else{
            verifyRequestId = result.request_id;
            console.log('request id', verifyRequestId);
            return res.redirect('/otpVerify');
        }
    })
}

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
            res.redirect('/')
        }
    })
}
module.exports ={
    otp: otp,
    otpVerify: otpVerify
}
