# DrmOutput(DrmCard, Boolean, DrmOutputOptions) Constructor


Initializes a new instance of the <a href="T_Avalonia_LinuxFramebuffer_Output_DrmOutput">DrmOutput</a> class



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DrmOutput(
	DrmCard card,
	bool connectorsForceProbe = false,
	DrmOutputOptions options = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	card As DrmCard,
	Optional connectorsForceProbe As Boolean = false,
	Optional options As DrmOutputOptions = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        card : DrmCard * 
        ?connectorsForceProbe : bool * 
        ?options : DrmOutputOptions 
(* Defaults:
        let _connectorsForceProbe = defaultArg connectorsForceProbe false
        let _options = defaultArg options null
*)
-> DrmOutput
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/DrmOutput.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_LinuxFramebuffer_Output_DrmCard">DrmCard</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd><dt>  <a href="T_Avalonia_LinuxFramebuffer_DrmOutputOptions">DrmOutputOptions</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_Output_DrmOutput">DrmOutput Class</a>  
<a href="Overload_Avalonia_LinuxFramebuffer_Output_DrmOutput__ctor">DrmOutput Overload</a>  
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  
