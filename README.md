# NodeJS Screenshot Server

Screenshot server written in NodeJS. Simple backend for an screenshot server.

## Download

To setup your own screenshot server follow the next steps below:

```
git clone https://github.com/OnSebii/Screenshot-Server My-Screenshot-Server
cd My-Screenshot-Server
npm run start
```

## Setup

### config.json example

Rename **config_example.json** to **config.json**!

```
{
  "port": 3000,
  "urllength": 8,
  "chars": "abcde",
  "path": "D:\\Dokumente\\GitHub\\Screenshot-Server\\test",
  "apikey": "123"
}
```

**urllenght** is the length of letters of your file what will be saved on the server side
**chars** is a sequence of letters or numbers under which the uploaded file wil be saved
**path** if you want to save your files in a different path than the default one (/uploads). Leave it blank if you want to use /uploads as your path.
**apikey** is required if you only want to give certain people access to your screenshot server. You will need to edit **shareXConfig_Example.sxcu** also.

## Create and load your ShareX config

### shareXConfig_Example.sxcu example

Edit **shareXConfig_Example.sxcu** with your own data.

```
{
  "Name": "YOUR CONFIG NAME",
  "DestinationType": "ImageUploader, TextUploader, FileUploader",
  "RequestURL": "DOMAIN:3000/upload",
  "FileFormName": "sharex",
  "Headers": {
    "key": "123"
  }
}
```

**Name** is your config name.
**RequestURL** if your IP adress or domain.name.
**key** is your private key. With this key you can grant access to your screenshot server. **Need to be the same key as in your config.json file**
