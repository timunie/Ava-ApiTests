# ShouldRenderOnUIThread Property


Render directly on the UI thread instead of using a dedicated render thread. Only applicable if <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> is set to <a href="T_Avalonia_Win32CompositionMode">RedirectionSurface</a>. This setting is only recommended for interop with systems that must render on the UI thread, such as WPF. This setting is false by default.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs#L150" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Win32PlatformOptions">Win32PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

