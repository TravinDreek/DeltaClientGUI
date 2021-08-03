# Delta Client GUI
Here is the source code of the GUI for Delta Client. Basically this GUI is a Web-based mod and config manager for the Client. With support from [Ultralight](https://github.com/ultralight-ux/Ultralight), an HTML rendering engine, the GUI runs perfectly inside the Java Client.

The `DeltaClient.htm` is the only file required for the GUI instance, which interacts with JavaScript API provided by Delta Client (Java). The `test.js` provides a virtual environment for testing the GUI in the Web browser. The lines in `DeltaClient.htm` that link `test.js` should be removed when running in the Web render powered by Ultralight inside the Java Client.

## About Delta Client
Delta Client was a Minecraft client for competitive PvP players. This project was created by [@luanmenglei](https://github.com/luanmenglei) in early 2021 and has soon gone dead, leaving the code unfinished.

Please note that maintenance of the code is not considered.