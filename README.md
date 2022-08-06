# Quick-redirect
Quick program I made that uses cloudflare workers to quickly redirect 
users to a site of my choice
Heavily inspired by https://yellkey.com

## How it works
- Access panel website and submit link
- Anyone who visits the appropriate URL is then redirected to your webpage 
of choice
- Automatically expires after 24 hours
- Allows quick sharing of links with friends!
- Does NOT have built-in protection for panel page - I use cloudflare 
access to protect it

## Install:
1. Get cloudflare and setup a domain
2. create 2 workers with the code in each file
3. Create a workers KV
4. Bind the KVs to the workers under the variable "database"
5. Assign worker routes to subdomains, such as qr.example.com ("quick 
redirect") and 
r.example.com
6. Lock qr.example.com behind cloudflare access

 
