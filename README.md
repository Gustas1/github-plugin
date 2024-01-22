# github-plugin
A github plugin that changes the distance between repositories, adds icons to files on repositories and in tree view

I created this plugin to "prettify" github as I felt repository pages felt a little lacklusture.

<h2>Installation</h2>

<h3>Chrome</h3>

To set up the chrome extension you will need to:

<ul>
  <li>Download the chrome version</li>
  <li>Then move it to another folder of your choosing</li>
  <li>Navigate to "chrome://extensions"</li>
  <li>Click on "Load unpacked" and select the root folder of the extension</li>
</ul>

<h3>FireFox</h3>

To set up the firefox extension you will need to:

<ul>
  <li>Download the firefox version</li>
  <li>Then move it to another folder of your choosing</li>
  <li>Go to "about:debugging#/runtime/this-firefox" in firefox</li>
  <li>Click on "Load Temporary Add-on..."</li>
  <li>Navigate to where you stored the folder and click on "manifest.json"</li>
  <li>Go to "about:addons" in firefox</li>
  <li>Click on the 3 dots beside the extension</li>
  <li>Click on "Permissions" and allow access for both websites and github.com</li>
</ul>

<h2>How to use</h2>

After the extension has been loaded, it will appear in your extensions page

Click on "Details" then click on "Pin to Toolbar" to make it easier to find (Optional)

Click on the extension and input a number into the text box, go to a github page that has all your repositories 
(something ending with "?tab=repositories")

You can see that the padding will change based on your number

Go to a github repository page and see the icons change to the coresponding file extension

<h2>How it was done</h2>

<p>Made with HTML, SCSS and JavaScript</p>

<table>
  <tr>
    <td>          
      <img src = "https://github.com/Gustas1/github-plugin/assets/70669645/9066c7db-f42d-445b-8e90-0fb1447f683b" width = 50px height = 50px>
    </td>
    <td>
      <img src = "https://github.com/Gustas1/github-plugin/assets/70669645/f775e7da-bf41-4a5f-bd3c-e6e517e44452" width = 50px height = 50px>
    </td>    
    <td>
      <img src = "https://github.com/Gustas1/github-plugin/assets/70669645/7e789a57-d63f-4501-a4ba-4d1310ada953" width = 50px height = 50px>
    </td>
  </tr>
</table>

<p>Made by Gustas</p>