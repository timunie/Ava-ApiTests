# WglProfiles Property


Windows OpenGL profiles used when <a href="P_Avalonia_Win32PlatformOptions_RenderingMode">RenderingMode</a> is set to <a href="T_Avalonia_Win32RenderingMode">Wgl</a>. This setting is 4.0 and 3.2 by default.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IList<GlVersion> WglProfiles \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property WglProfiles As IList(Of GlVersion)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member WglProfiles : IList<GlVersion> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs#L156" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(<a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a>)

## See Also


#### Reference
<a href="T_Avalonia_Win32PlatformOptions">Win32PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
