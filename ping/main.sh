#!/bin/bash
ips=$(cat ./ip.txt)
json='{"time":'$(date +%s)
for ip in $ips
do
    #time=$(ping -w 1 $(echo $ip | cut -d ',' -f 2) | grep icmp_seq | cut -d " " -f 7 | cut -d "=" -f 2)
    #name=$(echo $ip | cut -d ',' -f 1)
    json=$(echo $json',"'$(echo $ip | cut -d ',' -f1)'":"'$(ping -w 1 $(echo $ip | cut -d ',' -f2) | grep icmp_seq | cut -d " " -f 7 | cut -d "=" -f 2))'ms"' 
done
json=$(echo $json'}')

echo $json | mongoimport mongodb://localhost:27017 --db="brontosauriodb" --collection="ping"
