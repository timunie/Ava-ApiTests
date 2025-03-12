# FbdevOutput(String, Nullable&lt;PixelFormat&gt;) Constructor


Create a Linux frame buffer device output



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FbdevOutput(
	string fileName,
	PixelFormat? format
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	fileName As String,
	format As PixelFormat?
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        fileName : string * 
        format : Nullable<PixelFormat> -> FbdevOutput
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbdevOutput.cs#L39" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The frame buffer device name. Defaults to the value in environment variable FRAMEBUFFER or /dev/fb0 when FRAMEBUFFER is not set</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a>)</dt><dd>The required pixel format for the frame buffer. A null value will leave the frame buffer in the current pixel format. Otherwise sets the frame buffer to the required format</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_FbdevOutput">FbdevOutput Class</a>  
<a href="Overload_Avalonia_LinuxFramebuffer_FbdevOutput__ctor">FbdevOutput Overload</a>  
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  

