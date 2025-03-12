# FbdevOutput(String) Constructor


Create a Linux frame buffer device output



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FbdevOutput(
	string fileName = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	Optional fileName As String = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        ?fileName : string 
(* Defaults:
        let _fileName = defaultArg fileName null
*)
-> FbdevOutput
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbdevOutput.cs#L27" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The frame buffer device name. Defaults to the value in environment variable FRAMEBUFFER or /dev/fb0 when FRAMEBUFFER is not set</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_FbdevOutput">FbdevOutput Class</a>  
<a href="Overload_Avalonia_LinuxFramebuffer_FbdevOutput__ctor">FbdevOutput Overload</a>  
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  

