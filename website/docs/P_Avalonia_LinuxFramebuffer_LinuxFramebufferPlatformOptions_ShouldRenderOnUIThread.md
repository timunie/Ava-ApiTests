# ShouldRenderOnUIThread Property


Render directly on the UI thread instead of using a dedicated render thread. This can be usable if your device don't have multiple cores to begin with. This setting is false by default.



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ShouldRenderOnUIThread { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property ShouldRenderOnUIThread As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ShouldRenderOnUIThread : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/LinuxFramebufferPlatformOptions.cs#L19" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_LinuxFramebuffer_LinuxFramebufferPlatformOptions">LinuxFramebufferPlatformOptions Class</a>  
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  

