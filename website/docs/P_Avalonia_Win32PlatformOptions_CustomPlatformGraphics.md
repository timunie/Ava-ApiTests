# CustomPlatformGraphics Property


Provides a way to use a custom-implemented graphics context such as a custom ISkiaGpu. When this property set <a href="P_Avalonia_Win32PlatformOptions_RenderingMode">RenderingMode</a> is ignored and <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> only accepts null or <a href="T_Avalonia_Win32CompositionMode">RedirectionSurface</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPlatformGraphics? CustomPlatformGraphics { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property CustomPlatformGraphics As IPlatformGraphics
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CustomPlatformGraphics : IPlatformGraphics with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs#L166" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a>

## See Also


#### Reference
<a href="T_Avalonia_Win32PlatformOptions">Win32PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

