# DrmOutputOptions Properties




## Properties
<table>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorType">ConnectorType</a></td>
<td>Specifies whether our connector is HDMI-A, DVI, DisplayPort, etc. If null, the preferred connector will be used.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorTypeId">ConnectorTypeId</a></td>
<td>Specifies the connector type ID used with <a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorType">ConnectorType</a>. If null, the preferred connector type ID will be used.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_EnableInitialBufferSwapping">EnableInitialBufferSwapping</a></td>
<td>If true an two cycle buffer swapping is processed at init. Default: True</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_InitialBufferSwappingColor">InitialBufferSwappingColor</a></td>
<td>Color for <a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_EnableInitialBufferSwapping">EnableInitialBufferSwapping</a> Default: R0 G0 B0 A0</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_Scaling">Scaling</a></td>
<td>Scaling factor. Default: 1.0</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_VideoMode">VideoMode</a></td>
<td>Specifies the video mode with which the DrmOutput should be created, if it is not found it will fallback to the preferred mode. If null, the preferred mode will be used.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_DrmOutputOptions">DrmOutputOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  

