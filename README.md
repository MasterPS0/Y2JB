# Y2JB

Userland code execution using the PS5 YouTube app.

## Requirements

- At least 4.03 firmware PS5

### For Jailbroken PS5 (Webkit, Lua, BD-JB)
- Fake or legit activated PS5
- USA YouTube app version 1.03 PKG
- FTP access to the console

### For Non-Jailbroken PS5
- USB flash drive
- Pre-made backup file

## Setup Instructions

0. Set your PS5 network DNS to 127.0.0.2 (Or block www.youtube.com from your custom DNS)

### Jailbroken PS5

1. Install YouTube app version 1.03 PKG on your PS5
2. Use FTP to access the following path (create if not present):
   ```
   /user/download/PPSA01650
   ```
3. Download `download0.dat` from the releases page and send it using FTP

### Non-Jailbroken PS5

1. Download the backup file from the releases page
2. Follow Sony's official guide to [restore backup data from USB](https://www.playstation.com/en-gb/support/hardware/back-up-ps5-data-USB/)  
**Note: Restoring backup WILL FACTORY RESET YOUR PS5**

## Credits

* **shahrilnet, null_ptr** - Referenced many codes from [Remote Lua Loader](https://github.com/shahrilnet/remote_lua_loader)
* **ntfargo** - Thanks for providing V8 CVEs and CTF writeups

## Disclaimer

This tool is provided as-is for research and development purposes only. Use at your own risk. The developers are not responsible for any damage, data loss, or consequences resulting from the use of this software.
