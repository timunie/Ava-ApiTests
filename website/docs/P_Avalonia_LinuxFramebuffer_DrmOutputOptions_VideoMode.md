# VideoMode Property


Specifies the video mode with which the DrmOutput should be created, if it is not found it will fallback to the preferred mode. If null, the preferred mode will be used.



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PixelSize? VideoMode \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property VideoMode As PixelSize?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member VideoMode : Nullable<PixelSize> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/DrmOutputOptions.cs#L32" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_PixelSize">PixelSize</a>)

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_DrmOutputOptions">DrmOutputOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  
