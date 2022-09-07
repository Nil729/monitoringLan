#!/bin/bash

device="SonicWall"
t0=1
while true 
do
    while $t0 -lt $(ls -alS --time-style=+%e /var/log/syslog | awk -F " " '{print $5}')
    do
        sleep 1
    done
    t0=$(ls -alS --time-style=+%e /var/log/syslog | awk -F " " '{print $5}')  

    ### Get variables ###
    msg=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $4}')
    datetime=$(sudo grep id=fw /var/log/syslog | tail -n 1 | awk '{print $1 " " $2 " " $3}')
    date=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $7}' | cut -b 7-)
    time=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $8}' | cut -c -8)
    sn=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $6}' | cut -c 4-)
    fw=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $9}' | cut -c 4-)
    pri=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $10}' | cut -c 5-)
    c=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $11}' | cut -c 3-)
    m=$(grep id=fw /var/log/syslog | tail -n 1 | awk '{print $12}' | cut -c 3-)
    action=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $6}')
    n=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $1}' | cut -c 3-)
    src_ip=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $2}' | cut -c 5- | awk -F ":" '{print $1}')
    src_port=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $2}' | cut -c 5- | awk -F ":" '{print $2}')
    src_interface=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $2}' | cut -c 5- | awk -F ":" '{print $3}')
    dst_ip=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $3}' | cut -c 5- | awk -F ":" '{print $1}')
    dst_port=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $3}' | cut -c 5- | awk -F ":" '{print $1}')
    dst_interface=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $3}' | cut -c 5- | awk -F ":" '{print $1}')
    srcMAC=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $4}' | cut -c 8-)
    dstMAC=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $5}' | cut -c 8-)
    proto=$(grep id=fw /var/log/syslog | tail -n 1 | awk -F"\"" '{print $5}' | awk '{print $6}' | cut -c 7- | awk -F "/" '{print $1}')
    ### Complete template ###
    log=$(sed "s/#msg/$msg/g" ./template.json | sed "s/#device/$device/g" | sed "s/#rec_timedate/$datetime/g" | sed "s/#log_date/$date/g" | sed "s/#log_time/$time/g" | sed "s/#sn/$sn/g" | sed "s/#fw/$fw/g" | sed "s/#pri/$pri/g" | sed "s/#c/$c/g" | sed "s/#m/$m/g" | sed "s/#n/$n/g" | sed "s/#src_ip/$src_ip/g" | sed "s/#src_port/$src_port/g" | sed "s/#src_interface/$src_interface/g" | sed "s/#dst_ip/$dst_ip/g" | sed "s/#dst_port/$dst_port/g" | sed "s/#dst_interface/$dst_interface/g" | sed "s/#srcMAC/$srcMAC/g" | sed "s/#dstMAC/$dstMAC/g" | sed "s/#protocol/$proto/g" | sed "s/#action/$action/g")

    echo $log | mongoimport mongodb://localhost:27017 --db="brontosauriodb" --collection="logs_fw"
``done
