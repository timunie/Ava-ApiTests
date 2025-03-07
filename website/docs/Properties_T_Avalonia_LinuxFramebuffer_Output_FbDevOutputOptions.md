# FbDevOutputOptions Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions_FileName">FileName</a></td>
<td>The frame buffer device name. Defaults to the value in environment variable FRAMEBUFFER or /dev/fb0 when FRAMEBUFFER is not set</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions_PixelFormat">PixelFormat</a></td>
<td>The required pixel format for the frame buffer. A null value will leave the frame buffer in the current pixel format. Otherwise sets the frame buffer to the required format</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions_RenderDirectlyToMappedMemory">RenderDirectlyToMappedMemory</a></td>
<td>If set to true, double-buffering will be disabled and scene will be composed directly into mmap-ed memory region While this mode saves a blit, you need to check if it won't cause rendering artifacts your particular device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions_Scaling">Scaling</a></td>
<td>The initial scale factor to use</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions_UseAsyncFrontBufferBlit">UseAsyncFrontBufferBlit</a></td>
<td>If set to true, FBIO_WAITFORVSYNC ioctl and following memcpy call will run on a dedicated thread saving current one from doing nothing in a blocking call</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions">FbDevOutputOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  
