# FbDevOutputOptions Class




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class FbDevOutputOptions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class FbDevOutputOptions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type FbDevOutputOptions = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbDevOutputOptions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FbDevOutputOptions</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_FbDevOutputOptions__ctor">FbDevOutputOptions()</a></td>
<td>Initializes a new instance of the FbDevOutputOptions class</td>
</tr>
</table>

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

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  
